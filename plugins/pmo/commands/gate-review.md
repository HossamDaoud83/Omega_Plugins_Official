---
description: Facilitate stage-gate review with scorecard and go/no-go decision.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# /omega-pmo:gate-review

**Stage-Gate Review.** Facilitate stage-gate review with scorecard and go/no-go decision.

## When to use

When the engagement scope explicitly calls for stage-gate review work in the pmo & program delivery domain. Look for keywords like: PMO, portfolio, program, project, RAID.

## Inputs you should gather first

- The engagement `project.json` (industry, service line, regulatory frameworks)
- Relevant client documents already ingested into the brain (browse `.brain/02_Entities/` or ask Claude)
- Any prior Omega PMO & Program Delivery deliverables for cross-reference (central brain)

## Steps

1. Read the engagement `project.json` and confirm scope includes PMO & Program Delivery.
2. Load the `pmo` skill (`plugins/pmo/skills/pmo/SKILL.md`) and any matching industry skill.
3. Use the relevant subagent(s) — see Integration table below — to do the analysis.
4. Apply the methodology described in the skill, citing all sources.
5. Place the deliverable in `05_Deliverables_Final/` per the Omega file-location standard. Filename pattern: `pmo-gate-review-<client>-<YYYYMMDD>.md`.
6. Run `/omega:verify-quality` before marking the workstream complete.

## Output shape

A Omega-branded deliverable with:
- Pyramid-Principle structure (recommendation up front)
- Source citations on every data point
- Recommendation Format used in any advice section
- Quality bar items below all checked

## Quality bar

- Every program has a charter with objectives, governance, scope, and named sponsor
- RAID items have owner + due date + aging; nothing untouched > 14 days
- Status packs have a 3-bullet headline, decisions-needed section, and 2-week look-ahead
