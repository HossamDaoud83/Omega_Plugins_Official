---
description: Run quantitative schedule risk analysis (Monte Carlo on activity durations).
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# /omega-construction:schedule-risk

**Schedule Risk Analysis.** Run quantitative schedule risk analysis (Monte Carlo on activity durations).

## When to use

When the engagement scope explicitly calls for schedule risk analysis work in the construction & epc domain. Look for keywords like: construction, EPC, FIDIC, NEC, BIM.

## Inputs you should gather first

- The engagement `project.json` (industry, service line, regulatory frameworks)
- Relevant client documents already ingested into the brain (browse `.brain/02_Entities/` or ask Claude)
- Any prior Omega Construction & EPC deliverables for cross-reference (central brain)

## Steps

1. Read the engagement `project.json` and confirm scope includes Construction & EPC.
2. Load the `construction` skill (`plugins/ind-construction/skills/construction/SKILL.md`) and any matching industry skill.
3. Use the relevant subagent(s) — see Integration table below — to do the analysis.
4. Apply the methodology described in the skill, citing all sources.
5. Place the deliverable in `05_Deliverables_Final/` per the Omega file-location standard. Filename pattern: `construction-schedule-risk-<client>-<YYYYMMDD>.md`.
6. Run `/omega:verify-quality` before marking the workstream complete.

## Output shape

A Omega-branded deliverable with:
- Pyramid-Principle structure (recommendation up front)
- Source citations on every data point
- Recommendation Format used in any advice section
- Quality bar items below all checked

## Quality bar

- Project controls have baseline + actual + EAC + variance per work package
- BIM assessment cites ISO 19650 levels explicitly
- Schedule risk analysis uses Monte Carlo with named distributions
