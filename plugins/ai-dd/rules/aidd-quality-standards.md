# AI-Assisted Due Diligence (AIDD) — Quality Standards

Omega capability-specific quality criteria for `omega-ai-dd` deliverables. Loaded automatically when this plugin is installed.

## Always required

- Pyramid Principle structure (recommendation first, then evidence)
- MECE analysis (Mutually Exclusive, Collectively Exhaustive)
- Omega branding (colors, fonts, logo per `assets/omega-branding.json`)
- Source citations on all data points
- Recommendation Format used in any advice section

## Capability-specific

- Data room inventory shows coverage % vs expected document categories
- Every red flag has severity (critical/high/med/low) and an explicit source citation
- QoE adjustments have rationale and tie back to source documents
- Client-facing exports run redaction-on-export hook before save

See the `aidd` skill SKILL.md per-skill "Quality checklist" sections for command-specific criteria.

## Hand-off

Log surprising findings as instinct candidates for `/omega:learn` (mark `visibility: sanitizable` so they can sync to the central brain after sanitization).
