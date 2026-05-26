---
description: Hl7 Fhir (Omega HLT service line)
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# /omega-hlt:hl7-fhir

Use the `hlt` skill (`plugins/hlt/skills/hlt/SKILL.md`) for the methodology and quality criteria of this command.

## Steps

1. Read the engagement `project.json` and confirm service line is `HLT`.
2. Read the `hlt` skill SKILL.md and any applicable industry skill.
3. Execute the methodology for "Hl7 Fhir" producing a Omega-branded deliverable.
4. Place output in `05_Deliverables_Final/` per Omega file location standards.
5. Run `/omega:verify-quality` before marking complete.
