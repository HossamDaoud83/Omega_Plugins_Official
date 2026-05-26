# Cybersecurity (CYBER) — Quality Standards

Omega capability-specific quality criteria for `omega-cyber` deliverables. Loaded automatically when this plugin is installed.

## Always required

- Pyramid Principle structure (recommendation first, then evidence)
- MECE analysis (Mutually Exclusive, Collectively Exhaustive)
- Omega branding (colors, fonts, logo per `assets/omega-branding.json`)
- Source citations on all data points
- Recommendation Format used in any advice section

## Capability-specific

- Every control gap mapped to a CIS Critical Security Control or ISO 27001 Annex A clause
- Threat models name explicit assets, threat actors, and attack vectors
- Vendor risk scores cite the questionnaire (CAIQ row, SIG Lite section) used to derive them
- Incident runbooks include severity matrix + escalation chain

See the `cyber` skill SKILL.md per-skill "Quality checklist" sections for command-specific criteria.

## Hand-off

Log surprising findings as instinct candidates for `/omega:learn` (mark `visibility: sanitizable` so they can sync to the central brain after sanitization).
