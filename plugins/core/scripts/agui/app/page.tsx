import Link from 'next/link';
import type { Route } from 'next';
import { discoverProjects } from '@/lib/project-registry';
import { defaultCentralPath } from '@/lib/agent-bridge';

export default async function Home() {
  const projects = discoverProjects();
  const centralPath = defaultCentralPath();

  const features: Array<{ href: Route; title: string; icon: string; desc: string; from: string; to: string }> = [
    {
      href: '/portfolio',
      title: 'Portfolio',
      icon: '◧',
      desc: 'All engagements at a glance — health, deliverables, instincts.',
      from: '#1B4F72', to: '#0EA5A4',
    },
    {
      href: '/instincts',
      title: 'Instincts',
      icon: '✦',
      desc: 'Browse cross-engagement learnings. Trigger /omega:evolve from here.',
      from: '#F59E0B', to: '#E11D48',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden card p-8 md:p-10 mb-10 shadow-glow">
        <div
          aria-hidden
          className="absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(circle at center, #0EA5A4, transparent 60%)' }}
        />
        <div
          aria-hidden
          className="absolute -bottom-24 -left-16 w-[24rem] h-[24rem] rounded-full opacity-25 blur-3xl"
          style={{ background: 'radial-gradient(circle at center, #7C3AED, transparent 60%)' }}
        />

        <div className="relative">
          <div className="inline-flex items-center gap-2 chip mb-5" style={{ background: 'rgba(27,79,114,0.08)', color: '#1B4F72' }}>
            <span className="chip-dot" style={{ background: '#0EA5A4' }} />
            Omega v2.0 · Obsidian-Primary
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            <span className="gradient-text">Portfolio Dashboard</span>
          </h1>
          <p className="text-omega-muted max-w-2xl text-[15px]">
            {projects.length} engagement{projects.length === 1 ? '' : 's'} discovered · central brain at{' '}
            <code className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 text-[12px]">{centralPath}</code>
          </p>

          {/* Inline KPI strip */}
          <div className="mt-7 grid grid-cols-2 md:grid-cols-4 gap-3">
            <Kpi label="Engagements" value={projects.length} accent="#1B4F72" />
            <Kpi label="Service lines" value={11} accent="#0EA5A4" />
            <Kpi label="Industries" value={19} accent="#7C3AED" />
            <Kpi label="Plugins" value={49} accent="#F59E0B" />
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        {features.map(f => (
          <Link
            key={f.href}
            href={f.href}
            className="card card-interactive group p-6 relative overflow-hidden"
          >
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-1"
              style={{ background: `linear-gradient(90deg, ${f.from}, ${f.to})` }}
            />
            <div
              className="grid place-items-center w-11 h-11 rounded-xl text-white text-lg font-bold mb-4 shadow-soft"
              style={{ background: `linear-gradient(135deg, ${f.from}, ${f.to})` }}
            >
              {f.icon}
            </div>
            <h2 className="text-lg font-semibold tracking-tight mb-1.5">{f.title}</h2>
            <p className="text-sm text-omega-muted leading-relaxed">{f.desc}</p>
            <div className="mt-4 text-sm font-medium text-omega-primary inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              Open <span aria-hidden>→</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Status panel */}
      <div className="card p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="grid place-items-center w-9 h-9 rounded-lg text-omega-primary" style={{ background: 'rgba(27,79,114,0.10)' }}>⚙</span>
          <h2 className="text-lg font-semibold tracking-tight">Status</h2>
        </div>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50/70 border border-omega-border">
            <dt className="text-omega-muted">Engagements</dt>
            <dd className="font-semibold">{projects.length}</dd>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50/70 border border-omega-border gap-3">
            <dt className="text-omega-muted">Central brain</dt>
            <dd className="font-mono text-[12px] truncate">{centralPath}</dd>
          </div>
        </dl>
      </div>

      {projects.length === 0 && (
        <div className="mt-8 p-5 rounded-xl border-l-4 border-amber-400 bg-amber-50/80 text-sm text-amber-900">
          No engagements found in <code className="font-mono">~/Omega_Projects/*/</code>. Scaffold one with{' '}
          <code className="font-mono">tools/scaffold-engagement.sh P0XX_ClientShortName</code>.
        </div>
      )}
    </div>
  );
}

function Kpi({ label, value, accent }: { label: string; value: number | string; accent: string }) {
  return (
    <div className="rounded-xl border border-omega-border bg-white/70 backdrop-blur p-4">
      <div className="text-[11px] uppercase tracking-[0.14em] text-omega-muted mb-1">{label}</div>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold" style={{ color: accent }}>{value}</span>
      </div>
    </div>
  );
}
