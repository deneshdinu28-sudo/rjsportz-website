-- Coach-application email alerts, mirroring
-- 20260906150000_contact_submission_notify_trigger.sql exactly, but
-- pointed at coach_applications and the sibling
-- notify-coach-application edge function. Contact-form submissions
-- already emailed the studio inbox on insert; coach applications never
-- did, so an applicant could submit and nobody at RJ Sportz would know
-- unless they happened to open the Leads Viewer.
--
-- Reuses the same Vault secret (notify_contact_submission_key) as the
-- contact-form trigger - it's just a service_role JWT used to
-- authenticate the trigger's call to Edge Functions, not scoped to any
-- one table, so no new secret is needed if that Vault entry already
-- exists from the earlier migration's one-time setup step.
--
-- SECURITY DEFINER, fire-and-forget via pg_net, and the exception
-- handler all follow the same reasoning as the contact-form trigger -
-- see that migration's comments for the full rationale.

create or replace function public.notify_coach_application()
  returns trigger
  language plpgsql
  security definer
  set search_path = ''
as $$
declare
  service_role_key text;
  function_url constant text :=
    'https://rdphtjdivbiensgnlhvt.supabase.co/functions/v1/notify-coach-application';
begin
  select decrypted_secret into service_role_key
  from vault.decrypted_secrets
  where name = 'notify_contact_submission_key';

  if service_role_key is null then
    raise warning
      'notify_coach_application: Vault secret notify_contact_submission_key '
      'not set - skipping notification for application %', new.id;
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
    raise warning 'notify_coach_application: http enqueue failed: %', sqlerrm;
    return new;
end;
$$;

revoke execute on function public.notify_coach_application() from public;

drop trigger if exists trg_notify_coach_application on public.coach_applications;

create trigger trg_notify_coach_application
  after insert on public.coach_applications
  for each row
  execute function public.notify_coach_application();
