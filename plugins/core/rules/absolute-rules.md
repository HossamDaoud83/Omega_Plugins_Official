---
type: rule
scope: omega-core
priority: critical
---

# Omega Absolute Rules — Never Violate

These rules apply to every Omega engagement, regardless of service line, industry, or hook profile. Violation requires explicit client approval (recorded in `04 Decisions Log` for the engagement).

| Rule | Description |
|------|-------------|
| **ONE DELIVERABLE** | Maximum ONE deliverable per session. Focus drives quality. |
| **CLIENT-READY** | Every output must be presentation-ready. No drafts marked complete. |
| **VERIFY FIRST** | ALL acceptance criteria must be met before marking complete. Quality gate enforced by `quality-gate.js` hook — exits non-zero on failure. |
| **DOCUMENT ALL** | Future agents depend on your notes. Document every decision in `engagement_progress.md`. |
| **NO SCOPE CREEP** | Flag scope changes, don't absorb them. Requires client approval, recorded in `04 Decisions Log`. |
| **RISKS FIRST** | Address blockers before starting new work. Stale blockers (>3 days) flagged automatically by `stale-blocker-alert.js`. |
| **EVIDENCE-BASED** | Recommendations must be supported by analysis. Cite sources in deliverables. |
| **APPEND ONLY** | `engagement_progress.md` is append-only. Never modify history. |
| **MECE ANALYSIS** | All analysis must be Mutually Exclusive, Collectively Exhaustive. |
| **CLIENT ISOLATION** | No client data crosses engagements. Per-project `.brain/` stays in the workspace; only sanitized instincts sync to central brain via `/omega:brain-sync`. |
| **SECRETS NEVER COMMITTED** | `secret-scan.js` flags 14 patterns on every Edit. Remove before saving. |
