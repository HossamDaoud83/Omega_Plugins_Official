---
description: Design SBTi-aligned net-zero pathway with milestones and sector decarbonization levers.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# /omega-esg:net-zero-pathway

**Net-Zero Pathway.** Design SBTi-aligned net-zero pathway with milestones and sector decarbonization levers.

## When to use

When the engagement scope explicitly calls for net-zero pathway work in the esg & sustainability domain. Look for keywords like: ESG, sustainability, carbon accounting, Scope 1/2/3, GHG Protocol.

## Inputs you should gather first

- The engagement `project.json` (industry, service line, regulatory frameworks)
- Relevant client documents already ingested into the brain (run `/omega:graph-query` to find them)
- Any prior Omega ESG & Sustainability deliverables for cross-reference (central brain)

## Steps

1. Read the engagement `project.json` and confirm scope includes ESG & Sustainability.
2. Load the `esg` skill (`plugins/esg/skills/esg/SKILL.md`) and any matching industry skill.
3. Use the relevant subagent(s) — see Integration table below — to do the analysis.
4. Apply the methodology described in the skill, citing all sources.
5. Place the deliverable in `05_Deliverables_Final/` per the Omega file-location standard. Filename pattern: `esg-net-zero-pathway-<client>-<YYYYMMDD>.md`.
6. Run `/omega:verify-quality` before marking the workstream complete.

## Output shape

A Omega-branded deliverable with:
- Pyramid-Principle structure (recommendation up front)
- Source citations on every data point
- Recommendation Format used in any advice section
- Quality bar items below all checked

## Quality bar

- Every emission figure cites methodology (location-based vs market-based, emission factor source, year)
- Materiality assessment includes ≥10 stakeholder groups and double-materiality lens
- Net-zero pathway is SBTi-aligned (1.5°C trajectory, near-term + long-term targets)
