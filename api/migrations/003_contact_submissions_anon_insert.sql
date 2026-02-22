-- Frontend-only deployment support:
-- allow anonymous visitors to submit the contact form while keeping reads disabled.

drop policy if exists "public_insert_contact_submissions" on public.contact_submissions;

create policy "public_insert_contact_submissions" on public.contact_submissions
  for insert
  to anon
  with check (
    char_length(trim(name)) between 2 and 120
    and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    and char_length(trim(message)) between 10 and 5000
  );
