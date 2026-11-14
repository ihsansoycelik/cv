type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

// The template shipped with the original author's projects, employers and email
// address. Everything below is this site's owner; the detailed CV lives in
// /cv (app/cv/cv-page.tsx) and must stay the source of truth for dates/titles.
export const PROJECTS: Project[] = [
  {
    name: 'QuickMD',
    description:
      'A native macOS Markdown editor that opens .md files from Finder and Quick Look.',
    link: 'https://github.com/ihsansoycelik/quickmd',
    video: '',
    id: 'project-quickmd',
  },
  {
    name: 'Stash',
    description:
      'A personal archive for bookmarks and saves: one searchable masonry wall with AI analysis and semantic search.',
    link: 'https://github.com/ihsansoycelik/stash',
    video: '',
    id: 'project-stash',
  },
  {
    name: 'Leftfield',
    description: 'An open-source visual library.',
    link: 'https://github.com/ihsansoycelik/leftfield',
    video: '',
    id: 'project-leftfield',
  },
  {
    name: 'TAK TAK',
    description:
      'A first-person dungeon escape game built in Godot, with hand-made sound design and four music tracks.',
    link: 'https://github.com/ihsansoycelik/tak-tak',
    video: '',
    id: 'project-taktak',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Confidential Startup',
    title: 'Product Designer',
    start: 'Jul 2025',
    end: 'Present',
    link: '/cv',
    id: 'work-product-designer',
  },
  {
    company: 'Kafka INK Prague',
    title: 'Brand & Digital Designer',
    start: 'Aug 2024',
    end: 'Present',
    link: 'https://www.kafkainkprague.com',
    id: 'work-kafka-ink',
  },
  {
    company: 'Temple Radio',
    title: 'Program Producer & Visual Designer',
    start: 'Nov 2024',
    end: 'Present',
    link: '/cv',
    id: 'work-temple-radio',
  },
  {
    company: 'Reown Agency',
    title: 'Co-founder & Creative Director',
    start: 'Aug 2024',
    end: 'Jul 2025',
    link: '/cv',
    id: 'work-reown',
  },
  {
    company: 'Eral Okulları',
    title: 'Creative Director (Contract)',
    start: 'Nov 2024',
    end: 'Jan 2025',
    link: '/cv',
    id: 'work-eral-okullari',
  },
  {
    company: 'Peyote Müzik',
    title: 'Visual Communication Designer',
    start: 'Nov 2023',
    end: 'May 2024',
    link: '/cv',
    id: 'work-peyote',
  },
  {
    company: 'Cleopatra INK',
    title: 'Senior Lead Designer → Lead Designer → Graphic Designer',
    start: 'Jul 2020',
    end: 'Nov 2023',
    link: '/cv',
    id: 'work-cleopatra-ink',
  },
]

// No posts of my own yet. The template's sample articles are not published, so
// the section hides itself while this stays empty.
export const BLOG_POSTS: BlogPost[] = []

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/ihsansoycelik',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/isoycelik',
  },
  {
    label: 'Email',
    link: 'mailto:contact@soycelik.com',
  },
]

export const EMAIL = 'contact@soycelik.com'
