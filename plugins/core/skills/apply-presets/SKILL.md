---
name: apply-presets
description: Load industry and service line presets for engagement
---

# Apply Presets

Load industry and service line presets (templates, standards, frameworks).

## What This Does

1. Identifies service line and industry
2. Loads relevant presets
3. Applies templates, standards, quality criteria, frameworks
4. Configures engagement-specific settings

## Instructions for Claude

When this skill is invoked:

1. **Identify Context**
   - Read service line from `project.json` (MAR = Maritime)
   - Read industry from `project.json` (Maritime)
   - Detect engagement type (feasibility, assessment, implementation, etc.)

2. **Load Service Line Presets (MAR)**
   - Templates:
     - Maritime feasibility study template
     - Port operations analysis template
     - Fleet management assessment template
   - Standards:
     - IMO compliance checklist
     - MARPOL regulations reference
     - SOLAS requirements
   - Quality Criteria:
     - Maritime industry-specific acceptance criteria
     - Safety requirements validation
     - Environmental compliance checks
   - Frameworks:
     - Port efficiency analysis framework
     - Maritime logistics optimization

3. **Load Industry Presets (Maritime)**
   - Industry context and trends
   - Key regulatory bodies
   - Common challenges
   - Best practices
   - Terminology and acronyms

4. **Apply Presets**
   - Copy templates to appropriate phase folders
   - Update deliverables tracker with industry-specific criteria
   - Configure quality gates for service line
   - Load terminology dictionary

5. **Confirm Application**
   - List presets applied
   - Show locations of templates
   - Confirm standards loaded
   - Display next steps

## Available Presets

**Service Lines:**
- DIG - Digital Transformation
- MAR - Maritime Solutions
- AIG - AI Governance
- AAI - Agentic AI
- COE - Competency Centers
- ISO - ISO Certification
- [others from CLAUDE.md]

**Industries:**
- Maritime
- Healthcare
- Education
- Government
- Financial Services
- Manufacturing
- Retail
- Energy

## Reference

See `.claude/skills/configuration/references/apply-presets.md` for detailed implementation.
