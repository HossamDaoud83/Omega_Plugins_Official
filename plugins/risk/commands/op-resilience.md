---
description: Stress-test critical business services against severe-but-plausible scenarios (per BoE / DORA).
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# /omega-risk:op-resilience

**Operational Resilience.** Stress-test critical business services against severe-but-plausible scenarios (per BoE / DORA).

## When to use

When the engagement scope explicitly calls for operational resilience work in the enterprise risk management domain. Look for keywords like: risk, ERM, COSO, ISO 31000, risk appetite.

## Inputs you should gather first

- The engagement `project.json` (industry, service line, regulatory frameworks)
- Relevant client documents already ingested into the brain (run `/omega:graph-query` to find them)
- Any prior Omega Enterprise Risk Management deliverables for cross-reference (central brain)

## Steps

1. Read the engagement `project.json` and confirm scope includes Enterprise Risk Management.
2. Load the `risk` skill (`plugins/risk/skills/risk/SKILL.md`) and any matching industry skill.
3. Use the relevant subagent(s) — see Integration table below — to do the analysis.
4. Apply the methodology described in the skill, citing all sources.
5. Place the deliverable in `05_Deliverables_Final/` per the Omega file-location standard. Filename pattern: `risk-op-resilience-<client>-<YYYYMMDD>.md`.
6. Run `/omega:verify-quality` before marking the workstream complete.

## Output shape

A Omega-branded deliverable with:
- Pyramid-Principle structure (recommendation up front)
- Source citations on every data point
- Recommendation Format used in any advice section
- Quality bar items below all checked

## Quality bar

- Every risk has a named owner, inherent score, residual score, and ≥1 mapped control
- Risk appetite has both qualitative statement AND quantitative tolerance bands
- BCP includes RTO/RPO per critical business service; DR scenarios tested annually
