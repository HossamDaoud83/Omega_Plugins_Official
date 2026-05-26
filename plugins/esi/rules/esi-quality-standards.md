# Enterprise Systems Integration (ESI) — Quality Standards

Omega service-line specific quality criteria for `@omega/esi` deliverables. Loaded automatically when this plugin is installed.

## Always required

- Pyramid Principle structure (recommendation first, then evidence)
- MECE analysis (Mutually Exclusive, Collectively Exhaustive)
- Omega branding (colors, fonts, logo per `assets/omega-branding.json`)
- Source citations on all data points
- Recommendation Format used in any advice section

## Service-line specific

See the `esi` skill SKILL.md "Quality checklist" section for methodology-specific criteria. Examples drawn from the v3 quality table:

- Data mapping complete (field-level)
- APIs documented (OpenAPI / AsyncAPI)
- Security reviewed (auth, authz, encryption)
- Migration plan uses 6 Rs framework

## Hand-off

Log surprising findings as instinct candidates for `/omega:learn` (mark `visibility: sanitizable` so they can sync to the central brain after sanitization).
