import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    order: z.number(),                     // index sort, ascending
    year: z.number(),
    summary: z.string().max(180),          // 1g preview + 1a row
    stack: z.array(z.string()),
    role: z.string(),
    team: z.array(z.string()).optional(),
    period: z.string().optional(),         // "2026.02 — 2026.05"
    status: z.enum(['shipped', 'active', 'archived']).default('shipped'),
    cover: image().optional(),
    links: z.object({
      repo: z.url().optional(),
      live: z.url().optional(),
      paper: z.url().optional(),
    }).default({}),
    featured: z.boolean().default(false),   // shows on 1a
    draft: z.boolean().default(false),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number(),
    doi: z.string().optional(),
    pdf: z.string().optional(),
    kind: z.enum(['journal', 'conference', 'preprint', 'thesis']),
  }),
});

const now = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/now' }),
  schema: z.object({
    updated: z.date(),
  }),
});

export const collections = { projects, publications, now };
