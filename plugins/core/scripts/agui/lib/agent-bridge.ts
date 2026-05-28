/**
 * Brain readers (v2.0 — markdown-first).
 *
 * Reads instinct markdown directly from disk. No FastAPI, no SQL.
 * Server-side only (uses fs); called from React Server Components.
 */

import fs from 'node:fs';
import path from 'node:path';

export interface InstinctSummary {
  file: string;
  frontmatter: {
    id?: string;
    service_line?: string;
    industry?: string;
    confidence_score?: number;
    visibility?: string;
    central_sync?: string;
    status?: string;
  };
}

function parseFrontmatter(text: string): InstinctSummary['frontmatter'] {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return {};
  const fm: Record<string, any> = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^(\w[\w_]*):\s*(.+)$/);
    if (!kv) continue;
    let v: any = kv[2].trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      v = v.slice(1, -1);
    }
    if (/^-?\d+(?:\.\d+)?$/.test(v)) v = Number(v);
    fm[kv[1]] = v;
  }
  return fm;
}

function readInstinctsFromDir(dir: string): InstinctSummary[] {
  if (!fs.existsSync(dir)) return [];
  const out: InstinctSummary[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isFile() || !entry.name.endsWith('.md') || entry.name.startsWith('_')) continue;
    const p = path.join(dir, entry.name);
    try {
      const text = fs.readFileSync(p, 'utf8');
      out.push({ file: entry.name, frontmatter: parseFrontmatter(text) });
    } catch {
      // skip unreadable
    }
  }
  return out.sort((a, b) => a.file.localeCompare(b.file));
}

export function readEngagementInstincts(engagementPath: string): InstinctSummary[] {
  return readInstinctsFromDir(path.join(engagementPath, '.brain', '01_Instincts'));
}

export function defaultCentralPath(): string {
  if (process.env.Omega_CENTRAL_BRAIN) return process.env.Omega_CENTRAL_BRAIN;
  if (process.platform === 'linux') return '/mnt/d/Obsidian Notes Taken/Omega_Second_Brain';
  if (process.platform === 'win32') return 'D:\\Obsidian Notes Taken\\Omega_Second_Brain';
  return '';
}

export function readCentralInstincts(centralPath?: string): InstinctSummary[] {
  const root = centralPath || defaultCentralPath();
  if (!root) return [];
  return readInstinctsFromDir(path.join(root, '01_Instincts_Aggregated'));
}
