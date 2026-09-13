-- Initial schema for this Supabase project (fresh project, replacing the
-- abandoned Lovable-managed one this site used to run on).
--
-- RLS design for this single-admin, no-user-accounts marketing site:
--  - INSERT is scoped to the `anon` role specifically (the only role the
--    public-facing forms ever use), rather than a bare WITH CHECK (true)
--    with no role restriction. Keeps intent explicit; any future
--    authenticated-user insert path would need its own deliberate policy.
--  - SELECT stays blocked entirely at the RLS layer (USING (false)). There
--    is no in-app admin UI here - the site owner reads submissions via the
--    Supabase Dashboard's Table Editor (an authenticated dashboard session
--    bypasses RLS for the project owner), or the service_role secret for
--    any scripted access. Same "real access is gated by a secret/owner
--    account" pattern as before, without the multi-role complexity
--    rj-sportz-hub needs - there's exactly one admin here.

CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  sport_interest TEXT NOT NULL,
  message TEXT,
  source TEXT DEFAULT 'Contact Form',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon can submit contact form"
  ON public.contact_submissions FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "no public read access for contact submissions"
  ON public.contact_submissions FOR SELECT
  USING (false);

CREATE TABLE public.coach_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  sport TEXT NOT NULL,
  experience TEXT NOT NULL,
  certifications TEXT,
  location TEXT,
  availability TEXT,
  about TEXT,
  resume_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.coach_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon can submit coach application"
  ON public.coach_applications FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "no public read access for coach applications"
  ON public.coach_applications FOR SELECT
  USING (false);
