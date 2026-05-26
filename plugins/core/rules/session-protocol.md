---
type: rule
scope: omega-core
priority: high
---

# Omega Session Protocol

The session lifecycle for every Omega engagement. Hooks enforce these automatically — consultants do not invoke them manually.

## Session Initialization (`SessionStart` event)

1. `session-start.js` hook fires automatically when `claude` opens the workspace
2. Validates 6 required artifacts exist (`project.json`, `session_state.json`, the 4 `00_Engagement_Management/*` files)
3. Reports stale blockers (untouched > 3 days) from `deliverables_tracker.json`
4. Alerts on milestones < 5 days away
5. Loads handoff notes from previous session's `session_state.json`
6. Surfaces applicable instincts from central brain (Phase 4)
7. If profile is `banking`, reminds about peer review + Opus escalation

After the hook completes, the consultant runs `/omega:session-start` to trigger the formal session-start command (loads context, reports priority deliverable).

## During Session

- Edits to files under `00_Engagement_Management/` trigger `stale-blocker-alert.js`
- Edits to `deliverables_tracker.json` trigger `quality-gate.js` — **blocks** marking complete if gate fails
- Edits to files under `05_Deliverables_Final/` trigger `branding-check.js`
- All Edit/Write operations trigger `secret-scan.js`

## Session End (`Stop` event + `/omega:session-end` command)

1. Consultant runs `/omega:session-end` (the command persists handoff notes, updates tracker)
2. `session-end.js` hook fires when Claude Code stops
3. Bumps `last_updated` in `session_state.json`
4. Triggers instinct extraction → writes to `<engagement>/.brain/01_Instincts/INS-YYYY-NNN.md` (Phase 4)
5. Triggers per-project graph rebuild (Phase 5)
6. Appends a session-end audit marker to `engagement_progress.md`

## End-of-Engagement (final session)

- Run `/omega:learn` to extract cross-session patterns
- Run `/omega:handoff` to generate the handoff package
- Run `/omega:invoice` for the final milestone invoice
- Run `/omega:brain-sync` to flush all instincts to central brain
- Run `/omega:session-end` one final time

## Hook profiles

Set via `OMEGA_HOOK_PROFILE` env var (default: `standard`).

| Profile | Use case | Hooks active | Quality threshold |
|---|---|---|---|
| `advisory` | Quick advisory engagements, low formality | `session-start`, `session-end` only | 60+ |
| `standard` | Standard consulting engagements (default) | All 6 hooks | 75+ |
| `banking` | Financial / regulatory deliverables | All 6 hooks + peer review required + Opus escalation | 85+ |

Disable specific hooks via `OMEGA_DISABLED_HOOKS=hook1,hook2` (or `=all` for emergencies).
