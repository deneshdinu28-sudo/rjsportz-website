
-- Create contact submissions table
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  sport_interest TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public form)
CREATE POLICY "Anyone can submit contact form"
  ON public.contact_submissions FOR INSERT
  WITH CHECK (true);

-- No public read access (admin only via service role)
CREATE POLICY "No public read access for contact submissions"
  ON public.contact_submissions FOR SELECT
  USING (false);

-- Create coach applications table
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

-- Allow anyone to insert (public form)
CREATE POLICY "Anyone can submit coach application"
  ON public.coach_applications FOR INSERT
  WITH CHECK (true);

-- No public read access (admin only via service role)
CREATE POLICY "No public read access for coach applications"
  ON public.coach_applications FOR SELECT
  USING (false);
