# AI Persona Synthesis (AIPERSONAS) — Quality Standards

Omega capability-specific quality criteria for `omega-ai-personas` deliverables. Loaded automatically when this plugin is installed.

## Always required

- Pyramid Principle structure (recommendation first, then evidence)
- MECE analysis (Mutually Exclusive, Collectively Exhaustive)
- Omega branding (colors, fonts, logo per `assets/omega-branding.json`)
- Source citations on all data points
- Recommendation Format used in any advice section

## Capability-specific

- Every quote attributed (interview ID, date, persona)
- No fabricated quotes — only paraphrased or verbatim from real interviews
- Personas grounded in ≥5 interviews each
- Drift flagged when refresh changes >25% of evidence base

See the `aipersonas` skill SKILL.md per-skill "Quality checklist" sections for command-specific criteria.

## Hand-off

Log surprising findings as instinct candidates for `/omega:learn` (mark `visibility: sanitizable` so they can sync to the central brain after sanitization).
