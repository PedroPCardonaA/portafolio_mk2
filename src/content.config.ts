import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Project/publication *metadata* now lives in Supabase (see src/lib/supabase.ts) so it can be
// edited without a code change. This collection holds only the long-form case-study body for
// each project, matched to its Supabase row by slug/filename.
const projectBodies = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({}),
});

const now = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/now' }),
  schema: z.object({
    updated: z.date(),
  }),
});

export const collections = { projectBodies, now };
