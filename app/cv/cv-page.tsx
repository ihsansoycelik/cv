'use client'

import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'

type Theme = 'light' | 'dark'

type Role = {
  title: string
  company: string
  dates: string
  bullets?: string[]
}

type Education = {
  school: string
  degree: string
}

const experience: Role[] = [
  {
    title: 'Product Designer',
    company: 'Confidential Startup',
    dates: 'Jul 2025 - Present',
    bullets: [
      'Leading end-to-end product design from 0 to 1 for an early-stage venture, owning the full design pipeline from discovery to delivery.',
    ],
  },
  {
    title: 'Brand & Digital Designer',
    company: 'Kafka INK Prague',
    dates: 'Aug 2024 - Present',
    bullets: [
      'Redesigned studio website, improving usability and increasing booking inquiry rate by 40%.',
    ],
  },
  {
    title: 'Program Producer & Visual Designer',
    company: 'Temple Radio',
    dates: 'Nov 2024 - Present',
    bullets: [
      'Built the visual language and identity system for a weekly music & interview program (cover art, social cutdowns, story/reel templates).',
    ],
  },
  {
    title: 'Co-founder & Creative Director',
    company: 'Reown Agency',
    dates: 'Aug 2024 - Jul 2025',
    bullets: [
      'Led brand identity and digital content systems for lifestyle, cosmetics, and F&B clients.',
    ],
  },
  {
    title: 'Creative Director (Contract)',
    company: 'Eral Okulları',
    dates: 'Nov 2024 - Jan 2025',
    bullets: [
      'Designed admissions campaign visuals across 8+ formats (billboards, OOH, digital, social, print), maintaining consistent visual hierarchy.',
    ],
  },
  {
    title: 'Visual Communication Designer',
    company: 'Peyote Müzik',
    dates: 'Nov 2023 - May 2024',
    bullets: [
      'Produced event and artist promotion systems across web, social, and print channels, increasing event attendance by 25%.',
    ],
  },
  {
    title: 'Senior Lead Designer → Lead Designer → Graphic Designer',
    company: 'Cleopatra INK',
    dates: 'Jul 2020 - Nov 2023',
    bullets: [
      'Progressed from Graphic Designer to Senior Lead Designer over 3.5 years across three European studio locations (Türkiye, Switzerland, Germany).',
    ],
  },
]

const education: Education[] = [
  {
    school: 'Anadolu University',
    degree: 'Associate Degree',
  },
  {
    school: 'Eskişehir Technical University',
    degree: 'BSc',
  },
]

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-[var(--cv-border)] pt-6">
      <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--cv-muted)]">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  )
}

function SubtleLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      className="text-[var(--cv-muted)] underline decoration-[var(--cv-border)] underline-offset-[3px] transition-colors duration-150 hover:text-[var(--cv-fg)] hover:decoration-[var(--cv-muted)] focus-visible:text-[var(--cv-fg)] focus-visible:decoration-[var(--cv-muted)] focus-visible:outline-none"
      href={href}
    >
      {children}
    </a>
  )
}

export function CvPage() {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const stored = window.localStorage.getItem('cv-theme')
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored)
    }
  }, [])

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    window.localStorage.setItem('cv-theme', next)
  }

  const palette =
    theme === 'dark'
      ? {
          '--cv-bg': 'oklch(0.16 0 0)',
          '--cv-fg': 'oklch(0.94 0 0)',
          '--cv-muted': 'oklch(0.68 0 0)',
          '--cv-border': 'oklch(1 0 0 / 12%)',
        }
      : {
          '--cv-bg': 'oklch(1 0 0)',
          '--cv-fg': 'oklch(0.145 0 0)',
          '--cv-muted': 'oklch(0.505 0 0)',
          '--cv-border': 'oklch(0.9 0 0)',
        }

  return (
    <div
      className="min-h-screen bg-[var(--cv-bg)] text-[var(--cv-fg)] transition-colors duration-150"
      style={palette as CSSProperties}
    >
      <main className="mx-auto w-full max-w-screen-sm px-5 py-16 text-sm leading-relaxed tracking-tight sm:py-24">
        <header>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="font-medium text-[var(--cv-fg)]">Ihsan Soycelik</h1>
              <p className="text-[var(--cv-muted)]">Product Designer</p>
            </div>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="text-[var(--cv-muted)] transition-colors hover:text-[var(--cv-fg)] focus-visible:text-[var(--cv-fg)] focus-visible:outline-none focus-visible:underline focus-visible:decoration-current focus-visible:underline-offset-4"
            >
              <span aria-hidden="true" className="text-xs">
                {theme === 'dark' ? '☾' : '☀'}
              </span>
            </button>
          </div>

          <p className="mt-2 text-[var(--cv-muted)]">
            Istanbul, Türkiye <span className="text-[var(--cv-border)]">•</span>{' '}
            <SubtleLink href="tel:+905353944444">+90 535 394 44 44</SubtleLink>{' '}
            <span className="text-[var(--cv-border)]">•</span>{' '}
            <SubtleLink href="mailto:contact@soycelik.com">contact@soycelik.com</SubtleLink>{' '}
            <span className="text-[var(--cv-border)]">•</span>{' '}
            <SubtleLink href="https://linkedin.com/in/isoycelik">
              https://linkedin.com/in/isoycelik
            </SubtleLink>
          </p>

          <p className="mt-6 text-[var(--cv-muted)]">
            Product Designer with 5+ years of experience in brand, digital product, and visual
            communication. Leading end-to-end product design for an early-stage startup, with a
            proven track record in building design systems, UI components, and user flows.
            Experienced in performance-driven marketing assets for lifestyle, F&amp;B, and
            multi-location studio clients across Türkiye and Europe. Comfortable working directly
            with founders, moving fast, and delivering consistent, measurable results.
          </p>
        </header>

        <div className="mt-12 space-y-12">
          <Section title="Experience">
            <ol className="m-0 flex list-none flex-col gap-8 p-0">
              {experience.map((role) => (
                <li key={`${role.title}-${role.company}-${role.dates}`} className="p-0">
                  <div className="grid grid-cols-1 items-baseline gap-x-6 sm:grid-cols-[minmax(0,1fr)_auto]">
                    <h3 className="m-0 min-w-0 font-medium text-[var(--cv-fg)]">
                      {role.title} <span className="text-[var(--cv-border)]">•</span>{' '}
                      {role.company}
                    </h3>
                    <span className="mt-0.5 whitespace-nowrap tabular-nums text-[var(--cv-muted)] sm:mt-0 sm:text-right">
                      {role.dates}
                    </span>
                  </div>
                  {role.bullets ? (
                    <ul className="mt-2 space-y-2 text-[var(--cv-muted)]">
                      {role.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="pl-4 -indent-4 before:mr-2 before:content-['•']"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ol>
          </Section>

          <Section title="Education">
            <ol className="m-0 flex list-none flex-col gap-8 p-0">
              {education.map((item) => (
                <li key={item.school} className="p-0">
                  <div className="grid grid-cols-1 items-baseline gap-x-6 sm:grid-cols-[minmax(0,1fr)_auto]">
                    <h3 className="m-0 min-w-0 font-medium text-[var(--cv-fg)]">{item.school}</h3>
                    <span className="mt-0.5 whitespace-nowrap text-[var(--cv-muted)] sm:mt-0 sm:text-right">
                      {item.degree}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </Section>
        </div>
      </main>
    </div>
  )
}
