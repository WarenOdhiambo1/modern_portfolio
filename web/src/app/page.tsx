import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import FocusCard from "@/components/FocusCard";
import ProjectCard from "@/components/ProjectCard";
import TestimonialCard from "@/components/TestimonialCard";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ZohoSalesIQSupport from "@/components/ZohoSalesIQSupport";
import {
  defaultPortfolioContent,
  hero,
  focusAreas
} from "@/data/portfolio";

export default function Home() {
  const content = defaultPortfolioContent;
  const { about, experience, projects, certifications, testimonials, contact } =
    content;
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Waren Odhiambo",
    jobTitle: "Data Systems and Automation Builder",
    url: "https://example.com",
    sameAs: [
      "https://github.com/WarenOdhiambo1",
      "https://www.linkedin.com/in/waren-odhiambo-0b76b9370"
    ],
    description:
      "Computer Science student and builder focused on data systems, ETL workflows, dashboards, and automation for practical business use cases."
  };

  return (
    <main>
      <ZohoSalesIQSupport />
      <FloatingWhatsApp phone={content.whatsappPhone} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <section className="section py-20 lg:py-28">
        <div className="section-inner grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="eyebrow">Data Systems • ETL • Automation</p>
            <h1 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-7xl text-charcoal tracking-tightest">
              Build clearer <span className="accent-swoop">data systems</span>
              <br />
              and automation for growth teams.
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-slate">
              {hero.subhead}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-deepblue px-6 py-3 text-sm uppercase tracking-[0.2em] text-white"
              >
                {hero.primaryCta}
              </a>
              <a
                href="#contact"
                className="rounded-full border border-deepblue px-6 py-3 text-sm uppercase tracking-[0.2em] text-deepblue"
              >
                {hero.secondaryCta}
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[40px] border border-bone bg-white/70 p-6 shadow-soft">
              <Image
                src="/profile.jpg"
                alt="Profile"
                width={640}
                height={640}
                className="rounded-[32px] object-cover"
              />
              <div className="mt-6 space-y-2">
                <p className="text-sm uppercase tracking-[0.2em] text-deepblue">
                  Data Systems & Automation
                </p>
                <p className="text-base text-slate">
                  Dashboards, ETL workflows, and practical automation for
                  client-facing and internal business operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-16 lg:py-24" id="about">
        <div className="section-inner grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              {about.title}
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate">{about.body}</p>
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-deepblue">
              {about.highlight}
            </p>
          </div>
          <div className="rounded-[36px] border border-bone bg-gradient-to-br from-mist via-white to-bone p-10">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate">
                  Core Capabilities
                </p>
                <p className="mt-2 font-serif text-2xl text-charcoal">
                  Practical systems for reporting, operations, and growth.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm text-slate">
                <p>Dashboards & reporting</p>
                <p>ETL workflows</p>
                <p>Process automation</p>
                <p>Web product interfaces</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-16 lg:py-24" id="experience">
        <div className="section-inner">
          <SectionHeading title="Experience & Background" />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {experience.map((item) => (
              <div
                key={item.title}
                className="min-w-0 rounded-3xl border border-bone bg-white/70 p-6"
              >
                <div className="h-12 w-12 rounded-full border border-bone bg-mist" />
                <h3 className="mt-5 break-words font-serif text-xl text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-2 break-words text-sm uppercase tracking-[0.2em] text-deepblue">
                  {item.org}
                </p>
                <p className="mt-3 break-words text-sm text-slate">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section py-16 lg:py-24" id="focus">
        <div className="section-inner">
          <SectionHeading
            title="Technical Focus"
            subtitle="Data Systems • Dashboards • Automation • Web Products"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {focusAreas.map((area) => (
              <FocusCard
                key={area.title}
                title={area.title}
                description={area.description}
                tags={area.tags}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section py-16 lg:py-24" id="projects">
        <div className="section-inner">
          <SectionHeading title="Project Gallery" subtitle="Case studies" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                outcome={project.outcome}
                stack={project.stack}
                projectUrl={project.projectUrl}
                imageUrl={project.imageUrl}
                images={project.images}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section py-16 lg:py-24" id="certifications">
        <div className="section-inner">
          <SectionHeading title="Certifications" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {certifications.map((item) => (
              <div
                key={item.name}
                className="min-w-0 overflow-hidden rounded-3xl border border-bone bg-white/70 p-5 sm:p-6"
              >
                {item.image ? (
                  <div className="relative mb-4 overflow-hidden rounded-2xl border border-bone bg-mist">
                    <Image
                      src={item.image}
                      alt={`${item.name} certificate screenshot`}
                      width={1200}
                      height={900}
                      className="h-44 w-full object-cover sm:h-48"
                    />
                  </div>
                ) : null}
                <p className="break-words text-xs uppercase tracking-[0.2em] text-deepblue">
                  {item.issuer}
                </p>
                <h3 className="mt-3 break-words font-serif text-xl text-charcoal">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm text-slate">
                  Issued {item.issueDate}
                  {item.expiryDate ? ` • Expires ${item.expiryDate}` : ""}
                </p>
                <p className="mt-3 break-all text-xs tracking-[0.12em] text-slate">
                  {item.credentialId}
                </p>
                {item.credentialUrl ? (
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex text-sm text-deepblue underline underline-offset-4"
                  >
                    Verify certificate
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {testimonials.length > 0 ? (
        <section className="section py-16 lg:py-24" id="testimonials">
          <div className="section-inner">
            <div className="rounded-[40px] bg-deepblue px-8 py-12 text-center text-white">
              <SectionHeading title="Client Testimonials" />
              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {testimonials.map((item) => (
                  <TestimonialCard
                    key={item.name}
                    quote={item.quote}
                    name={item.name}
                    org={item.org}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section py-16 lg:py-24" id="contact">
        <div className="section-inner text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
            {contact.title}
          </h2>
          <p className="mt-4 text-base text-slate">{contact.line}</p>
          <p className="mt-8 text-sm text-slate">
            For quick support, use the floating WhatsApp or live chat buttons.
          </p>
          <div className="mt-6 text-sm text-slate">
            Or email directly:{" "}
            <a href={`mailto:${contact.email}`} className="text-deepblue">
              {contact.email}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
