---
description: Score extracted clauses against playbook standards; flag deviations.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# /omega-aicontracts:risk-score

**Risk Scoring.** Score extracted clauses against playbook standards; flag deviations.

## When to use

When the engagement scope explicitly calls for risk scoring work in the ai contract review domain. Look for keywords like: contract, clause, indemnity, limitation of liability, IP.

## Inputs you should gather first

- The engagement `project.json` (industry, service line, regulatory frameworks)
- Relevant client documents already ingested into the brain (run `/omega:graph-query` to find them)
- Any prior Omega AI Contract Review deliverables for cross-reference (central brain)

## Steps

1. Read the engagement `project.json` and confirm scope includes AI Contract Review.
2. Load the `aicontracts` skill (`plugins/ai-contracts/skills/aicontracts/SKILL.md`) and any matching industry skill.
3. Use the relevant subagent(s) — see Integration table below — to do the analysis.
4. Apply the methodology described in the skill, citing all sources.
5. Place the deliverable in `05_Deliverables_Final/` per the Omega file-location standard. Filename pattern: `aicontracts-risk-score-<client>-<YYYYMMDD>.md`.
6. Run `/omega:verify-quality` before marking the workstream complete.

## Output shape

A Omega-branded deliverable with:
- Pyramid-Principle structure (recommendation up front)
- Source citations on every data point
- Recommendation Format used in any advice section
- Quality bar items below all checked

## Quality bar

- Every extracted clause has confidence score; <0.85 is flagged for human review
- Risk scores reference an explicit playbook clause / threshold
- Redlines are tracked against the original; no silent edits
