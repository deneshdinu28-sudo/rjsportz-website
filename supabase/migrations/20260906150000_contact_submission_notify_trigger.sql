-- Contact-submission email alerts via a hand-written Postgres trigger,
-- with the service_role key held in Supabase Vault (never in this file).
--
-- Replaces the Supabase Dashboard "Database Webhooks" feature, which on this
-- fresh project fails with `schema "supabase_functions" does not exist` (a
-- platform-side provisioning gap - the dashboard never bootstrapped its
-- supabase_functions schema; pg_net and the table/event config are fine).
-- A dashboard webhook is itself just an AFTER INSERT trigger that calls
-- net.http_post(); this migration writes that trigger directly.
--
-- The POST body matches the envelope the dashboard would have sent:
--   { "type": "INSERT", "table": ..., "schema": ..., "record": <new row>,
--     "old_record": null }
-- so supabase/functions/notify-contact-submission/index.ts, which reads
-- payload.record, needs no change.
--
-- KEY HANDLING: the service_role JWT is stored once in Vault, out of band
-- (see the one-time step below), and read at trigger time from
-- vault.decrypted_secrets. It never appears in this migration, in git, in
-- pg_get_functiondef() output, or in the dashboard's function view. Rotating
-- the key is a single vault.update_secret() call with no code change.
--
--   -- one-time, run in the SQL Editor (NOT committed):
--   select vault.create_secret(
--     'PASTE_SERVICE_ROLE_JWT_HERE',
--     'notify_contact_submission_key',
--     'service_role JWT used by trg_notify_contact_submission to call the '
--     || 'notify-contact-submission edge function'
--   );
--
-- SECURITY DEFINER: the public contact form inserts as the `anon` role,
-- which has USAGE on neither `net` nor `vault`. Without SECURITY DEFINER the
-- function raises `permission denied for schema net` / `vault` and the
-- INSERT rolls back with it. The function is owned by the role that runs
-- this migration (postgres) and executes with its rights.
--
-- Fire-and-forget: net.http_post() only enqueues a request for pg_net's
-- background worker and returns immediately, so the INSERT is never blocked
-- by e-mail latency. The EXCEPTION block guarantees an unexpected failure
-- (including a missing Vault secret) degrades to a WARNING in the Postgres
-- logs rather than rolling back a lead that was already captured.

create extension if not exists supabase_vault;

create or replace function public.notify_contact_submission()
  returns trigger
  language plpgsql
  security definer
  set search_path = ''
as $$
declare
  service_role_key text;
  function_url constant text :=
    'https://rdphtjdivbiensgnlhvt.supabase.co/functions/v1/notify-contact-submission';
begin
  select decrypted_secret into service_role_key
  from vault.decrypted_secrets
  where name = 'notify_contact_submission_key';

  if service_role_key is null then
    raise warning
      'notify_contact_submission: Vault secret notify_contact_submission_key '
      'not set - skipping notification for submission %', new.id;
    return new;
  end if;

  perform net.http_post(
    url     => function_url,
    headers => jsonb_build_object(
      'Content-Type',  'application/json',
      'Authorization', 'Bearer ' || service_role_key
    ),
    body    => jsonb_build_object(
      'type',       'INSERT',
      'table',      tg_table_name,
      'schema',     tg_table_schema,
      'record',     to_jsonb(new),
      'old_record', null
    ),
    timeout_milliseconds => 5000
  );
  return new;
exception
  when others then
    raise warning 'notify_contact_submission: http enqueue failed: %', sqlerrm;
    return new;
end;
$$;

-- Trigger functions can only be invoked by the trigger machinery (a direct
-- SELECT raises "trigger functions can only be called as triggers"), but
-- revoke the default PUBLIC EXECUTE anyway to keep the SECURITY DEFINER
-- surface minimal. The AFTER INSERT trigger keeps firing regardless -
-- runtime EXECUTE is not re-checked against the inserting role.
revoke execute on function public.notify_contact_submission() from public;

drop trigger if exists trg_notify_contact_submission on public.contact_submissions;

create trigger trg_notify_contact_submission
  after insert on public.contact_submissions
  for each row
  execute function public.notify_contact_submission();
