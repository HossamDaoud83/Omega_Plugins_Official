import { discoverProjects } from '@/lib/project-registry';
import {
  readCentralInstincts,
  readEngagementInstincts,
  defaultCentralPath,
  type InstinctSummary,
} from '@/lib/agent-bridge';

export default async function InstinctsPage() {
  const centralPath = defaultCentralPath();
  const projects = discoverProjects();
  const centralInstincts: InstinctSummary[] = readCentralInstincts(centralPath);

  return (
    <div>
      <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 gradient-text">Instincts</h1>
          <p className="text-sm text-omega-muted">Cross-engagement learnings · trigger <code className="font-mono text-[12px] px-1 py-0.5 rounded bg-slate-100">/omega:evolve</code> from a project</p>
        </div>
        <div className="flex items-center gap-2">
          <Legend />
        </div>
      </div>

      <section className="mb-12">
        <header className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold tracking-tight flex items-center gap-2">
            <span className="chip-dot" style={{ background: '#1B4F72' }} />
            Central
            <span className="text-xs font-normal text-omega-muted">sanitized</span>
          </h2>
          <span className="text-xs font-mono text-omega-muted">{centralInstincts.length} record{centralInstincts.length === 1 ? '' : 's'}</span>
        </header>
        {centralInstincts.length === 0 ? (
          <EmptyNotice
            title="No sanitized instincts yet"
            subtitle="Run /omega:brain-sync from any engagement to push sanitized patterns to the central brain."
            path={`${centralPath}/01_Instincts_Aggregated/`}
          />
        ) : (
          <InstinctList list={centralInstincts} />
        )}
      </section>

      {projects.map(p => {
        const local = readEngagementInstincts(p.engagement_path);
        if (local.length === 0) return null;
        return (
          <section key={p.engagement} className="mb-12">
            <header className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold tracking-tight flex items-center gap-2">
                <span className="chip-dot" style={{ background: '#F59E0B' }} />
                {p.short_name}
                <span className="chip" style={{ background: 'rgba(245,158,11,0.12)', color: '#B45309' }}>
                  raw client data
                </span>
              </h2>
              <span className="text-xs font-mono text-omega-muted">{local.length} record{local.length === 1 ? '' : 's'}</span>
            </header>
            <InstinctList list={local} />
          </section>
        );
      })}
    </div>
  );
}

function EmptyNotice({
  title, subtitle, path,
}: { title: string; subtitle: string; path: string }) {
  return (
    <div className="card p-7 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1"
        style={{ background: 'linear-gradient(90deg, #94A3B8, #64748B)' }}
      />
      <div className="flex items-start gap-4">
        <span
          className="grid place-items-center w-11 h-11 rounded-xl text-slate-500 text-lg shrink-0"
          style={{ background: '#F1F5F9' }}
          aria-hidden
        >
          ◌
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold tracking-tight text-slate-800 mb-1">{title}</h3>
          <p className="text-sm text-omega-muted mb-3">{subtitle}</p>
          <div className="text-xs text-omega-muted">
            Expected at <code className="font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">{path}</code>
          </div>
        </div>
      </div>
    </div>
  );
}

function Legend() {
  const items: Array<{ label: string; color: string }> = [
    { label: 'high', color: '#10B981' },
    { label: 'med',  color: '#0EA5E9' },
    { label: 'low',  color: '#F59E0B' },
    { label: 'new',  color: '#94A3B8' },
  ];
  return (
    <div className="hidden md:flex items-center gap-3 text-[11px] text-omega-muted">
      <span className="uppercase tracking-[0.14em]">Confidence</span>
      {items.map(i => (
        <span key={i.label} className="inline-flex items-center gap-1.5">
          <span className="chip-dot" style={{ background: i.color }} />
          {i.label}
        </span>
      ))}
    </div>
  );
}

const TIER_STYLES = {
  high: { bg: 'linear-gradient(135deg, #10B981, #059669)', label: '#fff', dot: '#A7F3D0' },
  med:  { bg: 'linear-gradient(135deg, #0EA5E9, #2563EB)', label: '#fff', dot: '#BAE6FD' },
  low:  { bg: 'linear-gradient(135deg, #F59E0B, #E11D48)', label: '#fff', dot: '#FEF3C7' },
  new:  { bg: '#E2E8F0',                                   label: '#475569', dot: '#94A3B8' },
} as const;

function InstinctList({ list }: { list: InstinctSummary[] }) {
  if (list.length === 0) return <div className="card p-8 text-center text-sm text-omega-muted">No instincts yet.</div>;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {list.map(i => {
        const c = i.frontmatter.confidence_score ?? 0;
        const tier = (c >= 0.92 ? 'high' : c >= 0.75 ? 'med' : c >= 0.5 ? 'low' : 'new') as keyof typeof TIER_STYLES;
        const style = TIER_STYLES[tier];
        const title = i.file
          .replace(/^INS-\d{4}-\d{3}-/, '')
          .replace(/\.md$/, '')
          .replace(/-/g, ' ');
        return (
          <div key={i.file} className="card card-interactive p-4">
            <div className="flex items-center justify-between mb-2 gap-3">
              <span className="font-mono text-[11px] text-omega-muted truncate">{i.frontmatter.id || i.file}</span>
              <span
                className="chip shrink-0"
                style={{ background: style.bg, color: style.label }}
              >
                <span className="chip-dot" style={{ background: style.dot }} />
                conf {c.toFixed(2)}
              </span>
            </div>
            <div className="text-[15px] text-slate-800 mb-3 capitalize leading-snug">{title}</div>
            <div className="flex flex-wrap gap-2 text-[11px]">
              <Tag color="#1B4F72">{i.frontmatter.service_line ?? '—'}</Tag>
              <Tag color="#7C3AED">{i.frontmatter.industry ?? '—'}</Tag>
              <Tag color="#0EA5A4" prefix="vis">{i.frontmatter.visibility ?? '—'}</Tag>
              <Tag color="#F59E0B" prefix="sync">{i.frontmatter.central_sync ?? '—'}</Tag>
              <Tag color="#10B981" prefix="status">{i.frontmatter.status ?? '—'}</Tag>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Tag({ children, color, prefix }: { children: React.ReactNode; color: string; prefix?: string }) {
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md font-medium"
      style={{ background: `${color}14`, color }}
    >
      {prefix && <span className="opacity-60">{prefix}:</span>}
      {children}
    </span>
  );
}
