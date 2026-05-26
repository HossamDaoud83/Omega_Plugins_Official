---
description: Evolve clustered instincts in the central brain into a refined accelerator skill
allowed-tools: Bash, Read, Write
---

# /omega:evolve

When 5+ related instincts cluster around the same pattern in the central brain, evolve them into a refined `02_Evolved_Skills/<service-line>-<topic>-accelerator/SKILL.md` that future engagements can lean on directly.

## When to run

- After `/omega:brain-sync` has run on multiple engagements
- During a "knowledge harvesting" working block (typically end of quarter or after closing 3+ engagements)
- When the consultant notices repeated instincts on the same topic

## Steps

1. Open the central brain: `/mnt/d/Obsidian Notes Taken/Omega_Second_Brain/01_Instincts_Aggregated/`
2. Cluster instincts by `service_line` + `industry` + frontmatter `tags`
3. For each cluster of 5+ instincts:
   - Identify the common surface pattern
   - Synthesize the methodology / heuristic / template that all 5 instincts converge on
   - Write a new accelerator skill at `02_Evolved_Skills/<sl>-<topic>-accelerator/SKILL.md`
   - Use the standard SKILL.md format (frontmatter + When to use + Steps + Quality checklist + References)
4. Mark each source instinct's `status: evolved` and add a frontmatter line `evolved_into: "[[02_Evolved_Skills/<topic>-accelerator]]"`
5. Update the central engagement index `03_Engagement_Index/MOC.md` with a link to the new accelerator

## Quality bar for evolved skills

- Methodology clearly named (not just a description)
- Step-by-step procedure
- Quality checklist (5+ criteria)
- At least 3 source instincts cited as evidence
- Service-line and industry tags

## Example

5 instincts about "BOT projects in MENA ports having tariff renegotiation pressure around month 18" might evolve into:

```
02_Evolved_Skills/MAR-bot-tariff-renegotiation-accelerator/SKILL.md
```

with sections:
- When to use: BOT/PPP feasibility for MENA / GCC ports
- Trigger periods: months 15–24 of operations
- Mitigation menu: index clauses, take-or-pay floors, regulator engagement
- Quality checklist: financial model has 18-month renegotiation flag, etc.
