# AI Bilingual Translation (AITRANSLATE) — Quality Standards

Omega capability-specific quality criteria for `omega-ai-translate` deliverables. Loaded automatically when this plugin is installed.

## Always required

- Pyramid Principle structure (recommendation first, then evidence)
- MECE analysis (Mutually Exclusive, Collectively Exhaustive)
- Omega branding (colors, fonts, logo per `assets/omega-branding.json`)
- Source citations on all data points
- Recommendation Format used in any advice section

## Capability-specific

- Glossary coverage ≥90% (glossary-coverage hook enforces)
- Every translated deliverable has an EN side and AR side with matching structure
- New terms proposed for human approval before adding to glossary
- No silent translation of named entities (kept canonical via alias overrides)

See the `aitranslate` skill SKILL.md per-skill "Quality checklist" sections for command-specific criteria.

## Hand-off

Log surprising findings as instinct candidates for `/omega:learn` (mark `visibility: sanitizable` so they can sync to the central brain after sanitization).
