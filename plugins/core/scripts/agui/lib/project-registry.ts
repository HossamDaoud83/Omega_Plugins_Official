/**
 * Project registry — auto-discovers per-engagement FastAPI endpoints by reading
 * ~/Omega_Projects/<engagement>/.brain/config.json and the central API at :8800.
 *
 * Server-side only (uses fs). Called from app routes via React Server Components.
 */

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

export type DeliverableStatus = 'completed' | 'in_progress' | 'pending' | 'blocked';

export interface Deliverable {
  id: string;
  title: string;
  status: DeliverableStatus;
  due_date?: string | null;
}

export interface Commercials {
  currency: string;
  engagement_value: number | null;
  invoiced: number;
  collected: number;
  billing_model?: string;
  phase?: string;
}

export interface ProjectEndpoint {
  engagement: string;
  project_id: string;
  short_name: string;
  api_port: number;
  api_url: string;
  central_brain: string;
  commercials: Commercials;
  deliverables: Deliverable[];
  graph_html_path: string | null;
  engagement_path: string;
}

const CENTRAL_API = process.env.Omega_CENTRAL_API || 'http://127.0.0.1:8800';

const DEFAULT_COMMERCIALS: Commercials = {
  currency: 'USD',
  engagement_value: null,
  invoiced: 0,
  collected: 0,
};

function findGraphHtml(engagementDir: string): string | null {
  const candidates = [
    path.join(engagementDir, 'graphify-out', 'graph.html'),
    path.join(engagementDir, '.brain', 'graphify-out', 'graph.html'),
    path.join(engagementDir, '.brain', 'graph.html'),
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }
  return null;
}

function normaliseDeliverable(d: any, idx: number): Deliverable | null {
  if (!d || typeof d !== 'object') return null;
  if (d.$comment && !d.title) return null;
  const status = ['completed', 'in_progress', 'pending', 'blocked'].includes(d.status) ? d.status : 'pending';
  return {
    id: d.id ?? `D-${String(idx + 1).padStart(3, '0')}`,
    title: d.title ?? '(untitled)',
    status: status as DeliverableStatus,
    due_date: d.due_date ?? null,
  };
}

function discoverFrom(base: string): ProjectEndpoint[] {
  if (!fs.existsSync(base)) return [];
  const out: ProjectEndpoint[] = [];
  for (const entry of fs.readdirSync(base, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const engagementDir = path.join(base, entry.name);
    const cfg = path.join(engagementDir, '.brain', 'config.json');
    if (!fs.existsSync(cfg)) continue;
    try {
      const c = JSON.parse(fs.readFileSync(cfg, 'utf8'));
      if (!c.api_port) continue;
      const commercials: Commercials = {
        ...DEFAULT_COMMERCIALS,
        ...(c.commercials ?? {}),
      };
      const rawDeliverables: any[] = Array.isArray(c.deliverables) ? c.deliverables : [];
      const deliverables = rawDeliverables
        .map((d, i) => normaliseDeliverable(d, i))
        .filter((d): d is Deliverable => d !== null);

      out.push({
        engagement: entry.name,
        project_id: c.project_id ?? entry.name,
        short_name: c.engagement_short_name ?? entry.name,
        api_port: c.api_port,
        api_url: `http://127.0.0.1:${c.api_port}`,
        central_brain: c.central_brain_path ?? '',
        commercials,
        deliverables,
        graph_html_path: findGraphHtml(engagementDir),
        engagement_path: engagementDir,
      });
    } catch {
      // skip malformed
    }
  }
  return out;
}

export function discoverProjects(): ProjectEndpoint[] {
  const home = os.homedir();
  const primary = path.join(home, 'Omega_Projects');
  return discoverFrom(primary);
}

export function centralApiUrl(): string {
  return CENTRAL_API;
}

export function deliverableProgress(deliverables: Deliverable[]): { done: number; total: number; pct: number } {
  const total = deliverables.length;
  const done = deliverables.filter(d => d.status === 'completed').length;
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
  return { done, total, pct };
}

export function formatMoney(n: number, currency = 'USD'): string {
  if (!Number.isFinite(n)) return '—';
  try {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency, maximumFractionDigits: 0 }).format(n);
  } catch {
    return `${currency} ${Math.round(n).toLocaleString()}`;
  }
}
