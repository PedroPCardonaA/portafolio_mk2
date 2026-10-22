export function repoLabel(url: string): string {
  return new URL(url).hostname === 'github.com' ? 'GitHub' : 'repo';
}
