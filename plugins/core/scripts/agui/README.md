# Omega AGUI Dashboard

Polished portfolio surface on top of the per-project + central graphify FastAPI endpoints. Built with Next.js 15, React 19, AG-UI Protocol for live event streaming, and D3 for graph rendering.

## Tabs

- **Portfolio** (`/portfolio`) — Cards for each engagement: health, deliverable progress, recent instincts, graph thumbnail
- **Graph** (`/graph`) — Interactive central graph with filters (service_line, industry, confidence ≥ X); per-project drill-down with isolation banner
- **Instincts** (`/instincts`) — Searchable instinct browser; confidence ladder visible; supports `/omega:evolve` trigger
- **Engagement** (`/engagement/[id]`) — Per-project deep view: deliverables tracker, risks, isolated graph, instincts

## Endpoints consumed

- **Per-project FastAPI** — discovered from `~/Omega_Projects/*/.brain/config.json` (one per engagement, ports 8765+)
- **Central FastAPI** — `localhost:8800` (started via `python plugins/core/scripts/graphify/central_api.py --port 8800`)

## Live updates

`session-end.js` writes a new instinct → triggers `graph_builder.py` → AGUI's AG-UI client receives the event and updates the relevant tab within ~5 seconds.

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

## Status

Skeleton scaffolded in Phase 5 (April 2026). Run `npm install` and the AGUI app boots; per-project + central API integration is wired via `lib/agent-bridge.ts` and `lib/project-registry.ts`. D3 graph rendering and AG-UI event streams are wired but visual polish (logo, custom palette, chart treatments) lands as iteration on real engagements.

## Why AG-UI

AG-UI gives bidirectional event streaming so the dashboard reflects engagement state in real time as `session-end.js` writes new instincts. Streamlit dashboards (`scripts/graphify/dashboard.py`) remain for headless / no-Node environments.
