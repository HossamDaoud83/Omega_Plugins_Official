# Omega AGUI Dashboard

Polished portfolio surface for Omega engagements. Built with Next.js 15 and React 19.

**v2.0 — Obsidian-Primary.** The dashboard reads instinct markdown and engagement config directly from disk; there is no FastAPI process, no SQL graph layer. For visual brain exploration, open the engagement folder (or `Omega_Second_Brain/`) in Obsidian — its built-in graph view renders the wikilink relationships natively.

## Tabs

- **Portfolio** (`/portfolio`) — Cards for each engagement: health, deliverable progress, instinct counts
- **Instincts** (`/instincts`) — Searchable instinct browser; confidence ladder visible; per-engagement breakdown
- **Engagement** (`/engagement/[id]`) — Per-project deep view: deliverables tracker, payments, recent instincts, pointer to the markdown `.brain/`

## Data sources

- **Per-engagement**: `~/Omega_Projects/<name>/.brain/config.json` (commercials + deliverables) and `~/Omega_Projects/<name>/.brain/01_Instincts/*.md` (instinct frontmatter)
- **Central**: `${Omega_CENTRAL_BRAIN:-/mnt/d/Obsidian Notes Taken/Omega_Second_Brain}/01_Instincts_Aggregated/*.md`

## Launch

From the repo root:

```bash
tools/launch-agui.sh
```

Or manually:

```bash
cd plugins/core/scripts/agui
npm install     # one-time
npm run dev     # serves on http://localhost:3030
```
