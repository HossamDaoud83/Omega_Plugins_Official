import Link from 'next/link';
import {
  discoverProjects,
  deliverableProgress,
  formatMoney,
  type Deliverable,
} from '@/lib/project-registry';
import { readEngagementInstincts } from '@/lib/agent-bridge';

export default async function EngagementPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const projects = discoverProjects();
  const proj = projects.find(p => p.engagement === decodeURIComponent(id));

  if (!proj) {
    return (
      <div className="card p-10 text-center">
        <div className="text-5xl mb-3" aria-hidden>◌</div>
        <h1 className="text-2xl font-bold tracking-tight mb-2">Engagement not found</h1>
        <p className="text-sm text-omega-muted mb-5">
          No <code className="font-mono px-1.5 py-0.5 rounded bg-slate-100">~/Omega_Projects/{id}/.brain/config.json</code>.
        </p>
        <Link href="/portfolio" className="btn-primary">← Back to portfolio</Link>
      </div>
    );
  }

  const instincts = readEngagementInstincts(proj.engagement_path);

  const initial = proj.short_name?.[0]?.toUpperCase() ?? '·';
  const prog = deliverableProgress(proj.deliverables);
  const fee = proj.commercials.engagement_value ?? 0;
  const collected = proj.commercials.collected;
  const invoiced = proj.commercials.invoiced;
  const outstanding = Math.max(0, invoiced - collected);
  const remaining = Math.max(0, fee - collected);
  const collectedPct = fee > 0 ? Math.min(100, Math.round((collected / fee) * 100)) : 0;
  const invoicedPct = fee > 0 ? Math.min(100, Math.round((invoiced / fee) * 100)) : 0;

  return (
    <div>
      <Link href="/portfolio" className="inline-flex items-center gap-1 text-sm text-omega-muted hover:text-omega-primary transition mb-4">
        <span aria-hidden>←</span> Portfolio
      </Link>

      {/* Hero */}
      <section className="card p-7 md:p-8 mb-6 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-1.5"
          style={{ background: 'linear-gradient(90deg, #1B4F72, #0EA5A4, #7C3AED)' }}
        />
        <div className="flex items-center gap-5 flex-wrap">
          <span
            className="grid place-items-center w-16 h-16 rounded-2xl text-white text-2xl font-bold shadow-soft"
            style={{ background: 'linear-gradient(135deg, #1B4F72, #0EA5A4 60%, #7C3AED)' }}
          >
            {initial}
          </span>
          <div className="min-w-0">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">{proj.short_name}</h1>
            <div className="text-sm text-omega-muted font-mono mt-1">
              {proj.project_id}
              {proj.commercials.phase && <> · <span className="capitalize">{proj.commercials.phase}</span></>}
              {proj.commercials.billing_model && <> · {proj.commercials.billing_model}</>}
            </div>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <span className="chip" style={{ background: 'rgba(245,158,11,0.12)', color: '#B45309' }}>
              <span className="chip-dot" style={{ background: '#F59E0B' }} />
              isolated · raw client data
            </span>
          </div>
        </div>
      </section>

      {/* Top stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <Stat label="Instincts"   value={instincts.length}             from="#1B4F72" to="#0EA5A4" />
        <Stat label="Deliverables" value={`${prog.done}/${prog.total}`}  from="#10B981" to="#0EA5A4" sub={`${prog.pct}% complete`} />
        <Stat label="Engagement value" value={fee ? formatMoney(fee, proj.commercials.currency) : '—'} from="#F59E0B" to="#E11D48" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
        {/* Payments */}
        <section className="card p-6">
          <header className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold tracking-tight flex items-center gap-2">
              <span
                className="grid place-items-center w-7 h-7 rounded-md text-white text-sm"
                style={{ background: 'linear-gradient(135deg, #10B981, #059669)' }}
                aria-hidden
              >$</span>
              Payments
            </h2>
            <span className="text-xs font-mono text-omega-muted">{proj.commercials.currency}</span>
          </header>

          {fee > 0 ? (
            <>
              <div className="grid grid-cols-3 gap-3 mb-5">
                <Money label="Total fee" value={formatMoney(fee, proj.commercials.currency)} color="#0F172A" />
                <Money label="Collected" value={formatMoney(collected, proj.commercials.currency)} color="#059669" />
                <Money label="Outstanding" value={formatMoney(outstanding, proj.commercials.currency)} color="#B45309" />
              </div>

              <div className="space-y-3">
                <ProgressRow
                  label="Collected"
                  pct={collectedPct}
                  caption={`${formatMoney(collected, proj.commercials.currency)} of ${formatMoney(fee, proj.commercials.currency)}`}
                  gradient="linear-gradient(90deg, #10B981, #059669)"
                />
                <ProgressRow
                  label="Invoiced"
                  pct={invoicedPct}
                  caption={`${formatMoney(invoiced, proj.commercials.currency)} of ${formatMoney(fee, proj.commercials.currency)}`}
                  gradient="linear-gradient(90deg, #0EA5E9, #2563EB)"
                />
                <div className="flex items-center justify-between text-sm pt-1 border-t border-omega-border">
                  <span className="text-omega-muted">Remaining to bill</span>
                  <span className="font-semibold text-slate-800">
                    {formatMoney(Math.max(0, fee - invoiced), proj.commercials.currency)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-omega-muted">Remaining to collect</span>
                  <span className="font-semibold text-slate-800">
                    {formatMoney(remaining, proj.commercials.currency)}
                  </span>
                </div>
              </div>
            </>
          ) : (
            <div className="text-sm text-omega-muted">
              No commercials configured. Set <code className="font-mono px-1.5 py-0.5 rounded bg-slate-100">commercials.engagement_value</code> in <code className="font-mono">.brain/config.json</code>.
            </div>
          )}
        </section>

        {/* Deliverables */}
        <section className="card p-6">
          <header className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold tracking-tight flex items-center gap-2">
              <span
                className="grid place-items-center w-7 h-7 rounded-md text-white text-sm"
                style={{ background: 'linear-gradient(135deg, #7C3AED, #0EA5E9)' }}
                aria-hidden
              >◧</span>
              Deliverables
            </h2>
            <span className="text-xs font-mono text-omega-muted">{prog.done}/{prog.total} done</span>
          </header>

          <div className="mb-4">
            <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${prog.pct}%`,
                  background: 'linear-gradient(90deg, #7C3AED, #0EA5E9)',
                }}
              />
            </div>
            <div className="text-[11px] text-omega-muted mt-1">{prog.pct}% complete</div>
          </div>

          {proj.deliverables.length === 0 ? (
            <div className="text-sm text-omega-muted">No deliverables defined.</div>
          ) : (
            <ul className="space-y-2">
              {proj.deliverables.map(d => (
                <DeliverableRow key={d.id} d={d} />
              ))}
            </ul>
          )}
        </section>
      </div>

      {/* Recent instincts */}
      <section className="card p-6 mb-6">
        <header className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold tracking-tight flex items-center gap-2">
            <span className="accent-bar w-6" /> Recent instincts
          </h2>
          <span className="text-xs font-mono text-omega-muted">{instincts.length} total</span>
        </header>

        {instincts.length === 0 ? (
          <div className="text-sm text-omega-muted py-6 text-center">No instincts yet.</div>
        ) : (
          <ul className="divide-y divide-omega-border">
            {instincts.slice(-10).reverse().map((i) => {
              const c = i.frontmatter.confidence_score ?? 0;
              const tier = c >= 0.92 ? 'high' : c >= 0.75 ? 'med' : c >= 0.5 ? 'low' : 'new';
              const dot = { high: '#10B981', med: '#0EA5E9', low: '#F59E0B', new: '#94A3B8' }[tier];
              const title = i.file
                .replace(/^INS-\d{4}-\d{3}-/, '')
                .replace(/\.md$/, '')
                .replace(/-/g, ' ');
              return (
                <li key={i.file} className="py-3 flex items-center gap-3 text-sm">
                  <span className="chip-dot shrink-0" style={{ background: dot }} />
                  <span className="font-mono text-[11px] text-omega-muted shrink-0">{i.frontmatter.id}</span>
                  <span className="capitalize text-slate-800 flex-1 truncate">{title}</span>
                  <span className="text-xs text-omega-muted whitespace-nowrap font-mono">
                    {c.toFixed(2)} · {i.frontmatter.visibility ?? '—'}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      {/* Brain location */}
      <section className="card p-6 mb-6">
        <header className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold tracking-tight flex items-center gap-2">
            <span
              className="grid place-items-center w-7 h-7 rounded-md text-white text-sm"
              style={{ background: 'linear-gradient(135deg, #1B4F72, #7C3AED)' }}
              aria-hidden
            >◇</span>
            Knowledge Brain
          </h2>
        </header>
        <p className="text-sm text-omega-muted mb-3">
          The engagement brain is a markdown vault. Open it directly in Obsidian for search,
          backlinks, and the built-in graph view.
        </p>
        <div className="rounded-lg bg-slate-900 text-slate-100 p-3 text-[12px] font-mono overflow-x-auto">
          <span className="text-emerald-400">$</span> open "{proj.engagement_path}/.brain"
        </div>
      </section>
    </div>
  );
}

function Stat({
  label, value, from, to, sub,
}: { label: string; value: number | string; from: string; to: string; sub?: string }) {
  return (
    <div className="card p-5 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1"
        style={{ background: `linear-gradient(90deg, ${from}, ${to})` }}
      />
      <div className="text-[11px] uppercase tracking-[0.14em] text-omega-muted">{label}</div>
      <div className="mt-1.5 text-2xl md:text-[26px] font-bold leading-tight" style={{ color: from }}>{value}</div>
      {sub && <div className="text-[11px] text-omega-muted mt-0.5">{sub}</div>}
    </div>
  );
}

function Money({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="rounded-lg border border-omega-border bg-slate-50/70 p-3">
      <div className="text-[10px] uppercase tracking-[0.14em] text-omega-muted">{label}</div>
      <div className="text-base md:text-lg font-bold mt-0.5 break-all" style={{ color }}>{value}</div>
    </div>
  );
}

function ProgressRow({ label, pct, caption, gradient }: { label: string; pct: number; caption: string; gradient: string }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs mb-1">
        <span className="text-slate-700 font-medium">{label}</span>
        <span className="text-omega-muted font-mono">{pct}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: gradient }} />
      </div>
      <div className="text-[11px] text-omega-muted mt-1">{caption}</div>
    </div>
  );
}

const STATUS_STYLES: Record<Deliverable['status'], { bg: string; color: string; dot: string; label: string }> = {
  completed:   { bg: 'rgba(16,185,129,0.12)',  color: '#047857', dot: '#10B981', label: 'completed'   },
  in_progress: { bg: 'rgba(14,165,233,0.12)',  color: '#0369A1', dot: '#0EA5E9', label: 'in progress' },
  pending:     { bg: 'rgba(100,116,139,0.12)', color: '#475569', dot: '#94A3B8', label: 'pending'     },
  blocked:     { bg: 'rgba(225,29,72,0.12)',   color: '#9F1239', dot: '#E11D48', label: 'blocked'     },
};

function DeliverableRow({ d }: { d: Deliverable }) {
  const s = STATUS_STYLES[d.status];
  const completed = d.status === 'completed';
  return (
    <li className="flex items-center gap-3 p-3 rounded-lg border border-omega-border hover:bg-slate-50/70 transition">
      <span
        className="grid place-items-center w-7 h-7 rounded-md shrink-0 text-[11px] font-bold"
        style={{ background: s.bg, color: s.color }}
        aria-hidden
      >
        {completed ? '✓' : d.status === 'blocked' ? '!' : '·'}
      </span>
      <div className="flex-1 min-w-0">
        <div className={`text-sm font-medium truncate ${completed ? 'text-slate-500 line-through' : 'text-slate-800'}`}>
          {d.title}
        </div>
        <div className="text-[11px] text-omega-muted font-mono">
          {d.id}{d.due_date && <> · due {d.due_date}</>}
        </div>
      </div>
      <span className="chip shrink-0" style={{ background: s.bg, color: s.color }}>
        <span className="chip-dot" style={{ background: s.dot }} />
        {s.label}
      </span>
    </li>
  );
}
