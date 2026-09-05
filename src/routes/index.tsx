import { createFileRoute } from "@tanstack/react-router";

import { ThemeToggle } from "@/components/theme-toggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ihsan Soycelik — Product Designer" },
      {
        name: "description",
        content:
          "CV of Ihsan Soycelik, Product Designer in Istanbul, Türkiye, building design systems, UI components, and brand identity for startups and studios.",
      },
      { property: "og:title", content: "Ihsan Soycelik — Product Designer" },
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

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border pt-6">
      <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Index() {
  return (
    <main className="mx-auto w-full max-w-screen-sm px-5 py-16 text-sm leading-relaxed tracking-tight sm:py-24">
      <header>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="font-medium text-foreground">Ihsan Soycelik</h1>
            <p className="text-muted-foreground">Product Designer</p>
          </div>
          <ThemeToggle />
        </div>
        <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-muted-foreground sm:flex-nowrap">
          <span>Istanbul, Türkiye</span>
          <a className="subtle-link" href="tel:+905353944444">
            +90 535 394 44 44
          </a>
          <a className="subtle-link" href="mailto:contact@soycelik.com">
            contact@soycelik.com
          </a>
          <a
            className="subtle-link"
            href="https://linkedin.com/in/isoycelik"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/isoycelik
          </a>
        </p>
        <p className="mt-6 text-muted-foreground">
          Product Designer with 5+ years of experience in brand, digital product, and visual
          communication. Leading end-to-end product design for an early-stage startup, with a proven
          track record in building design systems, UI components, and user flows. Experienced in
          performance-driven marketing assets for lifestyle, F&amp;B, and multi-location studio
          clients across Türkiye and Europe. Comfortable working directly with founders, moving
          fast, and delivering consistent, measurable results.
        </p>
      </header>

      <div className="mt-12 space-y-12">
        <Section title="Experience">
          <ol className="m-0 flex list-none flex-col gap-8 p-0">
            {experience.map((role) => (
              <li key={`${role.title}-${role.company}-${role.dates}`} className="p-0">
                <div className="grid grid-cols-1 items-baseline gap-x-6 sm:grid-cols-[minmax(0,1fr)_auto]">
                  <h3 className="m-0 min-w-0 font-medium text-foreground">{role.title}</h3>
                  <span className="mt-0.5 whitespace-nowrap tabular-nums text-muted-foreground sm:mt-0 sm:text-right">
                    {role.dates}
                  </span>
                </div>
                <p className="mt-0.5 text-muted-foreground">{role.company}</p>
                {role.bullets ? (
                  <ul className="mt-2 space-y-2 text-muted-foreground">
                    {role.bullets.map((b) => (
                      <li key={b} className="border-l border-border pl-4">
                        {b}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ol>
        </Section>

        <Section title="Education">
          <div className="flex flex-col gap-4">
            {education.map((e) => (
              <div
                key={e.school}
                className="flex flex-col gap-x-4 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <div className="min-w-0">
                  <h3 className="font-medium text-foreground">{e.school}</h3>
                  <p className="mt-0.5 text-muted-foreground">{e.degree}</p>
                </div>
                {e.dates ? (
                  <span className="mt-0.5 shrink-0 tabular-nums text-muted-foreground sm:mt-0">
                    {e.dates}
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}
