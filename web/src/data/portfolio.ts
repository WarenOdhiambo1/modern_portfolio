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
  images?: string[];
};

export type CertificationItem = {
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate: string;
  credentialId: string;
  credentialUrl: string;
  priority: number;
  image?: string;
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
],
  projects: [
  {
    title: "Supply Chain Intelligence Dashboard",
    outcome:
      "Built an operational visibility dashboard for small business supply tracking, transforming fragmented inventory records into centralized reporting with real-time insights.",
    stack: "Django • Data Modeling • Dashboard Engineering",
    images: [
      "/data/images/business_m1.png",
      "/data/images/business_m2.png",
      "/data/images/business_m3.png",
      "/data/images/business0.png"

    ]
  },
  {
    title: "Lumora Learning Platform",
    outcome:
      "Developed a modular LMS interface with scalable authentication, course indexing, and category filtering architecture optimized for growth-stage digital education products.",
    stack: "Django • CSS • HTML • Secure Auth",
    images: [
      "/data/images/elearning1.png",
      "/data/images/elearning2.png",
      "/data/images/elearning3.png"
    ]
  },
  {
    title: "Client Booking page",
    outcome:
      " Engineered a  Dynamic Landing System with supabase backend content management and live conversation tools enabling non-technical founders to manage lead capture Autonomously",
    stack: "Django • CSS • HTML • Secure Auth",
    images: [
      "/data/images/elearning1.png",
      "/data/images/elearning2.png",
      "/data/images/elearning3.png"
    ]
  },

   {
    title: "Job Radar – Automated Job Intelligence Pipeline",
    outcome:
      "Engineered a modular Python-based ETL pipeline that aggregates job listings from multiple RSS sources, structures the data into workflow-ready Excel systems, and supports automated tracking and follow-up operations.",
    stack: "Python • RSS Parsing • Structured Logging • Excel Automation • Workflow Design",
    images: [
      "/data/images/web_automations.png",
      "/data/images/web_automation.png"
    ]
  },

    {
    title: "Netball Database – Relational Sports Data Architecture",
    outcome:
      "Designed a relational data system in Airtable to manage competitive sports operations including teams, players, match records, predictions, subscriber tracking, and performance analytics. Implemented linked-record relationships and structured workflows to simulate scalable sports data infrastructure.",
    stack: "Airtable • Relational Data Modeling • Linked Records • Data Structuring • Workflow Design",
    images: [
      "/data/images/airtable2.png",
      "/data/images/airtable1.png"
    ]
  },


    {
    title: "Telegram Email Automation System",
    outcome:
      "Designed and implemented a modular Telegram-based automation system integrating domain validation, templated messaging, and SMTP email dispatch. Architected with layered service separation for maintainability and scalability",
    stack: "Python • Telegram API • Email Integration • Automation",
    images: [
      "/data/images/email_system.png",

    ]
  },

    {
    title: "Structured Data Processing with Pandas",
    outcome:
      "Developed a modular data processing pipeline using Pandas to automate data cleaning, transformation, and analysis tasks. Implemented best practices for data manipulation and analysis, resulting in improved efficiency and reproducibility.",
    stack: "Python • Pandas • Data Analysis • Automation",
    images: [
      "/data/images/etl.png",

    ]
  },

    {
    title: "Cloud-Native Deployment with AWS Amplify",
    outcome:
      "Deployed a production-ready web application using AWS Amplify with Git-integrated CI/CD pipelines. Configured IAM roles, managed service quotas, and automated build environments to support scalable cloud hosting..",
    stack: "AWS Amplify • IAM • CI/CD • GitHub • Elastic Load Balancing • Cloud Infrastructure",
    images: [
      "/data/images/aws1.png",
      "/data/images/aws2.png",
      "/data/images/aws3.png",
      "/data/images/aws4.png",
      "/data/images/aws5.png"
    ]
  },





],
  certifications: [
  

      {
    name: "LinkedIn Content and Creative Design",
    issuer: "LinkedIn Marketing Labs",
    issueDate: "2026-02-18",
    expiryDate: "2028-02-18",
    credentialId: "3izeewcibuzq",
    credentialUrl: "https://verify.skilljar.com/c/3izeewcibuzq",
    priority: 1,
    image: "/data/images/certificate1.jpeg"
  },

      {
    name: "ETL in Python and SQL",
    issuer: "LinkedIn Learning",
    issueDate: "2026-02-18",
    expiryDate: "",
    credentialId: "02086776b2f077b185e67a79caf3a556728147e08cf40626acba304ce02f6162",
    credentialUrl: "",
    priority: 1,
    image: "/data/images/certificate2.jpeg"
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


















































// END
// export type AboutSection = {
//   title: string;
//   body: string;
//   highlight: string;
// };

// export type ExperienceItem = {
//   title: string;
//   org: string;
//   detail: string;
// };

// export type FocusArea = {
//   title: string;
//   description: string;
//   tags: string[];
// };

// export type ProjectItem = {
//   title: string;
//   outcome: string;
//   stack: string;
//   projectUrl?: string;
//   imageUrl?: string;
//   images?: string[];
// };

// export type CertificationItem = {
//   name: string;
//   issuer: string;
//   issueDate: string;
//   expiryDate: string;
//   credentialId: string;
//   credentialUrl: string;
//   priority: number;
//   image?: string;
// };

// export type TestimonialItem = {
//   quote: string;
//   name: string;
//   org: string;
// };

// export type ContactSection = {
//   title: string;
//   line: string;
//   email: string;
// };

// export type PortfolioContent = {
//   about: AboutSection;
//   experience: ExperienceItem[];
//   projects: ProjectItem[];
//   certifications: CertificationItem[];
//   testimonials: TestimonialItem[];
//   contact: ContactSection;
//   whatsappPhone: string;
// };

// export const hero = {
//   headline: "Operational Data Systems for Growing SMEs",
//   subhead:
//     "I help multi-branch and scaling businesses unify sales, finance, and operational data into a reliable, decision-ready system — without disrupting existing workflows.”",
//   // primaryCta: "View Projects",
//   secondaryCta: "Request Operational Audit"
// };

// export const focusAreas: FocusArea[] = [
//   {
//     title: "Operational Data Architecture",
//     description: "Designing structured, centralized data systems that unify sales, finance, and operations into a single source of truth.",
//     tags: ["Data Modeling", "SQL", "ETL Pipelines"]
//   },
//   {
//     title: "Audit-Ready Reporting",
//     description: "Building reliable reporting layers and dashboards that give leadership real-time financial and operational visibility.",
//     tags: ["Dashboards", "Analytics", "Business Intelligence"]
//   },
//   {
//     title: "Workflow & Process Automation",
//     description: "Automating repetitive operational tasks to reduce errors, manual reconciliation, and reporting delays.",
//     tags: ["Process Automation", "AI Workflows", "System Integrations"]
//   },
//   {
//     title: "Secure Cloud Systems",
//     description: "Deploying scalable, production-grade applications with controlled access, CI/CD, and infrastructure governance.",
//     tags: ["AWS", "CI/CD", "Cloud Infrastructure"]
//   }
// ];


// export const defaultPortfolioContent: PortfolioContent = {
//   about: {
//   title: "About",
//   body: "I design and build operational data systems that bring structure and clarity to growing businesses. I help founders and operations teams centralize sales, finance, and workflow data into reliable, decision-ready infrastructure — without disrupting existing tools. My work focuses on turning fragmented processes into scalable systems that support reporting accuracy, audit readiness, and operational control.",
//   highlight: "Operational Data Architecture • ETL Pipelines • Workflow Automation • Audit-Ready Reporting • Cloud Infrastructure"
// },
//   experience: [
// {
// title: "Data cleaning and reporting",
// org: "Paroha Limited",
// detail: "Architecting ETL workflows, automation pipelines, excel files reading and reporting dashboards that improve operational visibility and reduce manual overhead."
// },
// {
// title: "Product Development",
// org: "Paroha Limited",
// detail: "Designing and deploying responsive web systems with secure backend integrations and scalable hosting environments."
// },
// {
// title: "BSc Computer Science",
// org: "Kisii University",
// detail: "Formal training in algorithms, systems design, and software engineering (2024–2028)."
// }
// ],
//   projects: [
//   {
//     title: "Multi-Branch Supply & Inventory Intelligence Dashboard",
//     outcome:
//       "Engineered centralized reporting architecture transforming fragmented inventory and operational data into structured, decision-ready dashboards with real-time visibility.",
//     stack: "Django • Data Modeling • Dashboard Engineering",
//     images: [
//       "/data/images/business_m1.png",
//       "/data/images/business_m2.png",
//       "/data/images/business_m3.png",
//       "/data/images/business0.png"

//     ]
//   },
//   // {
//   //   title: "Lumora Learning Platform",
//   //   outcome:
//   //     "Developed a modular LMS interface with scalable authentication, course indexing, and category filtering architecture optimized for growth-stage digital education products.",
//   //   stack: "Django • CSS • HTML • Secure Auth",
//   //   images: [
//   //     "/data/images/elearning1.png",
//   //     "/data/images/elearning2.png",
//   //     "/data/images/elearning3.png"
//   //   ]
//   // },
//   {
//     title: "Lead Intake & Revenue Capture System",
//     outcome:
//       "Engineered a structured client intake and booking system with centralized backend data management, enabling non-technical founders to track revenue pipeline, manage bookings, and maintain clean operational records.",
//     stack: "Django • CSS • HTML • Secure Auth",
//     images: [
//       "/data/images/resort1.png",
//       "/data/images/resort2.png"
      
//     ]
//   },

//    {
//     title: "Automated Data Aggregation & Workflow Structuring Engine",
//     outcome:
//       "Built a modular ETL pipeline that ingests distributed data sources, structures them into normalized datasets, and outputs workflow-ready reporting layers.",
//     stack: "Python • RSS Parsing • Structured Logging • Excel Automation • Workflow Design",
//     images: [
//       "/data/images/web_automations.png",
//       "/data/images/web_automation.png"
//     ]
//   },

//     {
//     title: "Relational Operations Data Architecture",
//     outcome:
//       " Designed a structured relational data system with linked-record modeling, reporting logic, and workflow automation — simulating scalable multi-entity operational environments",
//     stack: "Airtable • Relational Data Modeling • Linked Records • Data Structuring • Workflow Design",
//     images: [
//       "/data/images/airtable2.png",
//       "/data/images/airtable1.png"
//     ]
//   },


//     {
//     title: "Operational Notification & Workflow Automation Engine",
//     outcome:
//       "Built a modular automation system that handles structured notifications, validation workflows, and event-driven communication for business operations. Designed for reliability, audit traceability, and scalability.",
//     stack: "Python • Telegram API • Email Integration • Automation",
//     images: [
//       "/data/images/email_system.png",

//     ]
//   },

//     {
//     title: "ETL & Data Structuring Pipeline",
//     outcome:
//       "Built modular ETL pipelines to clean, transform, and normalize operational datasets into consistent reporting layers for analytics and financial visibility.",
//     stack: "Python • Pandas • Data Analysis • Automation",
//     images: [
//       "/data/images/etl.png",

//     ]
//   },

//     {
//     title: "Production-Grade Cloud Infrastructure Deploy",
//     outcome:
//       "Deployed a production-ready web application using AWS Amplify with Git-integrated CI/CD pipelines. Configured IAM roles, managed service quotas, and automated build environments to support scalable cloud hosting..",
//     stack: "AWS Amplify • IAM • CI/CD • GitHub • Elastic Load Balancing • Cloud Infrastructure",
//     images: [
//       "/data/images/aws1.png",
//       "/data/images/aws2.png",
//       "/data/images/aws3.png",
//       "/data/images/aws4.png",
//       "/data/images/aws5.png"
//     ]
//   },





// ],
//   certifications: [
  

//       {
//     name: "LinkedIn Content and Creative Design",
//     issuer: "LinkedIn Marketing Labs",
//     issueDate: "2026-02-18",
//     expiryDate: "2028-02-18",
//     credentialId: "3izeewcibuzq",
//     credentialUrl: "https://verify.skilljar.com/c/3izeewcibuzq",
//     priority: 1,
//     image: "/data/images/certificate1.jpeg"
//   },

//       {
//     name: "ETL in Python and SQL",
//     issuer: "LinkedIn Learning",
//     issueDate: "2026-02-18",
//     expiryDate: "",
//     credentialId: "02086776b2f077b185e67a79caf3a556728147e08cf40626acba304ce02f6162",
//     credentialUrl: "",
//     priority: 1,
//     image: "/data/images/certificate2.jpeg"
//   }
//   ],
//   testimonials: [],
//   contact: {
//     title: "Contact",
//     line: "For project inquiries, support, or collaboration, use WhatsApp, live chat, or email.",
//     email: "waren9505@gmail.com"
//   },
//   whatsappPhone: "254762548428"
// };
