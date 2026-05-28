import './globals.css';
import Link from 'next/link';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Omega Portfolio Dashboard',
  description: 'AGUI portfolio surface for Omega Consulting engagements',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="glass sticky top-0 z-30 border-b border-omega-border">
          <div className="mx-auto max-w-7xl px-6 py-3.5 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <span
                aria-hidden
                className="grid place-items-center w-9 h-9 rounded-xl text-white font-bold text-sm shadow-soft"
                style={{ background: 'linear-gradient(135deg, #1B4F72 0%, #0EA5A4 60%, #7C3AED 100%)' }}
              >
                C
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[15px] font-bold tracking-tight gradient-text">Omega Portfolio</span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-omega-muted">Omega Consulting · v2.0</span>
              </span>
            </Link>
            <nav className="flex items-center gap-7 text-sm">
              <Link href="/portfolio" className="nav-link">Portfolio</Link>
              <Link href="/instincts" className="nav-link">Instincts</Link>
              <span className="hidden md:inline-flex chip" style={{ background: '#ECFDF5', color: '#047857' }}>
                <span className="chip-dot" style={{ background: '#10B981' }} />
                live
              </span>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-6 py-10">{children}</main>

        <footer className="mt-20 border-t border-omega-border">
          <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-omega-muted">
            <div className="flex items-center gap-2">
              <span className="accent-bar w-10" />
              <span>Omega Consulting · Omega v2.0 · AGUI Dashboard</span>
            </div>
            <div className="font-mono text-[11px]">obsidian-primary</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
