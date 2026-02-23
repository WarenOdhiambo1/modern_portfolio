# AWS Amplify + Supabase (Simple Path)

This is the simplest deployment path for this project:

1. `GitHub` stores your code and triggers deploys
2. `AWS Amplify Hosting` deploys the `web` app from the dashboard
3. `Supabase` stores your portfolio content + contact submissions

Reason: this removes EC2 + Docker + Nginx + SSH from your day-to-day workflow.

## What Changed In Code

- Frontend now reads portfolio content directly from Supabase REST (no backend required)
- Contact section uses WhatsApp + Zoho live support + email (no contact form)
- WhatsApp link uses `site_content.whatsapp_phone` and keeps your real number format safe

## Step 1: Push Code To GitHub

Reason: Amplify deploys from GitHub automatically.

1. Review changes locally.
2. Commit and push to your `main` branch.

## Step 2: Apply Supabase SQL (one-time setup)

Reason: the frontend needs tables and policies before deployment.

In Supabase Dashboard -> `SQL Editor`, run these files in order:

1. `api/migrations/001_init.sql`
2. `api/migrations/002_site_content.sql`
3. `api/migrations/003_contact_submissions_anon_insert.sql` (optional, only if you re-enable the contact form later)
4. `api/migrations/004_projects_project_url.sql`

Important:
- `003` is only needed if you use the Supabase-backed contact form
- Public reads for `contact_submissions` remain disabled

## Step 3: Add Your Real Portfolio Data (Supabase)

Reason: frontend now renders real DB content.

Update the single `site_content` row (includes WhatsApp):

```sql
update public.site_content
set
  about_title = 'About',
  about_body = 'Your real background and positioning...',
  about_highlight = 'Systems-first execution',
  contact_title = 'Contact',
  contact_line = 'If you need a systems-focused engineer, let us talk.',
  contact_email = 'you@example.com',
  whatsapp_phone = '254762548428';
```

Insert real rows into:
- `public.experience`
- `public.projects`
- `public.certifications`
- `public.testimonials` (`permission = true` for testimonials you are allowed to publish)

Projects support:
- `project_url` for an external case-study / LinkedIn post link
- `cover_image` for a dashboard/project graphic image URL (recommended: Supabase Storage public URL)

## Step 4: Get Supabase Public Keys (not service role)

Reason: frontend must use the **public** key, not the secret service-role key.

In Supabase Dashboard -> `Project Settings` -> `API`, copy:

1. `Project URL`
2. `anon public` key

Do **not** use:
- service role key

## Step 5: Deploy In AWS Amplify (Dashboard Only)

Reason: no CLI required, auto-redeploy on every GitHub push.

In AWS Console:

1. Open `AWS Amplify` -> `Hosting`
2. Click `Deploy an app`
3. Choose `GitHub`
4. Authorize GitHub and select your repository
5. Select branch: `main`
6. Set app root (monorepo root) to `web`

Environment variables (Amplify UI):

1. `NEXT_PUBLIC_SUPABASE_URL` = your Supabase Project URL
2. `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your Supabase anon public key

Optional (analytics later):

1. `NEXT_PUBLIC_GA_MEASUREMENT_ID` = `G-XXXXXXXXXX`
2. `NEXT_PUBLIC_ZOHO_SALESIQ_WIDGET_SRC` = your Zoho SalesIQ widget script URL (the `https://salesiq.zohopublic.com/widget?wc=...` URL)

Then click:

1. `Save and deploy`

## Step 6: Verify After Deploy

Reason: confirm the data path is working before editing more content.

Check:

1. Home page loads
2. About/Experience/Projects/Certifications/Testimonials show your Supabase data
3. WhatsApp floating button opens `wa.me/254762548428`
4. Zoho support button opens the SalesIQ chat window
5. Email link opens your mail app

## Step 7: Analytics (Country, Session Duration, Frequency)

Reason: this is the easiest way to get visitor behavior metrics.

Use `Google Analytics 4` for:
- country
- users
- sessions
- engagement time
- returning users

You can still use AWS for hosting while GA4 handles visitor analytics.

## Security Notes (Simple but Important)

1. Use only Supabase `anon` key in Amplify env vars (never service-role key)
2. Keep `contact_submissions` read access disabled (already true)
3. Publish testimonials only when `permission = true`
4. Rotate the previously exposed Supabase service-role key
