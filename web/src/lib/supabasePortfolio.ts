import {
  defaultPortfolioContent,
  type PortfolioContent
} from "@/data/portfolio";

type SiteContentRow = {
  about_title?: string | null;
  about_body?: string | null;
  about_highlight?: string | null;
  contact_title?: string | null;
  contact_line?: string | null;
  contact_email?: string | null;
  whatsapp_phone?: string | null;
};

type ExperienceRow = {
  title?: string | null;
  org?: string | null;
  summary?: string | null;
  start_date?: string | null;
  created_at?: string | null;
};

type ProjectRow = {
  title?: string | null;
  summary?: string | null;
  stack?: string | null;
  outcomes?: string | null;
  cover_image?: string | null;
  project_url?: string | null;
  created_at?: string | null;
};

type CertificationRow = {
  name?: string | null;
  issuer?: string | null;
  issue_date?: string | null;
  expiry_date?: string | null;
  credential_id?: string | null;
  credential_url?: string | null;
  priority?: number | null;
};

type TestimonialRow = {
  quote?: string | null;
  name?: string | null;
  company?: string | null;
  role?: string | null;
  permission?: boolean | null;
  created_at?: string | null;
};

type SupabaseConfig = {
  url: string;
  anonKey: string;
};

function getSupabaseConfig(): SupabaseConfig | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim().replace(/\/+$/, "");
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();
  if (!url || !anonKey) {
    return null;
  }
  return { url, anonKey };
}

async function fetchSupabaseRows<T>(
  config: SupabaseConfig,
  table: string,
  query: Record<string, string>
): Promise<T[]> {
  const url = new URL(`${config.url}/rest/v1/${table}`);
  for (const [key, value] of Object.entries(query)) {
    url.searchParams.set(key, value);
  }

  const response = await fetch(url.toString(), {
    headers: {
      apikey: config.anonKey,
      Authorization: `Bearer ${config.anonKey}`
    },
    next: { revalidate: 60 }
  });

  if (!response.ok) {
    throw new Error(`Supabase ${table} fetch failed (${response.status})`);
  }

  return (await response.json()) as T[];
}

export async function getPortfolioContentFromSupabase(): Promise<PortfolioContent> {
  const fallback = defaultPortfolioContent;
  const config = getSupabaseConfig();
  if (!config) {
    return fallback;
  }

  try {
    const [siteRows, experienceRows, projectRows, certificationRows, testimonialRows] =
      await Promise.all([
        fetchSupabaseRows<SiteContentRow>(config, "site_content", {
          select:
            "about_title,about_body,about_highlight,contact_title,contact_line,contact_email,whatsapp_phone",
          limit: "1"
        }),
        fetchSupabaseRows<ExperienceRow>(config, "experience", {
          select: "title,org,summary,start_date,created_at"
        }),
        fetchSupabaseRows<ProjectRow>(config, "projects", {
          select: "title,summary,stack,outcomes,cover_image,project_url,created_at"
        }),
        fetchSupabaseRows<CertificationRow>(config, "certifications", {
          select:
            "name,issuer,issue_date,expiry_date,credential_id,credential_url,priority"
        }),
        fetchSupabaseRows<TestimonialRow>(config, "testimonials", {
          select: "quote,name,company,role,permission,created_at"
        })
      ]);

    const site = siteRows[0] ?? {};
    const sortedExperience = [...experienceRows].sort((a, b) => {
      const aKey = `${a.start_date ?? ""}|${a.created_at ?? ""}`;
      const bKey = `${b.start_date ?? ""}|${b.created_at ?? ""}`;
      return bKey.localeCompare(aKey);
    });
    const sortedProjects = [...projectRows].sort((a, b) =>
      (b.created_at ?? "").localeCompare(a.created_at ?? "")
    );
    const sortedCertifications = [...certificationRows].sort(
      (a, b) => (a.priority ?? 9999) - (b.priority ?? 9999)
    );

    const permittedTestimonials = testimonialRows.filter(
      (row) => row.permission === true
    );
    const testimonialsToUse =
      permittedTestimonials.length > 0 ? permittedTestimonials : testimonialRows;
    const sortedTestimonials = [...testimonialsToUse].sort((a, b) =>
      (b.created_at ?? "").localeCompare(a.created_at ?? "")
    );

    return {
      about: {
        title: site.about_title || fallback.about.title,
        body: site.about_body || fallback.about.body,
        highlight: site.about_highlight || fallback.about.highlight
      },
      experience:
        sortedExperience.length > 0
          ? sortedExperience.map((row) => ({
              title: row.title || "",
              org: row.org || "",
              detail: row.summary || ""
            }))
          : fallback.experience,
      projects:
        sortedProjects.length > 0
          ? sortedProjects.map((row) => ({
              title: row.title || "",
              outcome: row.outcomes || row.summary || "",
              stack: row.stack || "",
              projectUrl: row.project_url || undefined,
              imageUrl: row.cover_image || undefined
            }))
          : fallback.projects,
      certifications:
        sortedCertifications.length > 0
          ? sortedCertifications.map((row) => ({
              name: row.name || "",
              issuer: row.issuer || "",
              issueDate: row.issue_date || "",
              expiryDate: row.expiry_date || "",
              credentialId: row.credential_id || "",
              credentialUrl: row.credential_url || "",
              priority: row.priority ?? 0
            }))
          : fallback.certifications,
      testimonials:
        sortedTestimonials.length > 0
          ? sortedTestimonials.map((row) => ({
              quote: row.quote || "",
              name: row.name || "",
              org: row.company || row.role || ""
            }))
          : fallback.testimonials,
      contact: {
        title: site.contact_title || fallback.contact.title,
        line: site.contact_line || fallback.contact.line,
        email: site.contact_email || fallback.contact.email
      },
      whatsappPhone: (site.whatsapp_phone || fallback.whatsappPhone).replace(
        /[^\d]/g,
        ""
      )
    };
  } catch {
    return fallback;
  }
}
