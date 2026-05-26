# Public Safety (PUBLICSAFETY) — Quality Standards

Omega capability-specific quality criteria for `omega-publicsafety` deliverables. Loaded automatically when this plugin is installed.

## Always required

- Pyramid Principle structure (recommendation first, then evidence)
- MECE analysis (Mutually Exclusive, Collectively Exhaustive)
- Omega branding (colors, fonts, logo per `assets/omega-branding.json`)
- Source citations on all data points
- Recommendation Format used in any advice section

## Capability-specific

- CAD/RMS review cites NIBRS / FBI/Interpol data standards
- Response time analysis disaggregates by priority and rural/urban
- EM readiness mapped to ICS / NIMS function (or equivalent national framework)
- Mission-critical comms address coverage, capacity, interoperability

See the `publicsafety` skill SKILL.md per-skill "Quality checklist" sections for command-specific criteria.

## Hand-off

Log surprising findings as instinct candidates for `/omega:learn` (mark `visibility: sanitizable` so they can sync to the central brain after sanitization).
