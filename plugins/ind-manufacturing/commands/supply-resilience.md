---
description: Map critical supply chain risks; design dual-sourcing and inventory buffer strategy.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# /omega-ind-manufacturing:supply-resilience

**Supply Resilience.** Map critical supply chain risks; design dual-sourcing and inventory buffer strategy.

## When to use

When the engagement is in Manufacturing Industry and scope explicitly calls for supply resilience work. Look for keywords: manufacturing, MES, OEE, predictive maintenance, Industry 4.0.

## Inputs you should gather first

- Engagement `project.json` (industry = manufacturing, regulatory frameworks)
- Relevant client documents in the brain (run `/omega:graph-query`)
- Any prior Omega Manufacturing Industry deliverables for cross-reference

## Steps

1. Read `project.json` and confirm industry = manufacturing.
2. Load the `manufacturing` skill (`plugins/ind-manufacturing/skills/manufacturing/SKILL.md`).
3. Use the relevant industry subagent (see Integration table) for the analysis.
4. Apply the methodology in the skill, citing all sources (regulators, accrediting bodies, peer benchmarks).
5. Place output in `05_Deliverables_Final/` per Omega file-location standard. Filename: `manufacturing-supply-resilience-<client>-<YYYYMMDD>.md`.
6. Run `/omega:verify-quality` before marking complete.

## Output shape

Omega-branded Manufacturing Industry deliverable with Pyramid-Principle structure, source citations on every regulatory reference, and explicit recommendations.

## Quality bar

- MES findings map to ISA-95 levels (0-4) explicitly
- OEE figures show all 3 components (availability × performance × quality)
- Predictive maintenance pilots have explicit measurement (MTBF, MTTR, false-positive rate)
