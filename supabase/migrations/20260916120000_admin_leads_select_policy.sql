-- Grants the site's single admin account read access to leads, for the
-- in-app /admin Leads Viewer (src/pages/Admin.tsx). Previously SELECT was
-- blocked entirely at RLS (see 20260906140000_initial_schema.sql) with the
-- Supabase Table Editor as the only way to view submissions.
--
-- Scoped to a specific admin email rather than a bare `TO authenticated`
-- policy, so that even if email sign-ups are ever enabled on this project,
-- an arbitrary new account still can't read leads - only a session whose
-- JWT email claim matches the admin address can.
--
-- One-time manual step (not part of this migration, run once in the
-- Supabase Dashboard): Authentication -> Users -> Add user, using
-- rjsportzofficial1@gmail.com and a password of your choosing. That's the
-- login for /admin.

CREATE POLICY "admin can view contact submissions"
  ON public.contact_submissions FOR SELECT
  TO authenticated
  USING (auth.email() = 'rjsportzofficial1@gmail.com');

CREATE POLICY "admin can view coach applications"
  ON public.coach_applications FOR SELECT
  TO authenticated
  USING (auth.email() = 'rjsportzofficial1@gmail.com');
