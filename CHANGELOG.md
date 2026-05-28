# Changelog

All notable changes to the Omega Consulting Template are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.1.0] — 2026-05-28 — GBrain memory layer + consultant-grade quality pass

Distribution release. Adds GBrain (https://github.com/garrytan/gbrain) as the
per-engagement memory layer in `omega-core`, plus a consultant-grade enrichment
pass on the highest-frequency commands. Sister-release of CPS v4.1.0 — Omega
plugins follow the same architectural contract but with the `omega-*` namespace
and Omega Consulting branding.

### Added

- **GBrain skill** at `plugins/core/skills/gbrain/SKILL.md` — operational reference
  for the per-engagement memory layer (PGLite-embedded Postgres 17, typed graph
  via regex inference cascade, hybrid BM25 + vector + RRF search, 74 MCP tools,
  write-lane discipline, troubleshooting matrix).
- **`/omega:gbrain` dispatcher** at `plugins/core/commands/gbrain.md` with
  subcommands: `status`, `capture`, `search`, `query`, `refresh-central`,
  `init`, `import`, `extract-links`.
- **New core hook `gbrain-sync.js`** — PostToolUse on `Edit|Write|NotebookEdit`
  matching `.brain/**/*.md`. Runs `gbrain sync` incrementally to keep PGLite
  in lock-step with disk. Soft-fails if Bun (≥ 1.3.10) or GBrain CLI absent.
  Core hook count: **6 → 7**.

### Changed

- **`session-start.js`** — added incremental `gbrain import <central> --read-only`
  (when `gbrain.config.json` requests it) and inbox-triage advisory.
- **`session-end.js`** — added post-extraction `gbrain sync` + `gbrain extract-links`
  so new instincts are immediately indexed and graph-typed.
- **Consultant-grade command enrichment** on the highest-frequency commands:
  - `plugins/kg-enhance/commands/doc-ingest.md` — full rewrite to a consistent
    template (When-to-run, Inputs, Steps, Output table, worked example,
    Banking-profile rules, GBrain awareness).
  - `plugins/kg-enhance/commands/fact-check.md` — Tier 3 fallback prefers
    `gbrain search`/`query` over grep (BM25 + hybrid). Worked example with
    verdict table + Must-Fix block. Banking-profile blocking on any
    contradicted claim.
  - `plugins/kg-enhance/commands/version-diff.md` — argument-hint, worked
    example, GBrain cross-link for hybrid retrieval over diff narratives.
  - `plugins/kg-enhance/commands/alias-merge.md` — worked example, output
    destination table, post-merge `gbrain extract-links`, Banking-profile
    double-confirmation for Person-entity merges (PII drift prevention).
  - `plugins/aig/commands/iso42001-gap.md` — service-line exemplar. Was a
    5-step stub (16 lines); now 173 lines consultant-grade with
    clause-by-clause scoring, MECE + Pyramid Principle, full quality gate +
    fact-check integration, Banking profile escalation (threshold 85,
    peer review required, Opus auto-escalation, additional hooks),
    GBrain awareness.

### Preserved (invariants, unchanged)

- Sanitizer rules + `/omega:brain-sync` as the only writer to central Omega Second Brain.
- `visibility: project-only` ratchet — sanitizer refuses to promote flagged instincts.
- Quality Gate Check 8 (markdown-traceable claims).
- Confidence ladder (0.25 / 0.50 / 0.75 / 0.92) + 1.5× cross-project weighting.
- All 49 plugins + 21 bundles + 18 plugin-scoped hooks (24 total: 7 core + 18).
- Hook profiles (`advisory` / `standard` / `banking`) + `OMEGA_DISABLED_HOOKS`.

### Wikilink convention (v1.1.0)

Absolute slug paths with display aliases: `[[03_Frameworks/iso-42001|ISO 42001]]`.
Short-form `[[ISO 42001]]` silently produces zero graph edges in GBrain's regex
inference cascade.

### Notes

- Bun (≥ 1.3.10) + GBrain CLI required for the memory-layer features. Hooks
  soft-fail if absent — engagements still run, just without hybrid search and
  the typed graph.
- Embedding posture defaults to **off** in `gbrain.config.json` for client-data
  sovereignty. Consultants enable per engagement after compliance review.

---

## [`@omega/finance` 4.1.0-alpha.0] — 2026-05 — Analyst foundation layer

Additive enhancement to the finance plugin — no breaking changes. Adds the
analyst building blocks beneath the existing senior bankability suite. All v4.0
functionality (`project-finance`, `sensitivity-analysis`, `financial-modeling`
skills; `financial-analyst`, `deal-financing-advisor` agents; sensitivity /
montecarlo / scenarios / breakeven commands; all 7 original scripts) preserved.

### Added — skills (+3)

- **`accounting-fundamentals`** — double-entry, journal entries, trial balance,
  Egyptian VAT/PDC conventions. References: double-entry cheatsheet, 30+ journal
  patterns.
- **`financial-statement-analysis`** — three-statement construction, the four
  ratio families, common-size and trend, red-flag checklist. References: ratio
  formula sheet (with DuPont), common-size/trend templates.
- **`analyst-toolkit`** — Excel craft, loan amortization theory, presentation
  craft. References: 20 Excel techniques, amortization variants, 12-slide deck
  skeleton.

### Added — agent (+1)

- **`associate-analyst`** — junior-to-mid persona with a routing table that hands
  off to the senior `financial-analyst` for bankability / DCF / LBO synthesis.

### Added — commands (+3)

- **`/omega-fin:ratios`** — four ratio families from a `statements.json`, with
  DuPont, markdown report, and 4 Omega-branded charts.
- **`/omega-fin:amortization`** — loan schedule across 5 variants (level, principal,
  bullet, grace, sculpted PF with DSCR target).
- **`/omega-fin:statements`** — three-statement construction + audit mode (6
  integrity tests).

### Added — scripts (+2, both tested)

- **`scripts/ratio_analysis.py`** — 4 ratio families + DuPont, calibratable
  thresholds, auto headline observations, 4 charts.
- **`scripts/amortization_schedule.py`** — 5 variants; sculpted reverse-engineers
  principal to hold a target DSCR given CFADS.

### Changed

- `package.json` → `4.1.0-alpha.0`; description reflects the analyst+bankability
  dual mission. `.claude-plugin/plugin.json` description and keywords expanded to
  cover the analyst layer (manifest version held at 1.0.0).
- `README.md` updated to 7 commands · 6 skills · 3 agents · 9 scripts.
- `tests/run-all.js` extended to assert presence of the new v4.1 components.

### Fixed

- `amortization_schedule.py` `--annual-rate` help string escaped (`10%%`) so
  `--help` no longer crashes under Python 3.14's argparse `%`-formatting.

---

## [1.3.1] — 2026-05-03 — Layered search + baseline breathing

Two additive enhancements to the v1.3 Graph tab. No new dependencies.

### Added — backend

- `GET /graph/search?q=…&top=20` — BM25 ranking over instinct full text
  (per-project: `01_Instincts/INS-*.md`; central: sanitized
  `01_Instincts_Aggregated/`). Returns `[{id, score, snippet}]` sorted
  score-desc. Pure-Python BM25 (k1=1.5, b=0.75) — no model, no embedding,
  no new pip package.

### Added — frontend search (`GraphTabShell.tsx`)

The search box now fans out across five layers, then the union gets
1-hop expanded so direct neighbours of every hit also surface:

  1. Node ID substring  (kept from v1.3)
  2. Node kind          ("Risk" → all Risk nodes)
  3. Instinct frontmatter values (service_line, industry, status, …)
  4. Edge kind          ("MITIGATES" → both endpoints of every MITIGATES edge)
  5. BM25 ranking over instinct full text (queries ≥ 2 chars; debounced 200 ms)
  6. 1-hop neighbour expansion of the union from the five layers above

A new "Search results · BM25" side panel renders the top hits with score
and snippet, click to focus the node detail panel.

### Added — baseline breathing on confidence halos

Slow ~10s sinusoidal cycle, ±4 % scale, on Instinct halos only — the
brain looks alive even when no commands are firing. Driven by a D3
transition reading `data-base-r` so it stays in sync as confidence data
loads or color mode changes. Non-Instinct halos (base r=0) stay still.
Activity pulses still take visual priority — the breathing is calm
underlying rhythm, not a competing animation.

### Tests

`node tools/run-all-tests.js` → **273 passing / 0 failing** (was 270).
3 new smoke tests for `/graph/search`, BM25 helper, layered search
wiring, and the breathing transition.

---

## [1.3.0] — 2026-05-03 — AGUI live brain visualization + full v1.1 Graph tab UX

Turns the AGUI Graph tab into a live brain. Four semantic animations layered on the existing
D3 canvas, plus the full v1.1 search/filter/community/detail surface that had been deferred.

### Added — backend (FastAPI, both per-project and central)

| Endpoint | Purpose |
|---|---|
| `GET /graph/communities` | Louvain communities with auto-generated labels (top-3 highest-degree members joined by ` / `) |
| `GET /graph/node/{name}` | Single-node detail — incoming + outgoing edges, plus instinct frontmatter when applicable |
| `GET /graph/recent-activity` | Latest hook-emitted events (last 30 s freshness window) for activity-pulse animations |
| `GET /graph/last-query-trail` | Iteration trail written by the last `/omega:graph-query` (per-project only; central returns empty) |

### Added — `plugins/core/scripts/graphify/activity_log.py`

Tiny append-only writer used by hooks and scripts to record events to
`.brain/recent-activity.jsonl` (capped at 500 entries). Plus `write_query_trail()` which
the `/omega:graph-query` command calls after its reflection loop completes.

### Added — frontend (`plugins/core/scripts/agui/`)

- `lib/community-colors.ts` — Cosmic Artistry 12-colour palette + helpers
- `lib/brain-pulse.ts` — semantic mappings for the four animations (confidence tiers, trail-iteration colours, pulse durations, heartbeat periods)
- `components/CommunityListPanel.tsx` — selectable community list with active-pulse dots
- `components/GraphSearchBox.tsx` — debounced live node search
- `components/GraphFilterControls.tsx` — confidence slider + status/kind toggles + reset
- `components/NodeDetailPanel.tsx` — clicked-node deep view (edges + instinct frontmatter)
- `components/GraphTabShell.tsx` — client shell that orchestrates state and polling
- `lib/agent-bridge.ts` extended with `fetchCommunities`, `fetchNodeDetail`, `fetchRecentActivity`, `fetchLastQueryTrail` plus their TypeScript types

### Added — `components/GraphCanvas.tsx` brain animations

- **Activity pulse** — ring grows + fades (1.0–1.8 s depending on event kind) per recent event
- **Query trail flow** — animated dashed lines along edge pairs, one colour per reflection-loop iteration (teal → amber → rose), with bloom via SVG `<filter feGaussianBlur>`
- **Confidence glow** — four-tier halo on Instinct nodes mapping the 0.25 / 0.50 / 0.75 / 0.92 ladder
- **Cluster heartbeat** — community-list dots ping when members appear in recent activity
- **Filter / search / community dimming** — opacity priority `filter > search > community-selection > full`, edges follow endpoint visibility

### Changed

- `/omega:graph-query` writes an iteration trail to `.brain/last-query-trail.json` after each invocation (no graph mutation; data file only)
- `plugins/core/scripts/graphify/graph_builder.py` appends a `graph-rebuild` event to the activity log on every rebuild
- `app/graph/page.tsx` keeps server-side initial graph fetch but renders new `GraphTabShell` for the interactive area
- `Omega_Commands_Master_Reference.md` (Part 4.4 + Appendix H) and `Omega_v4_Complete_Reference.md` (Part 13 + new §1.2b) document the new behaviour
- Reference docs bumped to `version: v1.3`

### Tests

`node tools/run-all-tests.js` → **270 passing / 0 failing** (was 250). 20 new smoke tests
cover the four new endpoints, the activity-log helper, the new lib files, the new
components, and the graph-query trail-writer.

### Hard guarantees

- No new dependencies — networkx (already required) provides Louvain; SVG `<filter>` provides bloom (no WebGL)
- No library swap — D3 v7 force-directed canvas preserved
- No schema change — graph.json shape unchanged
- All four animations fail open — FastAPI offline → animations quiet, static graph still renders
- Read-only contract preserved on the dashboard side — only `/omega:graph-query` writes the trail file, dashboard only reads

---

## [4.2.1] — 2026-05-01 — Phase E depth lifts (cross-cutting skills + industry depth + medium plugin enhancements)

Phase E content from the v4.2.0 plan, originally deferred to a point release.
Shipped same-day as a small follow-up release to keep momentum.

### Added — 9 omega-core cross-cutting skills (`plugins/core/skills/<skill>/SKILL.md`)

| Skill | Purpose |
|---|---|
| `workshop-facilitation` | Designing and running consulting workshops; agenda, energizers, output capture |
| `stakeholder-analysis` | Power/interest mapping, RACI, influence networks, engagement plans |
| `decision-frameworks` | RAPID, DACI, weighted scoring, prioritization matrices (impact/effort, MoSCoW), three-horizons, pre-mortem |
| `survey-design` | Question construction, scales, sampling, NPS/CSAT instrument design, bias watchlist |
| `interview-synthesis` | Coding qualitative interviews, thematic analysis, evidence ladder, inter-coder reliability |
| `visualization-library` | Chart selection decision tree, McKinsey storytelling charts, color discipline, anti-patterns |
| `negotiation-prep` | BATNA, ZOPA, principled negotiation, position vs interests, prep checklist, defensive tactics |
| `executive-storytelling` | Pyramid Principle deep-dive, SCQA, SCR, board-deck patterns, words to delete |
| `market-intelligence` | Source hierarchy, triangulation, top-down vs bottom-up sizing, CI ethics, source ranking template |

These are universally usable across any engagement, regardless of industry or service line.

### Added — 5 industry plugins lifted shallow → medium

Each gains 4-6 commands, +1 agent, a deeper SKILL.md, and a quality-standards rule.

| Plugin | New commands |
|---|---|
| `omega-ind-healthcare` | hipaa-gap, hl7-fhir-readiness, his-emr-assessment, clinical-workflow, payer-mix |
| `omega-ind-finserv` | aml-readiness, kyc-program, basel-iii-gap, payments-modernization, fraud-program |
| `omega-ind-government` | e-gov-maturity, citizen-experience, open-data-program, procurement-mod, digital-identity |
| `omega-ind-education` | accreditation-readiness, lms-strategy, student-success, curriculum-modernization, ferpa-program |
| `omega-ind-manufacturing` | mes-readiness, oee-program, predictive-maintenance, supply-resilience, sustainability-mfg |

New industry agents: `hipaa-officer`, `aml-compliance-lead`, `gov-strategist`, `higher-ed-advisor`, `mfg-engineer`.

### Added — 6 medium plugin enhancements (+2 skills + 1 agent each)

| Plugin | New skills (appended to SKILL.md) | New agent |
|---|---|---|
| `omega-aig` | ai-incident-response, ai-bias-audit | ai-risk-officer |
| `omega-dig` | target-operating-model, value-realization | transformation-pmo |
| `omega-finance` | working-capital-optimization, capital-allocation | deal-financing-advisor |
| `omega-hlt` | population-health, value-based-care | clinical-operations-lead |
| `omega-iso` | iso-22301-bcm, iso-37001-anti-bribery | certification-coordinator |
| `omega-mar` | port-digitalization, fleet-decarbonization | maritime-policy-advisor |

### Added — Tooling

- `tools/fill-phase-e-content.js` — additive content generator for the three Phase E tasks (idempotent)

### Changed

- All 49 plugin manifests bumped 4.2.0 → 4.2.1
- All 21 bundle manifests bumped 4.2.0 → 4.2.1
- All 70 marketplace entries bumped to 4.2.1
- `tools/generate-bundles.js`: `BUNDLE_VERSION` updated

### Tests

- 249/249 tests still passing across 49 plugins
- Recommender: 10/10 unit tests still passing

---

## [4.2.0] — 2026-05-01 — Comprehensive expansion: 25 new plugins + recommender + 18 hooks

Single mega-release that grows the platform from 24 → 49 plugins, adds a
plugin recommender, ships 18 quality-enforcement hooks, introduces a tier
field on every marketplace entry, and adds 8 new bundles (13 → 21).

### Added — 10 capability plugins (`plugins/{cyber,data,esg,risk,ops,supply,cloud,pmo,people,cx}/`)

| Plugin | Tier | Domain |
|---|---|---|
| `omega-cyber` | featured | Cybersecurity advisory, ISO 27001, threat modeling, secure-by-design |
| `omega-data` | standard | Data strategy, architecture, governance, lineage, MDM |
| `omega-esg` | featured | ESG strategy, carbon accounting (GHG Protocol), CSRD/GRI/SASB |
| `omega-risk` | featured | Enterprise risk (COSO, ISO 31000), risk appetite, BCP/DR, op-resilience |
| `omega-ops` | standard | Operational excellence, lean six sigma, VSM, kaizen, DMAIC |
| `omega-supply` | standard | Supply chain strategy, sourcing (Kraljic), S&OP, network design |
| `omega-cloud` | standard | Cloud strategy, FinOps, well-architected reviews, landing zones |
| `omega-pmo` | standard | PMO setup, portfolio prioritization, RAID hygiene, stage-gate review |
| `omega-people` | standard | Org design, change management (ADKAR), workforce planning, culture |
| `omega-cx` | standard | Customer experience, journey maps, VoC programs, NPS, service blueprints |

Each ships with 4-6 commands, 1-2 subagents, 1 skill (with per-skill methodology), 1 quality-standards rule, README, and tests.

### Added — 6 AI-native plugins (`plugins/{ai-research,ai-dd,ai-contracts,ai-regs,ai-translate,ai-personas}/`)

| Plugin | Tier | Purpose |
|---|---|---|
| `omega-ai-research` | featured | Source triangulation + citation chains for secondary research |
| `omega-ai-dd` | featured | AI-assisted DD: data-room ingest, red-flag scan, redaction-on-export |
| `omega-ai-contracts` | standard | Clause extraction with confidence-gated exports, playbook scoring |
| `omega-ai-regs` | standard | Gazette/circular monitoring with freshness gating |
| `omega-ai-translate` | standard | Bilingual AR/EN deliverables with glossary enforcement |
| `omega-ai-personas` | specialized | Persona synthesis from interviews with evidence-anchored quotes |

### Added — 9 industry plugins (`plugins/ind-{pharma,construction,hospitality,logistics,mining,agritech,media,nonprofit,publicsafety}/`)

| Plugin | Tier | Sector |
|---|---|---|
| `omega-ind-pharma` | standard | Pharma & life sciences (GxP, clinical trials, pharmacovigilance) |
| `omega-ind-construction` | standard | Construction & EPC (project controls, BIM, FIDIC/NEC, claims) |
| `omega-ind-hospitality` | specialized | Hospitality (RevPAR, F&B, brand standards, guest experience) |
| `omega-ind-logistics` | standard | Logistics & 3PL (fleet, warehousing, last-mile, port operations) |
| `omega-ind-mining` | specialized | Mining & metals (JORC reserves, LoM, tailings, social licence) |
| `omega-ind-agritech` | specialized | Agriculture & agritech (crop economics, irrigation, traceability, CSA) |
| `omega-ind-media` | specialized | Media & entertainment (content economics, streaming, rights, ad tech) |
| `omega-ind-nonprofit` | specialized | Nonprofit & NGO (theory of change, grant management, M&E) |
| `omega-ind-publicsafety` | specialized | Public safety (CAD/RMS, response time, EM readiness, MCC) |

Aerospace & Defense intentionally excluded from v4.2.0.

### Added — Plugin recommender (`/omega:recommend-plugins`)

Hybrid rules + LLM-judgment recommender. Translates engagement signals
(industry, service-line, scope, regulatory, languages) into an install path:
bundle + add-on plugins, with rationale.

- `plugins/core/commands/recommend-plugins.md` — slash command spec
- `plugins/core/skills/plugin-recommender/SKILL.md` — judgment rules for cases
  not covered by deterministic mapping
- `plugins/core/scripts/recommender/{recommend.js,rules.json,recommend.test.js}`
  — engine + 80% rules + 10 unit tests
- `tools/recommend-plugins.js` — CLI wrapper (`--industry X --service-line Y …`)
- `tools/scaffold-engagement.sh --recommend` — interactive pre-scaffold prompt

### Added — 18 enforcement hooks across 11 plugins

| Plugin | Hook | What it does |
|---|---|---|
| `omega-cyber` | `pii-scan.js` | Detect SSN/IBAN/CC/national-ID in deliverables; block in banking profile |
| `omega-cyber` | `license-scan.js` | Flag GPL/AGPL/proprietary license declarations in dependency manifests |
| `omega-pmo` | `status-pack-weekly.js` | Auto-draft Monday status pack from tracker + project state |
| `omega-pmo` | `raid-stale.js` | Flag RAID items untouched > 14 days |
| `omega-risk` | `control-check.js` | Refuse risk_register.json save if any risk lacks a mapped control |
| `omega-risk` | `bcm-coverage.js` | Banking-profile only — refuse tracker if BCP/DR not represented |
| `omega-esg` | `carbon-traceability.js` | Carbon claims in deliverables must cite baseline source |
| `omega-data` | `data-classification.js` | Documents missing Public/Internal/Confidential/Restricted marker |
| `omega-data` | `lineage-check.js` | Data architecture deliverables missing lineage references |
| `omega-cloud` | `cost-guard.js` | Refuse unbounded scaling proposals without an explicit cost cap |
| `omega-ops` | `vsm-integrity.js` | VSMs missing start/end nodes, takt time, or cycle time |
| `omega-supply` | `single-source-warning.js` | Critical components with > 80% supplier concentration |
| `omega-people` | `pii-people.js` | Stricter HR-grade PII scan (salary, employee IDs, ratings) |
| `omega-cx` | `voc-quote-attribution.js` | VoC block-quotes must carry persona/source attribution |
| `omega-ai-dd` | `redact-on-export.js` | Hard-block on PII before client export of DD outputs |
| `omega-ai-contracts` | `clause-confidence.js` | Flag extracted clauses with confidence < 0.85 |
| `omega-ai-regs` | `gazette-freshness.js` | SessionStart warn if regulatory cache > 7 days old |
| `omega-ai-translate` | `glossary-coverage.js` | Bilingual deliverables require ≥ 90% glossary coverage |

All hooks honor `OMEGA_HOOK_PROFILE` (advisory/standard/banking) and
`OMEGA_DISABLED_HOOKS` (per-name or `=all`). Shared helpers live in
`plugins/core/scripts/lib/hook-helpers.js` (PII regex bank, license matcher,
status-pack template).

### Added — 8 new bundles (13 → 21 total)

| Bundle | Tier | Components |
|---|---|---|
| `omega-bundle-cybersecurity` | standard | core + kg + cyber + iso + risk |
| `omega-bundle-esg` | standard | core + kg + finance + esg + str |
| `omega-bundle-pmo-delivery` | standard | core + kg + pmo + risk + dig |
| `omega-bundle-supply-chain` | specialized | core + kg + finance + supply + ops + ind-manufacturing |
| `omega-bundle-life-sciences` | specialized | core + kg + finance + iso + cyber + ind-pharma |
| `omega-bundle-data-platform` | standard | core + kg + data + cloud + coe |
| `omega-bundle-ai-native` | standard | core + kg + ai-research + ai-dd + ai-contracts + ai-regs |
| `omega-bundle-construction` | specialized | core + kg + finance + ind-construction + pmo |

`omega-bundle-all` updated to include all 49 plugins.

### Added — Marketplace tier field

Every entry in `.claude-plugin/marketplace.json` now carries
`tier: "featured" | "standard" | "specialized"`:

- 15 featured (top-line entries)
- 34 standard (mid-popularity)
- 21 specialized (niche / advanced)

Forward-compatible with `/plugin marketplace browse --tier <tier>` filtering
when supported. Documented in READMEs today so consultants can self-filter.

### Added — Tooling

- `plugins/_template-{capability,ai-native,industry}/` — three category
  sub-templates with structured `{{PLACEHOLDER}}` markers
- `tools/scaffold-plugin-deep.sh` — wraps `scaffold-plugin.sh`, materializes
  N command/agent files from a sub-template, replaces placeholders
- `tools/bump-version-and-tier.js` — one-shot release tool
- `tools/fill-plugin-content.js` — generator that fills the 25 new plugins
  with starter content from a per-plugin spec

### Changed

- All 24 existing plugin manifests bumped from `4.0.0-alpha.0` → `4.2.0`
- Marketplace version → `4.2.0`
- `tools/run-all-tests.js` excludes any directory starting with `_template`
- `tools/generate-bundles.js` writes the `tier` field
- `tools/scaffold-plugin.sh` accepts a `tier` argument and writes it to the
  marketplace entry; default is `standard`

### Fixed

- Two pre-existing CRLF regex bugs in `omega-kg-enhance` tests (Windows line
  endings broke `^---\nname:...` pattern matches)

### Tests

- 49 plugins tested (was 24)
- 249/249 tests passing
- Recommender: 10/10 unit tests passing
- All 18 hooks smoke-tested with empty input + realistic content scenarios

---

## [4.1.0] — 2026-04-29 — Knowledge graph enhancement + D3 interactive canvas

### Added — `@omega/kg-enhance` plugin (`plugins/kg-enhance/`)

New capability plugin that closes 5 gaps in the knowledge graph layer.
Client documents were previously ungraphed — only instincts were tracked.
All command logic runs via Claude using existing tools; no new scripts or
dependencies required. Uses Python's built-in `sqlite3` module (no CLI binary
needed).

- `/omega:doc-ingest <path>` — extract entities from a client MD document,
  write to `graph.db` via Python `sqlite3`, detect version supersession
  automatically; idempotent (`INSERT OR IGNORE`)
- `/omega:graph-query <question>` — translate natural-language questions to SQL
  against the 3-table schema; read-only (`mode=ro` URI); refuses writes
- `/omega:version-diff <doc-title>` — show full version chain with diff
  narratives and in-progress deliverable warnings
- `/omega:alias-merge` — propose and apply EN/AR bilingual entity merges;
  never auto-applies without consultant confirmation
- `/omega:brain-html [--scope per-project|central]` — wrap Graphify to produce
  a self-contained `brain.html` with Leiden community clustering and Omega
  isolation banner (yellow per-project, blue central)
- `skills/kg-enhance/SKILL.md` — auto-triggers from natural language
- `rules/kg-quality-standards.md` — Checks 8/9/10 additive scoring on
  `/omega:verify-quality`
- `assets/seed-entity-aliases.json` — 15 canonical EN/AR pairs
  (ISO 42001, MARPOL, SOLAS, IMO, HIPAA, GDPR, AAST, …)
- 6 `node:test` smoke tests; aggregate suite: **149 passing, 0 failing**
  (was 143)
- Registered in `.claude-plugin/marketplace.json`

New edge types (use existing `edges.edge TEXT` column — no schema change):
`EXTRACTED_FROM`, `MENTIONS`, `SUPERSEDES`

### Added — D3 force-directed graph canvas in AGUI (`plugins/core/scripts/agui/`)

- `components/GraphCanvas.tsx` — `'use client'` React component:
  - D3 v7 force simulation (link + charge + center + collision)
  - Zoom/pan via `d3.zoom` (scale 0.05–8×)
  - Directed edge arrowhead markers
  - Node drag; node colours by kind matching Omega design tokens
  - Hover tooltip (node id + kind); click-to-highlight neighbourhood
  - Auto-generated legend from kinds present in payload
  - Edge cap: >1 000 edges → top-50-degree-node subset (browser safety)
  - Optional isolation banner prop (yellow per-project, blue central)
- `app/graph/page.tsx` — dynamic import + `<GraphCanvas>` inserted between
  stat cards and NodesByKind/EdgesByKind sections
- TypeScript: clean (0 errors)

### Added — `engagement-template/.brain/04_Versions/`

New directory for version diff narratives written by `/omega:doc-ingest` when
a superseded document is detected. Was missing from the scaffolded template.

### Updated — Obsidian documentation

- **Omega v4 Consultant Handbook** (v1.3): new edge types in Concept 7;
  D3 canvas note in Concept 11; document ingestion subsection in Part 7;
  Interactive Graph Canvas subsection + updated Graph tab in Part 8
- **Omega v4 System Manual** (v1.1): nine edge types in Part 7; D3 canvas in
  Surface 4; document layer paragraph in Pillar 3; new Appendix A.5 with
  5 kg-enhance commands (old A.5 → A.6)

---

## [4.0.0-alpha.0] — 2026-04-28 — Phases 0–6 shipped

After cleanup (Phase 0), v4 transforms the monolithic v3 template into a
composable plugin-based platform with 23 plugins, executable hooks, brain
isolation, knowledge graph, and AGUI portfolio dashboard.

### Phase 1 — `@omega/core` foundation + executable hooks
- 6 executable JS hooks: session-start, session-end, secret-scan,
  branding-check, stale-blocker-alert, quality-gate (BLOCKING)
- Hook profiles: `OMEGA_HOOK_PROFILE=advisory|standard|banking`
- Disable individual: `OMEGA_DISABLED_HOOKS=hook1,hook2` or `=all`
- 5 modular rules extracted from monolithic `CLAUDE.md` (absolute-rules,
  quality-frameworks, session-protocol, document-standards, protected-fields)
- 12 universal skills moved to `plugins/core/skills/`
- 2 agents created: `quality-reviewer`, `document-generator`
- `engagement-template/` populated (CLAUDE.md, AGENTS.md, .brain/, phase folders)
- Token optimization: `model: sonnet`, `MAX_THINKING_TOKENS: 10000`,
  `CLAUDE_AUTOCOMPACT_PCT_OVERRIDE: 50`, `CLAUDE_CODE_SUBAGENT_MODEL: haiku`

### Phase 2 — `@omega/finance` standalone plugin
- 7 Python scripts (tornado, montecarlo, spider, scenario, breakeven, run-all, config)
- 3 skills (project-finance, sensitivity-analysis, financial-modeling)
- 4 commands (`/omega-fin:sensitivity|montecarlo|scenarios|breakeven`)
- 1 agent (`financial-analyst`)
- 2 banking references (P80 conventions, DSCR thresholds)

### Phase 3 — 11 service-line + 10 industry plugins
- `@omega/aai|aig|coe|dig|edu|esi|gov|hlt|iso|mar|str` (service-line)
- `@omega/ind-healthcare|maritime|education|government|finserv|manufacturing|retail|energy|realestate|telecom`
- 130+ commands across all plugins
- Service-line-specific quality-standards rules per plugin
- Marketplace manifest registers all 23 plugins
- Removed v3 `.claude/skills`, `.claude/subagents`, `.claude/docs`, `.claude/hooks`

### Phase 4 — Continuous learning + Obsidian Second Brain
- Per-project `.brain/` (raw client data) + central
  `/mnt/d/Obsidian Notes Taken/Omega_Second_Brain/` (sanitized)
- `instinct-writer.js` — auto-extracts at session-end
- `sanitizer.js` — strips client identifiers, buckets USD figures, replaces
  named persons with role placeholders, strips project codes
- `confidence-tracker.js` — Jaccard similarity + cross-project recurrence
  (1.5x weight); ladder 0.25 → 0.50 → 0.75 → 0.92
- 5 commands: `/omega:brain-sync`, `/omega:evolve`, `/omega:learn`,
  `/omega:instinct-export`, `/omega:instinct-import`
- `tools/seed-central-brain.js`, `tools/init-project-brain.js`,
  `tools/scaffold-engagement.sh`
- Universal Instinct Schema v1.0 (`docs/instinct-schema.md`) with 7 schema tests

### Phase 5 — Graphify + AGUI dashboard
- Per-project: `entity_extractor.py`, `graph_builder.py`, `api.py`,
  `dashboard.py` (Streamlit)
- Central: `central_builder.py`, `central_api.py` (port 8800)
- NetworkX → SQLite + GraphML, FastAPI auto-allocated ports (8765+)
- Edge semantics: OBSERVES, MITIGATES, APPLIES, INFORMS, OBSERVED_IN, GENERALIZES_TO
- Next.js 15 + React 19 + AG-UI Protocol AGUI dashboard
  (`plugins/core/scripts/agui/`) with 4 routes (Portfolio, Graph, Instincts,
  Engagement) and Omega branding palette
- `tools/launch-agui.sh` — one-command launcher

### Phase 6 — Marketplace + cross-platform + docs
- `engagement-template/.cursor/` — Cursor IDE adapter (translates Cursor
  events to Omega hook input format) + mirrored rules
- `engagement-template/.codex/` — Codex CLI config + agent TOMLs
- 6 documentation files: `tutorial.md` (story-driven), `migration-framework.md`,
  `plugin-development.md`, `obsidian-graphify.md`, `agui-dashboard.md`,
  `instinct-schema.md`
- Root `README.md` rewritten for v4 platform



**Architectural break.** v4 transforms the monolithic v3 template into a composable
plugin-based platform. v3 monolithic engagements continue to work; new engagements
should use v4 once Phase 1 ships executable hooks and the `@omega/core` plugin.

### Added
- `package.json` declares npm workspaces (`workspaces: ["plugins/*"]`)
- `plugins/_template/` — scaffolding template for new `@omega/<code>` plugins
- `engagement-template/` — placeholder for the engagement workspace template (Phase 1 populates)
- `tools/` — placeholder for migration & developer utilities (Phase 1+ populates)
- `docs/` — placeholder for v4 documentation (Phase 4–6 populates)
- `.claude-plugin/marketplace.json` — marketplace manifest stub (plugins added incrementally)
- Bumped `engines.node` from `>=16.0.0` to `>=18.0.0` (built-in `node:test` + `fetch`)

### Removed
- 20 client-specific scripts (Red Sea Marine / Jazan / EBEIDO / Al Adabiya / MRCC leftovers):
  - `generate_ebeido_requirements.js`, `generate_fee_estimate.js`,
    `generate_client_email_docx.js`, `generate_client_requirements.js`,
    `generate_pha01_unified.py`, `analyze_boqs.py`, `audit_against_reference.py`,
    `generate_all_reports.js`, `generate_docx_report.js`, `generate_excel_report.js`,
    `generate_pdf_report.js`, `generate_pptx_report.js`, `generate_risk_documents.js`,
    `generate_example_documents.js`, `apply_omega_template_format.py`,
    `TEMPLATE_unified_docx_generator.py`, `generate_expert_briefing_docx.js`,
    `generate_financial_briefing_docx.js`, `convert_all_drawings.py`,
    `FORMATTING_IMPROVEMENTS.md`
- 5 v3-era Jazan-specific config docs (replaced in Phase 1 by modular `plugins/core/rules/`):
  - `.claude/README.md`, `.claude/QUICK_START.md`, `.claude/MEMORY_SCOPE.md`,
    `.claude/PROJECT_ISOLATION.md`, `.claude/memory/README.md`
- Top-level `dependencies` block from `package.json` will move to `plugins/core/package.json` in Phase 1 (kept transitionally for now)
- Format-specific scripts (`generate_docx_report.js` etc.); the unified
  `scripts/omega-document-generator.js` covers the same functionality generically

### Changed
- `package.json` `name`/`version`/`description` reflect the v4 monorepo structure
- `package.json` `scripts` block streamlined; v3 per-script entrypoints removed
  (will be re-exposed via `@omega/core` commands in Phase 1)
- `.gitignore` updated for v4: Next.js (AGUI), pytest cache, per-project
  `.brain/graph.db` exclusions, defensive guards for accidental client data

### Kept (carry into v4 unchanged or via plugin migration)
- `assets/omega-branding.json`, `assets/BIG3_*.json`, `assets/Omega_METHODOLOGY.md`, logos
- `scripts/omega-document-generator.js`, `omega-methodology.js`, `session-manager.js`,
  `deliverable-manager.js`, `risk-manager.js`, `setup-new-engagement.js`,
  `sync_to_dashboard.py`, all `read_*` scripts, `pdf_to_images.py`,
  `convert_pdf_to_images.js`, `create-engagement.bat`
- `.claude/skills/` (40+ skills, decomposed into plugins in Phases 1 + 3)
- `.claude/subagents/` (24 subagents, decomposed into plugins in Phase 3)
- `00_Engagement_Management/` template files (move to `engagement-template/` in Phase 1)
- `sensitivity_analysis/` (Python suite, becomes `@omega/finance` in Phase 2)

### Migration notes
- Existing v3 engagements continue working — they don't see plugin commands
- Phase 1 ships `@omega/core` + executable hooks + `engagement-template/`
- Phase 6 ships `tools/migrate-v3-to-v4.js` for opt-in legacy migration

### Reference
- Implementation plan: `~/.claude/plans/omega-v4-the-zesty-lantern.md`
- Project tracking (Obsidian): `05 Projects/Omega v4/Omega v4 MOC.md`
- Consultant handbook (Obsidian): `02 Omega/Omega v4 Consultant Handbook.md`

---

## [3.1.0] — 2026-03-17 — Reset to clean template, activate skills as slash commands

Per commit `3b05d1a`. Reset KVR to clean template; activated all 60 skills as slash commands.

## [3.0.0] — Earlier — Enhanced consulting engagement framework

Per commit `12fac3d`. Enhanced consulting engagement framework with comprehensive 11-service-line, 10-industry support.
