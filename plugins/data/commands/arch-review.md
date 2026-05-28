---
description: Assess current data architecture (warehouses, lakehouses, pipelines) against target state.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# /omega-data:arch-review

**Architecture Review.** Assess current data architecture (warehouses, lakehouses, pipelines) against target state.

## When to use

When the engagement scope explicitly calls for architecture review work in the data strategy & architecture domain. Look for keywords like: data strategy, data architecture, data governance, MDM, lineage.

## Inputs you should gather first

- The engagement `project.json` (industry, service line, regulatory frameworks)
- Relevant client documents already ingested into the brain (browse `.brain/02_Entities/` or ask Claude)
- Any prior Omega Data Strategy & Architecture deliverables for cross-reference (central brain)

## Steps

1. Read the engagement `project.json` and confirm scope includes Data Strategy & Architecture.
2. Load the `data` skill (`plugins/data/skills/data/SKILL.md`) and any matching industry skill.
3. Use the relevant subagent(s) — see Integration table below — to do the analysis.
4. Apply the methodology described in the skill, citing all sources.
5. Place the deliverable in `05_Deliverables_Final/` per the Omega file-location standard. Filename pattern: `data-arch-review-<client>-<YYYYMMDD>.md`.
6. Run `/omega:verify-quality` before marking the workstream complete.

## Output shape

A Omega-branded deliverable with:
- Pyramid-Principle structure (recommendation up front)
- Source citations on every data point
- Recommendation Format used in any advice section
- Quality bar items below all checked

## Quality bar

- Every recommended platform choice includes 3-yr TCO and a buy/build justification
- Lineage diagrams cover ≥90% of in-scope critical data elements
- Governance roles map to RACI; no orphan domains
