export type AboutSection = {
  title: string;
  body: string;
  highlight: string;
};

export type ExperienceItem = {
  title: string;
  org: string;
  detail: string;
};

export type FocusArea = {
  title: string;
  description: string;
  tags: string[];
};

export type ProjectItem = {
  title: string;
  outcome: string;
  stack: string;
  projectUrl?: string;
  imageUrl?: string;
};

export type CertificationItem = {
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate: string;
  credentialId: string;
  credentialUrl: string;
  priority: number;
};

export type TestimonialItem = {
  quote: string;
  name: string;
  org: string;
};

export type ContactSection = {
  title: string;
  line: string;
  email: string;
};

export type PortfolioContent = {
  about: AboutSection;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  certifications: CertificationItem[];
  testimonials: TestimonialItem[];
  contact: ContactSection;
  whatsappPhone: string;
};

export const hero = {
  headline: "Data systems and automation for clear business decisions.",
  subhead:
    "I build practical dashboards, ETL workflows, and automation systems for founders and teams that need reliable reporting, better visibility, and faster operations.",
  primaryCta: "View Projects",
  secondaryCta: "Start a Conversation"
};

export const focusAreas: FocusArea[] = [
  {
    title: "Data Systems",
    description: "Structured data pipelines and reporting-ready data models.",
    tags: ["ETL", "SQL", "Data Modeling"]
  },
  {
    title: "Dashboards",
    description: "Decision-focused dashboards for operations and revenue visibility.",
    tags: ["Airtable", "Analytics", "BI Workflows"]
  },
  {
    title: "Automation",
    description: "Workflow automation that reduces repetitive operational work.",
    tags: ["ETL", "AI Workflows", "Process Automation"]
  },
  {
    title: "Web Products",
    description: "Client-facing interfaces and internal tools with clean UX.",
    tags: ["Next.js", "React", "Tailwind CSS"]
  }
];

export const defaultPortfolioContent: PortfolioContent = {
  about: {
    title: "About",
    body: " I design and build operational data systems that turn scattered business processes into structured, decision-ready infrastructure. My work sits at the intersection of backend engineering, automation, and product thinking — helping founders replace spreadsheets, manual workflows, and guesswork with scalable systems.",
    highlight: "Data Systems • ETL • Automation • Apache Airflow • MongoDB • Supabase • Client-Focused Delivery"
  },
  experience: [
{
title: "Data cleaning and reporting",
org: "Paroha Limited",
detail: "Architecting ETL workflows, automation pipelines, excel files reading and reporting dashboards that improve operational visibility and reduce manual overhead."
},
{
title: "Product Development",
org: "Paroha Limited",
detail: "Designing and deploying responsive web systems with secure backend integrations and scalable hosting environments."
},
{
title: "BSc Computer Science",
org: "Kisii University",
detail: "Formal training in algorithms, systems design, and software engineering (2024–2028)."
}
]
  projects: [
    {
      title: "SMB Supply Chain Dashboard",
      outcome:
        "Dashboard project focused on supply chain visibility, reporting, and operational tracking for SMB workflows.",
      stack: "Airtable • Analytics • Dashboard Design"
    },
    {
      title: "Lumora LMS",
      outcome:
        "Learning platform interface with course browsing, category navigation, and authentication flows.",
      stack: "Next.js • React • Tailwind CSS"
    },
    {
      title: "Client Portfolio Landing System",
      outcome:
        "Editable client landing page with Supabase content management, live support chat, and WhatsApp integration.",
      stack: "Next.js • Supabase • AWS Amplify"
    }
  ],
  certifications: [
    {
      name: "LinkedIn Content and Creative Design",
      issuer: "LinkedIn Marketing Labs",
      issueDate: "2026-02-18",
      expiryDate: "2028-02-18",
      credentialId: "3izeewcibuzq",
      credentialUrl: "https://verify.skilljar.com/c/3izeewcibuzq",
      priority: 1
    },
    {
      name: "ETL in Python and SQL",
      issuer: "LinkedIn Learning",
      issueDate: "2026-02-11",
      expiryDate: "",
      credentialId: "02086776b2f077b185e67a79caf3a556728147e08cf40626acba304ce02f6162",
      credentialUrl: "",
      priority: 2
    }
  ],
  testimonials: [],
  contact: {
    title: "Contact",
    line: "For project inquiries, support, or collaboration, use WhatsApp, live chat, or email.",
    email: "waren9505@gmail.com"
  },
  whatsappPhone: "254762548428"
};
