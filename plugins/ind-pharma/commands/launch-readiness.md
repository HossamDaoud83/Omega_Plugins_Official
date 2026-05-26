---
description: Assess launch readiness across supply, market access, medical, commercial.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# /omega-pharma:launch-readiness

**Launch Readiness.** Assess launch readiness across supply, market access, medical, commercial.

## When to use

When the engagement scope explicitly calls for launch readiness work in the pharma & life sciences domain. Look for keywords like: pharma, life sciences, GxP, GMP, GCP.

## Inputs you should gather first

- The engagement `project.json` (industry, service line, regulatory frameworks)
- Relevant client documents already ingested into the brain (run `/omega:graph-query` to find them)
- Any prior Omega Pharma & Life Sciences deliverables for cross-reference (central brain)

## Steps

1. Read the engagement `project.json` and confirm scope includes Pharma & Life Sciences.
2. Load the `pharma` skill (`plugins/ind-pharma/skills/pharma/SKILL.md`) and any matching industry skill.
3. Use the relevant subagent(s) — see Integration table below — to do the analysis.
4. Apply the methodology described in the skill, citing all sources.
5. Place the deliverable in `05_Deliverables_Final/` per the Omega file-location standard. Filename pattern: `pharma-launch-readiness-<client>-<YYYYMMDD>.md`.
6. Run `/omega:verify-quality` before marking the workstream complete.

## Output shape

A Omega-branded deliverable with:
- Pyramid-Principle structure (recommendation up front)
- Source citations on every data point
- Recommendation Format used in any advice section
- Quality bar items below all checked

## Quality bar

- GxP findings link to specific regulation (21 CFR 211, ICH Q7, etc.)
- Trial design comments reference ICH E9 / E10 / GCP
- PV findings cite EMA GVP modules / FDA 21 CFR 314.80
