# Pedro Cardona — portfolio

Personal portfolio/CV site: projects, publications, about, contact. Built with Astro (static output), Content Collections and MDX. Project and publication **metadata** is fetched from Supabase at build time; project **case-study bodies** stay as local MDX. Design spec lives in `Astro Build Guide.dc.html` and `Portfolio Wireframes.dc.html` at the repo root.

## Project structure

```text
/
├── public/
├── src/
│   ├── components/       Rail, Blueprint, Chip, Prompt, Duotone, StatusLine,
│   │                     ProjectList, ProjectPreview, MetaSidebar
│   ├── layouts/          Base.astro (shell + rail), Prose.astro (case studies)
│   ├── content/
│   │   ├── projects/     one .mdx per project — case-study body only (Context/Approach/Result),
│   │   │                 matched to its Supabase row by slug/filename
│   │   └── now/          single now.md entry
│   ├── content.config.ts zod schema for the collections above
│   ├── lib/supabase.ts   Supabase client + getProjects()/getPublications(), called at build time
│   ├── data/about.json   bio / education / tools for the about page
│   ├── styles/           tokens.css (design tokens) + base.css (resets)
│   └── pages/            index, projects/, publications, about, contact, now, 404
└── package.json
```

Project/publication metadata (title, summary, stack, links, status, order, featured, cover, etc.) lives in the Supabase `portafolio` project's `projects` and `publications` tables — edit rows there via Supabase Studio and rebuild the site to publish changes. Copy `.env.example` to `.env` and fill in `SUPABASE_URL`/`SUPABASE_ANON_KEY` to build locally.

## Commands

All commands are run from the root of the project, from a terminal:

| Command          | Action                                           |
| :--------------- | :------------------------------------------------ |
| `bun install`     | Installs dependencies                            |
| `bun dev`         | Starts local dev server at `localhost:4321`      |
| `bun build`       | Build the production site to `./dist/`           |
| `bun preview`     | Preview the build locally, before deploying      |
| `bun astro check` | Type-check `.astro` files                        |

## Deferred (not yet built)

- The four motion effects from the build guide (type-on, scanlines, hover-reveal timing, cursor-tracked grid) — pages are fully static/JS-off-safe for now.
- Self-hosted fonts (currently Google Fonts CDN).
- `/cv`, `/writing` pages and `public/cv.pdf` (not part of the approved wireframe set).
