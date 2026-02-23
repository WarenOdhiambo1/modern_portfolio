create table if not exists public.site_content (
  id uuid primary key default gen_random_uuid(),
  about_title text not null default 'About',
  about_body text not null default '',
  about_highlight text not null default 'Systems-first execution',
  contact_title text not null default 'Contact',
  contact_line text not null default '',
  contact_email text not null default '',
  whatsapp_phone text not null default '254762548428',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

insert into public.site_content (
  about_title,
  about_body,
  about_highlight,
  contact_title,
  contact_line,
  contact_email,
  whatsapp_phone
)
select
  'About',
  'I design backend systems that scale with clarity. From data pipelines to cloud infrastructure and automation, I build durable platforms that reduce operational friction and create measurable reliability.',
  'Systems-first execution',
  'Contact',
  'If you need a systems-focused engineer to architect and deliver, let''s talk.',
  'waren9505@gmail.com',
  '254762548428'
where not exists (select 1 from public.site_content);

alter table public.site_content enable row level security;

drop policy if exists "public_read_site_content" on public.site_content;
create policy "public_read_site_content" on public.site_content
  for select using (true);
