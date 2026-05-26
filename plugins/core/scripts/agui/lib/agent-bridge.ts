/**
 * AG-UI agent bridge.
 *
 * Subscribes to per-project + central FastAPI endpoints via the AG-UI protocol
 * (fallback: plain fetch + polling) so the UI updates as instincts and graphs
 * change. Keep this file thin — it routes events to the relevant tab via React
 * Server Components.
 *
 * In Phase 5 alpha this is a fetch-based polling client. AG-UI streaming arrives
 * as soon as @ag-ui/client v1.0 ships (currently @ag-ui/client@^0.1.0).
 */

export interface GraphPayload {
  nodes: Array<{ id: string; kind?: string }>;
  edges: Array<{ source: string; target: string; kind?: string }>;
  meta: { node_count: number; edge_count: number; generated_at?: string };
}

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

export async function fetchGraph(apiUrl: string): Promise<GraphPayload> {
  const r = await fetch(`${apiUrl}/graph`, { cache: 'no-store' });
  if (!r.ok) throw new Error(`graph fetch failed: ${r.status}`);
  return r.json();
}

export async function fetchInstincts(apiUrl: string): Promise<InstinctSummary[]> {
  const r = await fetch(`${apiUrl}/instincts`, { cache: 'no-store' });
  if (!r.ok) throw new Error(`instincts fetch failed: ${r.status}`);
  return r.json();
}

export async function fetchProjectMeta(apiUrl: string): Promise<unknown> {
  const r = await fetch(`${apiUrl}/`, { cache: 'no-store' });
  if (!r.ok) throw new Error(`meta fetch failed: ${r.status}`);
  return r.json();
}

// --- v1.3: AGUI brain visualization endpoints --------------------------------

export interface Community {
  id: number;
  label: string;
  size: number;
  members: string[];
}

export interface CommunitiesResponse {
  communities: Community[];
  generated_at: string;
}

export interface NodeDetail {
  name: string;
  type: string;
  edges_in: Array<{ source: string; edge: string | null }>;
  edges_out: Array<{ edge: string | null; target: string }>;
  instinct_metadata: Record<string, unknown> | null;
}

export interface ActivityEvent {
  ts: string;
  kind: string;
  node_ids: string[];
  meta: Record<string, unknown>;
}

export interface RecentActivityResponse {
  events: ActivityEvent[];
  generated_at: string;
}

export interface QueryTrailIteration {
  sql: string;
  row_count: number;
  node_ids: string[];
  edge_pairs: Array<[string, string]>;
}

export interface QueryTrail {
  question: string | null;
  iterations: QueryTrailIteration[];
  generated_at: string | null;
}

export async function fetchCommunities(apiUrl: string): Promise<CommunitiesResponse> {
  const r = await fetch(`${apiUrl}/graph/communities`, { cache: 'no-store' });
  if (!r.ok) throw new Error(`communities fetch failed: ${r.status}`);
  return r.json();
}

export async function fetchNodeDetail(apiUrl: string, name: string): Promise<NodeDetail> {
  const r = await fetch(`${apiUrl}/graph/node/${encodeURIComponent(name)}`, { cache: 'no-store' });
  if (!r.ok) throw new Error(`node detail fetch failed: ${r.status}`);
  return r.json();
}

export async function fetchRecentActivity(apiUrl: string, limit = 50): Promise<RecentActivityResponse> {
  const r = await fetch(`${apiUrl}/graph/recent-activity?limit=${limit}`, { cache: 'no-store' });
  if (!r.ok) throw new Error(`recent-activity fetch failed: ${r.status}`);
  return r.json();
}

export async function fetchLastQueryTrail(apiUrl: string): Promise<QueryTrail> {
  const r = await fetch(`${apiUrl}/graph/last-query-trail`, { cache: 'no-store' });
  if (!r.ok) throw new Error(`last-query-trail fetch failed: ${r.status}`);
  return r.json();
}

export interface SearchHit {
  id: string;
  score: number;
  snippet: string;
}

export interface SearchResponse {
  query: string;
  results: SearchHit[];
}

export async function fetchSearch(apiUrl: string, query: string, top = 20): Promise<SearchResponse> {
  if (!query.trim()) return { query, results: [] };
  const r = await fetch(
    `${apiUrl}/graph/search?q=${encodeURIComponent(query)}&top=${top}`,
    { cache: 'no-store' },
  );
  if (!r.ok) throw new Error(`search fetch failed: ${r.status}`);
  return r.json();
}

/**
 * Live subscription. Today: setInterval polling every 5 s.
 * When @ag-ui/client v1 ships: replace with the streaming subscriber.
 */
export function subscribeGraph(
  apiUrl: string,
  onUpdate: (graph: GraphPayload) => void,
  intervalMs = 5000,
): () => void {
  let alive = true;
  const tick = async () => {
    if (!alive) return;
    try {
      const g = await fetchGraph(apiUrl);
      if (alive) onUpdate(g);
    } catch (e) {
      // swallow — endpoint may be temporarily down
    }
    if (alive) setTimeout(tick, intervalMs);
  };
  tick();
  return () => { alive = false; };
}
