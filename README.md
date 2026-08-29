# cv-2

An alternate build of İhsan Soyçelik's interactive CV/portfolio, generated with the [Lovable](https://lovable.dev) AI app builder on the TanStack Start framework.

> **Not the canonical repo.** The current, live portfolio is [`ihsansoycelik/cv`](https://github.com/ihsansoycelik/cv), deployed at [git.soycelik.com/cv](https://git.soycelik.com/cv/). This repo is an experimental/alternate rebuild of the same CV content in a different stack and is not deployed anywhere as of writing. Treat it as a design exploration, not the source of truth.

## What this is

A single-page CV route (`/`) rendering the same work-experience/education content as `cv`'s `/cv` page, but built through Lovable's AI code generation rather than hand-written. The repo history is a single `init` commit — a raw Lovable export pushed to GitHub — with no further edits since.

## Tech stack

- [TanStack Start](https://tanstack.com/start) (React 19, file-based routing via `src/routes/`)
- TypeScript
- Tailwind CSS v4
- Radix UI primitives + shadcn-style components (`components.json`, `src/components/`)
- Vite + Nitro (server), Bun as package manager (`bun.lock`, `bunfig.toml`)
- Managed via Lovable (`.lovable/project.json`)

Note: `.output/` (a built Nitro server bundle) is checked into this repo. It's a build artifact from a previous `vite build` run, not source — safe to delete and regenerate, and normally shouldn't be committed.

## Running locally

```sh
bun install
bun run dev
```

Other scripts: `bun run build`, `bun run preview`, `bun run lint`, `bun run format`.

## Known limitations

- Content (experience, education) is hardcoded in `src/routes/index.tsx` rather than pulled from shared/external data.
- No deployment configuration beyond what Lovable generated — there's no confirmed live URL for this build.
- Some AI-generated scaffolding (e.g. `AGENTS.md`) may still reflect Lovable's default project conventions rather than this project's actual state.
