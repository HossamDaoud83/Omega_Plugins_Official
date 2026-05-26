---
description: Assess curriculum currency, employer alignment, learning-outcome design.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# /omega-ind-education:curriculum-modernization

**Curriculum Modernization.** Assess curriculum currency, employer alignment, learning-outcome design.

## When to use

When the engagement is in Education Industry and scope explicitly calls for curriculum modernization work. Look for keywords: education, K-12, higher ed, accreditation, LMS.

## Inputs you should gather first

- Engagement `project.json` (industry = education, regulatory frameworks)
- Relevant client documents in the brain (run `/omega:graph-query`)
- Any prior Omega Education Industry deliverables for cross-reference

## Steps

1. Read `project.json` and confirm industry = education.
2. Load the `education` skill (`plugins/ind-education/skills/education/SKILL.md`).
3. Use the relevant industry subagent (see Integration table) for the analysis.
4. Apply the methodology in the skill, citing all sources (regulators, accrediting bodies, peer benchmarks).
5. Place output in `05_Deliverables_Final/` per Omega file-location standard. Filename: `education-curriculum-modernization-<client>-<YYYYMMDD>.md`.
6. Run `/omega:verify-quality` before marking complete.

## Output shape

Omega-branded Education Industry deliverable with Pyramid-Principle structure, source citations on every regulatory reference, and explicit recommendations.

## Quality bar

- Accreditation findings link to specific accreditor standard / criterion
- Student success interventions show evidence base (e.g., proactive advising literature)
- Curriculum recommendations include learning-outcome alignment
