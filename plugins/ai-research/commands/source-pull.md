---
description: Run multi-source search and pull primary references with citation metadata.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# /omega-airesearch:source-pull

**Source Pull.** Run multi-source search and pull primary references with citation metadata.

## When to use

When the engagement scope explicitly calls for source pull work in the ai-assisted research domain. Look for keywords like: research, secondary research, source triangulation, citation, evidence.

## Inputs you should gather first

- The engagement `project.json` (industry, service line, regulatory frameworks)
- Relevant client documents already ingested into the brain (run `/omega:graph-query` to find them)
- Any prior Omega AI-Assisted Research deliverables for cross-reference (central brain)

## Steps

1. Read the engagement `project.json` and confirm scope includes AI-Assisted Research.
2. Load the `airesearch` skill (`plugins/ai-research/skills/airesearch/SKILL.md`) and any matching industry skill.
3. Use the relevant subagent(s) — see Integration table below — to do the analysis.
4. Apply the methodology described in the skill, citing all sources.
5. Place the deliverable in `05_Deliverables_Final/` per the Omega file-location standard. Filename pattern: `airesearch-source-pull-<client>-<YYYYMMDD>.md`.
6. Run `/omega:verify-quality` before marking the workstream complete.

## Output shape

A Omega-branded deliverable with:
- Pyramid-Principle structure (recommendation up front)
- Source citations on every data point
- Recommendation Format used in any advice section
- Quality bar items below all checked

## Quality bar

- Every claim has ≥1 cited source with date and author
- Single-source claims are flagged "single-source — verify"
- Confidence labels (high/medium/low) are explicit on every conclusion
