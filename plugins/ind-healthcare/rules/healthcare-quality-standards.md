# Healthcare Industry (HEALTHCARE) — Quality Standards

Omega industry-specific quality criteria for the `omega-ind-healthcare` plugin. Loaded automatically when this plugin is installed.

## Always required

- Pyramid Principle structure (recommendation first, then evidence)
- MECE analysis
- Omega branding
- Source citations on every regulatory reference (with version / date)
- Recommendation Format used in any advice section

## Industry-specific

- PHI handling findings cite specific HIPAA rule (164.312, 164.502, etc.)
- HL7-FHIR assessments cite USCDI version and specific resources
- Clinical workflow redesigns reduce documentation time without reducing safety
- Payer-mix analysis cites CMS / national payer benchmarks

See the `healthcare` skill SKILL.md per-skill "Quality checklist" sections for command-specific criteria.

## Hand-off

Log surprising findings as instinct candidates for `/omega:learn` (mark `visibility: sanitizable`).
