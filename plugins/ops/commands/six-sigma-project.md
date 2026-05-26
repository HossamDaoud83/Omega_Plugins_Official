---
description: Frame a DMAIC project: SIPOC, problem statement, charter.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# /omega-ops:six-sigma-project

**Six Sigma Project.** Frame a DMAIC project: SIPOC, problem statement, charter.

## When to use

When the engagement scope explicitly calls for six sigma project work in the operational excellence domain. Look for keywords like: lean, six sigma, VSM, kaizen, DMAIC.

## Inputs you should gather first

- The engagement `project.json` (industry, service line, regulatory frameworks)
- Relevant client documents already ingested into the brain (run `/omega:graph-query` to find them)
- Any prior Omega Operational Excellence deliverables for cross-reference (central brain)

## Steps

1. Read the engagement `project.json` and confirm scope includes Operational Excellence.
2. Load the `ops` skill (`plugins/ops/skills/ops/SKILL.md`) and any matching industry skill.
3. Use the relevant subagent(s) — see Integration table below — to do the analysis.
4. Apply the methodology described in the skill, citing all sources.
5. Place the deliverable in `05_Deliverables_Final/` per the Omega file-location standard. Filename pattern: `ops-six-sigma-project-<client>-<YYYYMMDD>.md`.
6. Run `/omega:verify-quality` before marking the workstream complete.

## Output shape

A Omega-branded deliverable with:
- Pyramid-Principle structure (recommendation up front)
- Source citations on every data point
- Recommendation Format used in any advice section
- Quality bar items below all checked

## Quality bar

- VSM has explicit start/end nodes, takt time, cycle time per step, and value-added ratio
- Process redesign quantifies before/after on cycle time, cost, defect rate
- Kaizen events have a chartered scope, daily standup cadence, and Day 5 readout
