# KG Quality Standards (extends @omega/core quality gate)

When `/omega:verify-quality` runs on a deliverable, the following graph-aware checks contribute additively to the 0–100 score.

## Check 8 — Graph-traceable claims (15% weight)

Every quantitative claim or recommendation should trace to a graph node via the `INFORMS` edge or to an entity extracted via `/omega:doc-ingest`. Stub citations like "according to recent analysis" without a corresponding graph reference fail this check.

## Check 9 — Confidence hedging (10% weight)

Claims sourced from instincts with `confidence < 0.50` must be hedged in the deliverable text ("preliminary observation", "early signal", etc.). Stating low-confidence patterns as fact fails.

## Check 10 — Edge lineage integrity (5% weight)

All `INFORMS` edges feeding the deliverable must point to instincts with intact sanitization-passed lineage. Edges referencing pruned or orphan instincts fail.

## Banking profile — Check 11 (additional)

Every recommendation must link to ≥ 1 instinct with `confidence ≥ 0.75` OR ≥ 1 evolved skill (`status: evolved`). No "novel" recommendations without either prior pattern support or peer-reviewed reasoning attached.
