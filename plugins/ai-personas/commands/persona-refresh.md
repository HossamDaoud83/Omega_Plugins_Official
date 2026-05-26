---
description: Refresh personas with new interview data; flag drift.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# /omega-aipersonas:persona-refresh

**Persona Refresh.** Refresh personas with new interview data; flag drift.

## When to use

When the engagement scope explicitly calls for persona refresh work in the ai persona synthesis domain. Look for keywords like: persona, journey, interview, focus group, JTBD.

## Inputs you should gather first

- The engagement `project.json` (industry, service line, regulatory frameworks)
- Relevant client documents already ingested into the brain (run `/omega:graph-query` to find them)
- Any prior Omega AI Persona Synthesis deliverables for cross-reference (central brain)

## Steps

1. Read the engagement `project.json` and confirm scope includes AI Persona Synthesis.
2. Load the `aipersonas` skill (`plugins/ai-personas/skills/aipersonas/SKILL.md`) and any matching industry skill.
3. Use the relevant subagent(s) — see Integration table below — to do the analysis.
4. Apply the methodology described in the skill, citing all sources.
5. Place the deliverable in `05_Deliverables_Final/` per the Omega file-location standard. Filename pattern: `aipersonas-persona-refresh-<client>-<YYYYMMDD>.md`.
6. Run `/omega:verify-quality` before marking the workstream complete.

## Output shape

A Omega-branded deliverable with:
- Pyramid-Principle structure (recommendation up front)
- Source citations on every data point
- Recommendation Format used in any advice section
- Quality bar items below all checked

## Quality bar

- Every quote attributed (interview ID, date, persona)
- No fabricated quotes — only paraphrased or verbatim from real interviews
- Personas grounded in ≥5 interviews each
