-- Enable UUID generation
create extension if not exists pgcrypto;

-- Projects
create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique,
  summary text,
  stack text,
  outcomes text,
  case_study_md text,
  cover_image text,
  created_at timestamptz not null default now()
);

-- Testimonials
create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text,
  company text,
  quote text not null,
  permission boolean default false,
  created_at timestamptz not null default now()
);

-- Experience / Background
create table if not exists public.experience (
  id uuid primary key default gen_random_uuid(),
  org text not null,
  title text not null,
  start_date date,
  end_date date,
  summary text,
  created_at timestamptz not null default now()
);

-- Technical Focus
create table if not exists public.focus_areas (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  icon text,
  created_at timestamptz not null default now()
);

-- Contact Submissions
create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

-- Certifications
create table if not exists public.certifications (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  issuer text not null,
  issue_date date,
  expiry_date date,
  credential_id text,
  credential_url text,
  badge_image text,
  priority integer default 0,
  created_at timestamptz not null default now()
);

-- Optional: enable RLS
alter table public.projects enable row level security;
alter table public.testimonials enable row level security;
alter table public.experience enable row level security;
alter table public.focus_areas enable row level security;
alter table public.contact_submissions enable row level security;
alter table public.certifications enable row level security;

-- Public read policies (content tables)
create policy "public_read_projects" on public.projects
  for select using (true);

create policy "public_read_testimonials" on public.testimonials
  for select using (true);

create policy "public_read_experience" on public.experience
  for select using (true);

create policy "public_read_focus_areas" on public.focus_areas
  for select using (true);

create policy "public_read_certifications" on public.certifications
  for select using (true);

-- Contact submissions: no public read/write (service role bypasses RLS)
-- No policies are created for contact_submissions.
