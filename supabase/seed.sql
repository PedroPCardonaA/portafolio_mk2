-- Rebuilt from the repo after the old Supabase project was lost. Periods, order and
-- featured flags are best guesses: review before relying on them.
insert into public.projects
  (slug, title, order_index, year, summary, stack, role, period, status, link_repo, featured)
values
  ('athena', 'Athena', 1, 2026,
   'A private, local-first vault for PhD research ideas, sources and a journal, with an MCP server so AI agents can research ideas for you.',
   '{Python,FastAPI,SQLite,Podman,MCP}', 'Creator and maintainer', '2026', 'active',
   'https://github.com/PedroPCardonaA/athena', true),
  ('fhe-phd-research', 'FHE PhD research', 2, 2026,
   'PhD research at NTNU on privacy-preserving computation with fully homomorphic encryption.',
   '{FHE,Cryptography}', 'PhD Research Fellow', '2026.08 — present', 'active', null, true),
  ('visual-mamba-thesis', 'Visual Mamba MSc thesis', 3, 2026,
   'MSc thesis at NTNU benchmarking Visual Mamba (ViM) state-space vision models against transformer baselines.',
   '{Python,PyTorch}', 'MSc student', '2024 — 2026', 'shipped', null, true),
  ('bouvet-roof-calculator', 'Verform roof calculator', 4, 2025,
   'Led a small intern team at Bouvet ASA rebuilding Verform''s roof calculator on a modern web stack.',
   '{TypeScript,Vue}', 'Team leader (consultant intern)', 'Summer 2025', 'shipped', null, false),
  ('sticos-data-analyst', 'Natural language to BigQuery', 5, 2023,
   'Summer internship at Sticos building a pipeline that turns natural-language prompts into BigQuery queries.',
   '{Python,BigQuery,LLMs}', 'Data analyst (intern)', 'Summer 2023', 'shipped', null, false);

insert into public.posts (slug, title, excerpt, published_at, tags)
values
  ('announcing-athena', 'Announcing Athena',
   'Athena is a small, private vault for PhD ideas, the sources behind them and a journal, with an MCP hook so your AI agent can research an idea and file the results.',
   '2026-10-22', '{athena,mcp,research-tools}'),
  ('norsk-kryptoseminar-2026', 'Norsk Kryptoseminar 2026',
   'On 23 October I''m presenting my early PhD work on FHE at Norsk Kryptoseminar in Bergen.',
   '2026-10-22', '{talk,fhe,cryptography}');
