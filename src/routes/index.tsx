import { createFileRoute } from "@tanstack/react-router";

import { ThemeToggle } from "@/components/theme-toggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "CV of Ihsan Soycelik, Product Designer in Istanbul, Türkiye, building design systems, UI components, and brand identity for startups and studios.",
      },
      { property: "og:title", content: "Ihsan Soycelik | Product Designer" },
      {
        property: "og:description",
        content:
          "CV of Ihsan Soycelik, Product Designer in Istanbul, Türkiye, building design systems, UI components, and brand identity for startups and studios.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

type Role = {
  title: string;
  company: string;
  dates: string;
  bullets?: string[];
};

const experience: Role[] = [
  {
    title: "Product Designer",
    company: "Confidential Startup",
    dates: "Jul 2025 - Present",
    bullets: [
      "Leading end-to-end product design from 0 to 1 for an early-stage venture, owning the full design pipeline from discovery to delivery.",
    ],
  },
  {
    title: "Brand & Digital Designer",
    company: "Kafka INK Prague",
    dates: "Aug 2024 - Present",
    bullets: [
      "Redesigned studio website, improving usability and increasing booking inquiry rate by 40%.",
    ],
  },
  {
    title: "Program Producer & Visual Designer",
    company: "Temple Radio",
    dates: "Nov 2024 - Present",
    bullets: [
      "Built the visual language and identity system for a weekly music & interview program (cover art, social cutdowns, story/reel templates).",
    ],
  },
  {
    title: "Co-founder & Creative Director",
    company: "Reown Agency",
    dates: "Aug 2024 - Jul 2025",
    bullets: [
      "Led brand identity and digital content systems for lifestyle, cosmetics, and F&B clients.",
    ],
  },
  {
    title: "Creative Director (Contract)",
    company: "Eral Okulları",
    dates: "Nov 2024 - Jan 2025",
    bullets: [
      "Designed admissions campaign visuals across 8+ formats (billboards, OOH, digital, social, print), maintaining consistent visual hierarchy.",
    ],
  },
  {
    title: "Visual Communication Designer",
    company: "Peyote Müzik",
    dates: "Nov 2023 - May 2024",
    bullets: [
      "Produced event and artist promotion systems across web, social, and print channels, increasing event attendance by 25%.",
    ],
  },
  {
    title: "Senior Lead Designer → Lead Designer → Graphic Designer",
    company: "Cleopatra INK",
    dates: "Jul 2020 - Nov 2023",
    bullets: [
      "Progressed from Graphic Designer to Senior Lead Designer over 3.5 years across three European studio locations (Türkiye, Switzerland, Germany).",
    ],
  },
];

const education = [
  { school: "Eskişehir Technical University", degree: "BSc", dates: "" },
  { school: "Anadolu University", degree: "Associate Degree", dates: "" },
];

const sections = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

function Section({
  id,
  title,
  index,
  children,
}: {
  id: string;
  title: string;
  index: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="resume-section scroll-mt-28" aria-labelledby={`${id}-heading`}>
      <div className="section-heading">
        <span className="section-index" aria-hidden="true">{index}</span>
        <h2 id={`${id}-heading`}>{title}</h2>
      </div>
      <div className="section-content">{children}</div>
    </section>
  );
}

function Index() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <a href="#about" className="wordmark" aria-label="Ihsan Soycelik, home">
          <span className="wordmark-mark" aria-hidden="true">IS</span>
          <span>Ihsan Soycelik</span>
        </a>
        <nav className="primary-nav" aria-label="Page sections">
          {sections.map((section) => (
            <a key={section.href} href={section.href}>{section.label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <a className="header-email" href="mailto:contact@soycelik.com">Let’s talk <span aria-hidden="true">↗</span></a>
        </div>
      </header>

      <main id="main-content" className="page-content">
        <section id="about" className="intro-section" aria-labelledby="intro-title">

          <div className="intro-layout">
            <div className="intro-main">
              <h1 id="intro-title">Ihsan Soycelik</h1>
              <p className="intro-subtitle">Product Designer, Istanbul, Türkiye</p>
              <p className="intro-summary">
                Product Designer with 5+ years of experience in brand, digital product, and visual
                communication. Leading end-to-end product design for an early-stage startup, with a proven
                track record in building design systems, UI components, and user flows. Experienced in
                performance-driven marketing assets for lifestyle, F&amp;B, and multi-location studio
                clients across Türkiye and Europe. Comfortable working directly with founders, moving
                fast, and delivering consistent, measurable results.
              </p>
              <div className="intro-actions">
                <a className="action-link" href="mailto:contact@soycelik.com">
                  Start a conversation <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link" href="#experience">Explore my experience <span aria-hidden="true">↓</span></a>
              </div>
            </div>
            <aside className="profile-card" aria-label="Contact information">

              <a href="mailto:contact@soycelik.com">contact@soycelik.com</a>
              <a href="tel:+905353944444">+90 535 394 44 44</a>
              <a href="https://linkedin.com/in/isoycelik" target="_blank" rel="noreferrer">
                LinkedIn <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span>
              </a>
              <p className="profile-location">Based in Istanbul, Türkiye</p>
            </aside>
          </div>

        </section>

        <Section id="experience" title="Experience" index="01">
          <ol className="experience-list">
            {experience.map((role, position) => (
              <li key={`${role.title}-${role.company}-${role.dates}`} className="experience-item">
                <span className="experience-number" aria-hidden="true">{String(position + 1).padStart(2, "0")}</span>
                <div className="experience-details">
                  <div className="experience-title-row">
                    <h3>{role.title}</h3>
                    <span className="experience-dates">{role.dates}</span>
                  </div>
                  <p className="experience-company">{role.company}</p>
                  {role.bullets ? (
                    <ul className="experience-notes">
                      {role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="education" title="Education" index="02">
          <div className="education-list">
            {education.map((item) => (
              <article className="education-item" key={item.school}>
                <div>
                  <h3>{item.school}</h3>
                  <p>{item.degree}</p>
                </div>
                {item.dates ? <span className="experience-dates">{item.dates}</span> : null}
              </article>
            ))}
          </div>
        </Section>

        <section id="contact" className="contact-section scroll-mt-28" aria-labelledby="contact-heading">
          <div>

            <h2 id="contact-heading">Let’s make something meaningful.</h2>
          </div>
          <div className="contact-actions">
            <a className="action-link action-link-secondary" href="mailto:contact@soycelik.com">
              Email Ihsan <span aria-hidden="true">↗</span>
            </a>
            <a href="tel:+905353944444">Call +90 535 394 44 44</a>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <span>© 2026 Ihsan Soycelik</span>
        <a href="#main-content">Back to top ↑</a>
      </footer>
    </div>
  );
}
