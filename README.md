# İhsan Soyçelik — CV / Portfolio

Interactive CV and personal site for İhsan Soyçelik, Product Designer. Live at **[git.soycelik.com](https://git.soycelik.com/)**, with the CV itself at **[git.soycelik.com/cv](https://git.soycelik.com/cv/)**.

## What this is

A minimal personal landing page (`/`) plus a full CV page (`/cv`) — work experience, education, and contact links — styled after a Lovable-generated CV design and rebuilt by hand as a static Next.js site. It also ships a blog route (`/blog`) with MDX support, though no posts are currently published beyond the starter examples.

This repo is the base for `git.soycelik.com`, built on the [Nim](https://github.com/ibelick/nim) personal-website template (Next.js + Motion animation components) and customized with the CV page, content, and Figma design tokens.

## Why it exists

A single source of truth for İhsan's professional profile — deployable, versioned, and editable in code rather than a third-party profile tool. Two related repos, [`cv-2`](https://github.com/ihsansoycelik/cv-2) and [`readcv`](https://github.com/ihsansoycelik/readcv), are alternate/experimental rebuilds of the same CV content in different stacks; this repo (`cv`) is the one that's actually deployed and current.

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router, static export via `output: 'export'`)
- React 19, TypeScript
- Tailwind CSS v4
- [Motion](https://motion.dev/) (`motion` package) for animation — scroll progress, morphing dialogs, text effects, magnetic hover, spotlight, etc. (`components/ui/`)
- MDX (`@next/mdx`) for blog posts
- ESLint + Prettier (with `prettier-plugin-tailwindcss`)
- Deployed to **GitHub Pages** via `.github/workflows/deploy.yml` on every push to `main`, served under a custom domain (`git.soycelik.com`)

## Key interactions / features

- Morphing dialog / modal transitions (`components/ui/morphing-dialog.tsx`)
- Scroll progress indicator on blog posts (`components/ui/scroll-progress.tsx`)
- Animated text reveal, morph, and loop effects (`text-effect.tsx`, `text-morph.tsx`, `text-loop.tsx`)
- Spotlight hover states on interactive cards (`spotlight.tsx`)
- Light/dark theme via `next-themes`
- Two-way Figma ↔ code design-token sync — see [`FIGMA_WORKFLOW.md`](./FIGMA_WORKFLOW.md)

## Architecture

```
app/
  page.tsx              # root landing page ("coming soon" style intro)
  cv/
    page.tsx             # /cv route — metadata/SEO
    cv-page.tsx           # CV content: experience, education, etc.
  (site)/
    home/page.tsx         # Nim template's original homepage (projects/work/blog)
    blog/                 # MDX-powered blog layout + posts
    header.tsx, footer.tsx
components/ui/           # Motion-powered UI primitives (shared)
hooks/                   # e.g. useClickOutside
lib/                     # constants, utils
.github/workflows/       # GitHub Pages deploy workflow
```

## Running locally

Prerequisites: Node.js 20.x+.

```sh
git clone https://github.com/ihsansoycelik/cv.git
cd cv
npm install
npm run dev
```

Then open `http://localhost:3000`. Other scripts: `npm run build`, `npm run start`, `npm run lint`.

See [`INSTALLATION.md`](./INSTALLATION.md) for more on the underlying Nim template's setup (note: some of that doc still refers to the upstream `ibelick/nim` template rather than this fork).

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds a static export (`next build` with `output: 'export'`) and publishes it to GitHub Pages, served at the custom domain `git.soycelik.com`.

## Known limitations

- The homepage (`/`) is a placeholder "coming soon" intro rather than the full Nim template homepage (which still exists at `(site)/home` but isn't linked from navigation).
- Blog content is mostly unedited starter/example MDX posts.
- `lib/constants.ts` still points `WEBSITE_URL` at a leftover Vercel preview URL (`nim-fawn.vercel.app`) rather than the actual custom domain.
- Two sibling repos (`cv-2`, `readcv`) contain alternate CV builds; consolidating or removing them hasn't been decided yet.
