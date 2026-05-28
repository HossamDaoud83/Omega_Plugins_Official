---
description: Ingest a data room: classify documents, build inventory, flag missing categories.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# /omega-aidd:dataroom-ingest

**Data Room Ingest.** Ingest a data room: classify documents, build inventory, flag missing categories.

## When to use

When the engagement scope explicitly calls for data room ingest work in the ai-assisted due diligence domain. Look for keywords like: due diligence, DD, data room, red flag, QoE.

## Inputs you should gather first

- The engagement `project.json` (industry, service line, regulatory frameworks)
- Relevant client documents already ingested into the brain (browse `.brain/02_Entities/` or ask Claude)
- Any prior Omega AI-Assisted Due Diligence deliverables for cross-reference (central brain)

## Steps

1. Read the engagement `project.json` and confirm scope includes AI-Assisted Due Diligence.
2. Load the `aidd` skill (`plugins/ai-dd/skills/aidd/SKILL.md`) and any matching industry skill.
3. Use the relevant subagent(s) — see Integration table below — to do the analysis.
4. Apply the methodology described in the skill, citing all sources.
5. Place the deliverable in `05_Deliverables_Final/` per the Omega file-location standard. Filename pattern: `aidd-dataroom-ingest-<client>-<YYYYMMDD>.md`.
6. Run `/omega:verify-quality` before marking the workstream complete.

## Output shape

A Omega-branded deliverable with:
- Pyramid-Principle structure (recommendation up front)
- Source citations on every data point
- Recommendation Format used in any advice section
- Quality bar items below all checked

## Quality bar

- Data room inventory shows coverage % vs expected document categories
- Every red flag has severity (critical/high/med/low) and an explicit source citation
- QoE adjustments have rationale and tie back to source documents
