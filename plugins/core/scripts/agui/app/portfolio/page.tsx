import Link from 'next/link';
import {
  discoverProjects,
  deliverableProgress,
  formatMoney,
} from '@/lib/project-registry';
import { fetchProjectMeta } from '@/lib/agent-bridge';

const ACCENTS: Array<[string, string]> = [
  ['#1B4F72', '#0EA5A4'],
  ['#7C3AED', '#0EA5E9'],
  ['#F59E0B', '#E11D48'],
  ['#10B981', '#0EA5A4'],
  ['#0EA5E9', '#7C3AED'],
  ['#E11D48', '#F59E0B'],
];

function pickAccent(seed: string): [string, string] {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return ACCENTS[h % ACCENTS.length];
}

export default async function PortfolioPage() {
  const projects = discoverProjects();

  const cards = await Promise.all(
    projects.map(async p => {
      let meta: any = null;
      try { meta = await fetchProjectMeta(p.api_url); } catch { /* offline */ }
      return { ...p, meta, online: !!meta };
    })
  );

  const onlineCount = cards.filter(c => c.online).length;

  // Portfolio totals
  const totalValue = cards.reduce((s, c) => s + (c.commercials.engagement_value ?? 0), 0);
  const totalCollected = cards.reduce((s, c) => s + c.commercials.collected, 0);
  const totalInvoiced = cards.reduce((s, c) => s + c.commercials.invoiced, 0);
  const outstanding = Math.max(0, totalInvoiced - totalCollected);
  const allDeliverables = cards.flatMap(c => c.deliverables);
  const totalProgress = deliverableProgress(allDeliverables);

  return (
    <div>
      <div className="flex items-end justify-between flex-wrap gap-4 mb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 gradient-text">Portfolio</h1>
          <p className="text-sm text-omega-muted">
            {cards.length} engagement{cards.length === 1 ? '' : 's'} ·{' '}
            <span className="text-emerald-600 font-medium">{onlineCount} live</span>
          </p>
        </div>
        <div className="accent-bar w-32" />
      </div>

      {/* Portfolio rollup */}
      {cards.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <RollupKpi label="Engagement value" value={formatMoney(totalValue)} accent="#1B4F72" />
          <RollupKpi label="Collected"        value={formatMoney(totalCollected)} accent="#10B981" />
          <RollupKpi label="Outstanding"      value={formatMoney(outstanding)} accent="#F59E0B" />
          <RollupKpi
            label="Deliverables"
            value={`${totalProgress.done}/${totalProgress.total}`}
            accent="#7C3AED"
            sub={`${totalProgress.pct}% complete`}
          />
        </div>
      )}

      {cards.length === 0 && (
        <div className="card p-10 text-center text-omega-muted">
          <div className="text-4xl mb-2" aria-hidden>◌</div>
          <div className="font-medium text-slate-700 mb-1">No engagements discovered</div>
          <p className="text-sm">
            Scaffold one with{' '}
            <code className="font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">tools/scaffold-engagement.sh P0XX_ClientShortName</code>.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map(c => {
          const [from, to] = pickAccent(c.engagement);
          const prog = deliverableProgress(c.deliverables);
          const fee = c.commercials.engagement_value;
          const collected = c.commercials.collected;
          const collectedPct = fee && fee > 0 ? Math.min(100, Math.round((collected / fee) * 100)) : 0;
          return (
            <Link
              key={c.engagement}
              href={`/engagement/${encodeURIComponent(c.engagement)}` as any}
              className="card card-interactive p-5 relative overflow-hidden flex flex-col"
            >
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-1"
                style={{ background: `linear-gradient(90deg, ${from}, ${to})` }}
              />
              <div className="flex items-start justify-between mb-3 gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className="grid place-items-center w-10 h-10 rounded-lg text-white font-bold text-sm shrink-0 shadow-soft"
                    style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
                  >
                    {c.short_name?.[0]?.toUpperCase() ?? '·'}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-semibold tracking-tight truncate">{c.short_name}</h3>
                    <div className="text-[11px] text-omega-muted font-mono truncate">{c.project_id}</div>
                  </div>
                </div>
                <span
                  className="chip shrink-0"
                  style={
                    c.online
                      ? { background: '#ECFDF5', color: '#047857' }
                      : { background: '#F1F5F9', color: '#64748B' }
                  }
                >
                  <span
                    className="chip-dot"
                    style={{ background: c.online ? '#10B981' : '#94A3B8' }}
                  />
                  {c.online ? 'live' : 'offline'}
                </span>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-omega-muted mb-3 font-mono">
                <span>port {c.api_port}</span>
                {c.commercials.phase && (
                  <>
                    <span>·</span>
                    <span className="capitalize">{c.commercials.phase}</span>
                  </>
                )}
              </div>

              {/* Fee row */}
              <div className="rounded-lg border border-omega-border bg-slate-50/60 p-3 mb-3">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] uppercase tracking-[0.14em] text-omega-muted">Fee</span>
                  <span className="text-sm font-semibold text-slate-800">
                    {fee != null ? formatMoney(fee, c.commercials.currency) : '—'}
                  </span>
                </div>
                {fee != null && fee > 0 && (
                  <>
                    <div className="h-1.5 rounded-full bg-slate-200 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${collectedPct}%`,
                          background: 'linear-gradient(90deg, #10B981, #059669)',
                        }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-[11px] mt-1">
                      <span className="text-emerald-700">{formatMoney(collected, c.commercials.currency)} collected</span>
                      <span className="text-omega-muted">{collectedPct}%</span>
                    </div>
                  </>
                )}
              </div>

              {/* Deliverable progress */}
              <div className="rounded-lg border border-omega-border bg-slate-50/60 p-3 mb-3">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] uppercase tracking-[0.14em] text-omega-muted">Deliverables</span>
                  <span className="text-sm font-semibold text-slate-800">{prog.done}/{prog.total}</span>
                </div>
                <div className="h-1.5 rounded-full bg-slate-200 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${prog.pct}%`,
                      background: `linear-gradient(90deg, ${from}, ${to})`,
                    }}
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] mt-1">
                  <span className="text-omega-muted">{prog.pct}% complete</span>
                  {c.graph_html_path && (
                    <span className="inline-flex items-center gap-1 text-violet-700">
                      <span className="chip-dot" style={{ background: '#7C3AED' }} />
                      brain
                    </span>
                  )}
                </div>
              </div>

              {c.meta && (
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-omega-border mt-auto">
                  <Metric label="Instincts" value={c.meta.instinct_count ?? 0} color={from} />
                  <Metric label="Graph nodes" value={c.meta.graph?.node_count ?? '—'} color={to} />
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function RollupKpi({ label, value, accent, sub }: { label: string; value: string | number; accent: string; sub?: string }) {
  return (
    <div className="card p-4 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1"
        style={{ background: `linear-gradient(90deg, ${accent}, ${accent}99)` }}
      />
      <div className="text-[10px] uppercase tracking-[0.14em] text-omega-muted">{label}</div>
      <div className="mt-1 text-xl md:text-2xl font-bold" style={{ color: accent }}>{value}</div>
      {sub && <div className="text-[11px] text-omega-muted mt-0.5">{sub}</div>}
    </div>
  );
}

function Metric({ label, value, color }: { label: string; value: number | string; color: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.14em] text-omega-muted">{label}</div>
      <div className="text-lg font-bold" style={{ color }}>{value}</div>
    </div>
  );
}
