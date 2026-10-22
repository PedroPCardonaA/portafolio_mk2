create table public.projects (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  order_index int not null,
  year int not null,
  summary text not null check (char_length(summary) <= 180),
  stack text[] not null default '{}',
  role text not null,
  team text[],
  period text,
  status text not null default 'shipped' check (status in ('shipped', 'active', 'archived')),
  cover_url text,
  link_repo text,
  link_live text,
  link_paper text,
  featured boolean not null default false,
  draft boolean not null default false
);

create table public.publications (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  authors text[] not null,
  venue text not null,
  year int not null,
  doi text,
  pdf text,
  kind text not null check (kind in ('journal', 'conference', 'preprint', 'thesis'))
);

create table public.posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text not null,
  published_at date not null,
  tags text[] not null default '{}',
  draft boolean not null default false
);

-- The site only reads at build time with the anon key; writes go through Studio / service role.
alter table public.projects enable row level security;
alter table public.publications enable row level security;
alter table public.posts enable row level security;

create policy "anon read" on public.projects for select to anon using (true);
create policy "anon read" on public.publications for select to anon using (true);
create policy "anon read" on public.posts for select to anon using (true);
