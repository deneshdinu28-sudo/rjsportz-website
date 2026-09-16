-- Storage bucket for coach application resumes, backing the "Upload
-- Resume / CV" field on the Hiring form (src/pages/Hiring.tsx). Previously
-- this field was UI-only: a file was selected and shown in the form but
-- never actually uploaded anywhere, and coach_applications.resume_url was
-- always null - a silent data-loss bug, not a security issue.
--
-- Private bucket, same access model as contact_submissions /
-- coach_applications: anon can only write (upload), never list or read
-- back. Resumes contain personal data (name, contact info, work history),
-- so a public bucket or a public per-file URL would let anyone who
-- obtains a link (or guesses/enumerates one) download a stranger's resume
-- indefinitely. Instead, the app stores the object's storage PATH in
-- resume_url (not a public URL), and only the admin - scoped the same way
-- as the table SELECT policies - can list/read objects, via a signed URL
-- generated on demand with an authenticated session.

insert into storage.buckets (id, name, public)
values ('resumes', 'resumes', false)
on conflict (id) do nothing;

create policy "anon can upload resumes"
  on storage.objects for insert
  to anon
  with check (bucket_id = 'resumes');

create policy "admin can view resumes"
  on storage.objects for select
  to authenticated
  using (bucket_id = 'resumes' and auth.email() = 'rjsportzofficial1@gmail.com');
