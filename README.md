# Pedro Cardona — portfolio

Personal portfolio/CV site: projects, publications, about, contact. Built with Astro (static output), Content Collections and MDX. Design spec lives in `Astro Build Guide.dc.html` and `Portfolio Wireframes.dc.html` at the repo root.

## Project structure

```text
/
├── public/
├── src/
│   ├── components/       Rail, Blueprint, Chip, Prompt, Duotone, StatusLine,
│   │                     ProjectList, ProjectPreview, MetaSidebar
│   ├── layouts/          Base.astro (shell + rail), Prose.astro (case studies)
│   ├── content/
│   │   ├── projects/     one .mdx per project / case study
│   │   ├── publications/ one .md per paper (currently empty — "coming soon")
│   │   └── now/          single now.md entry
│   ├── content.config.ts zod schemas for the collections above
│   ├── data/about.json   bio / certs / tools for the about page
│   ├── styles/           tokens.css (design tokens) + base.css (resets)
│   └── pages/            index, projects/, publications, about, contact, now, 404
└── package.json
```

Everywhere real personal content belongs (bio, project write-ups, contact links) currently holds obvious `TODO:` placeholder text — replace it with the real thing.

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
