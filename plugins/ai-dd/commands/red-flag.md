---
description: Scan ingested documents for red flags by workstream (commercial, financial, legal, IT, HR).
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# /omega-aidd:red-flag

**Red-Flag Scan.** Scan ingested documents for red flags by workstream (commercial, financial, legal, IT, HR).

## When to use

When the engagement scope explicitly calls for red-flag scan work in the ai-assisted due diligence domain. Look for keywords like: due diligence, DD, data room, red flag, QoE.

## Inputs you should gather first

- The engagement `project.json` (industry, service line, regulatory frameworks)
- Relevant client documents already ingested into the brain (browse `.brain/02_Entities/` or ask Claude)
- Any prior Omega AI-Assisted Due Diligence deliverables for cross-reference (central brain)

## Steps

1. Read the engagement `project.json` and confirm scope includes AI-Assisted Due Diligence.
2. Load the `aidd` skill (`plugins/ai-dd/skills/aidd/SKILL.md`) and any matching industry skill.
3. Use the relevant subagent(s) — see Integration table below — to do the analysis.
4. Apply the methodology described in the skill, citing all sources.
5. Place the deliverable in `05_Deliverables_Final/` per the Omega file-location standard. Filename pattern: `aidd-red-flag-<client>-<YYYYMMDD>.md`.
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
