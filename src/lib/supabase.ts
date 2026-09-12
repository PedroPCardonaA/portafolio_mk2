import { createClient } from '@supabase/supabase-js';

// Read from process.env, not import.meta.env: this file only ever runs at build
// time (Node), and Vite's import.meta.env only forwards *real* CI/host env vars
// (as opposed to ones from a committed .env file) when they're PUBLIC_-prefixed.
const supabaseUrl = process.env.SUPABASE_URL ?? import.meta.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY ?? import.meta.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing SUPABASE_URL/SUPABASE_ANON_KEY environment variables at build time.');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ProjectData {
  title: string;
  order: number;
  year: number;
  summary: string;
  stack: string[];
  role: string;
  team?: string[];
  period?: string;
  status: 'shipped' | 'active' | 'archived';
  cover?: string;
  links: { repo?: string; live?: string; paper?: string };
  featured: boolean;
  draft: boolean;
}

export interface ProjectEntry {
  id: string;
  data: ProjectData;
}

export async function getProjects(): Promise<ProjectEntry[]> {
  const { data, error } = await supabase.from('projects').select('*').order('order_index');
  if (error) throw error;

  return data.map((row) => ({
    id: row.slug,
    data: {
      title: row.title,
      order: row.order_index,
      year: row.year,
      summary: row.summary,
      stack: row.stack ?? [],
      role: row.role,
      team: row.team ?? undefined,
      period: row.period ?? undefined,
      status: row.status,
      cover: row.cover_url ?? undefined,
      links: {
        repo: row.link_repo ?? undefined,
        live: row.link_live ?? undefined,
        paper: row.link_paper ?? undefined,
      },
      featured: row.featured,
      draft: row.draft,
    },
  }));
}

export interface PublicationData {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  doi?: string;
  pdf?: string;
  kind: 'journal' | 'conference' | 'preprint' | 'thesis';
}

export async function getPublications(): Promise<PublicationData[]> {
  const { data, error } = await supabase.from('publications').select('*').order('year', { ascending: false });
  if (error) throw error;

  return data.map((row) => ({
    title: row.title,
    authors: row.authors,
    venue: row.venue,
    year: row.year,
    doi: row.doi ?? undefined,
    pdf: row.pdf ?? undefined,
    kind: row.kind,
  }));
}
