---
description: Review ore reserves and resources reporting per JORC / NI 43-101.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# /omega-mining:reserve-review

**Reserve Review.** Review ore reserves and resources reporting per JORC / NI 43-101.

## When to use

When the engagement scope explicitly calls for reserve review work in the mining & metals domain. Look for keywords like: mining, metals, ore, JORC, NI 43-101.

## Inputs you should gather first

- The engagement `project.json` (industry, service line, regulatory frameworks)
- Relevant client documents already ingested into the brain (run `/omega:graph-query` to find them)
- Any prior Omega Mining & Metals deliverables for cross-reference (central brain)

## Steps

1. Read the engagement `project.json` and confirm scope includes Mining & Metals.
2. Load the `mining` skill (`plugins/ind-mining/skills/mining/SKILL.md`) and any matching industry skill.
3. Use the relevant subagent(s) — see Integration table below — to do the analysis.
4. Apply the methodology described in the skill, citing all sources.
5. Place the deliverable in `05_Deliverables_Final/` per the Omega file-location standard. Filename pattern: `mining-reserve-review-<client>-<YYYYMMDD>.md`.
6. Run `/omega:verify-quality` before marking the workstream complete.

## Output shape

A Omega-branded deliverable with:
- Pyramid-Principle structure (recommendation up front)
- Source citations on every data point
- Recommendation Format used in any advice section
- Quality bar items below all checked

## Quality bar

- Reserves classified per JORC / NI 43-101 with QP sign-off
- Tailings recommendations cite GISTM principles explicitly
- Social license analysis maps stakeholder map + grievance log
