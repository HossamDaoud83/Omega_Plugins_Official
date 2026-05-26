---
name: apply-branding
description: Apply Omega or client branding to deliverables
---

# Apply Branding

Apply Omega and client branding to deliverables.

## What This Does

1. Loads Omega branding configuration
2. Loads client branding (if provided)
3. Applies branding to specified deliverable
4. Generates branded document (DOCX/PDF)

## Instructions for Claude

When this skill is invoked:

1. **Load Branding Configuration**
   - Omega branding from `assets/omega-branding.json`
   - Client branding from `project.json` (if specified)

2. **Omega Branding Elements**
   - Logo: `assets/logos/omega-logo-full.png` (0.77" x 0.77")
   - Primary color: #1B4F72
   - Fonts: Arial Black (headings), Arial (body, 11pt)
   - Header: Logo | "Omega Consulting | CONFIDENTIAL"
   - Footer: Document title | Page X of Y

3. **Client Branding Elements** (if applicable)
   - Client logo (if provided)
   - Client color scheme
   - Co-branding requirements
   - Confidentiality markings

4. **Ask What to Brand**
   - Current deliverable
   - Specific document
   - All deliverables in folder
   - Template for future use

5. **Apply Branding**
   - Use `scripts/omega-document-generator.js`
   - Apply Omega branding standards
   - Add client branding if applicable
   - Generate DOCX/PDF with proper formatting

6. **Verify Branding**
   Checklist:
   - [ ] Omega logo placed correctly
   - [ ] Header/footer formatted
   - [ ] Colors applied (primary #1B4F72)
   - [ ] Fonts correct (Arial Black/Arial)
   - [ ] Tables formatted with Omega style
   - [ ] Confidentiality markings present
   - [ ] Client logo (if applicable)

7. **Save Branded Document**
   - Save to same folder as source
   - Append "_BRANDED" to filename
   - Confirm completion

## Supported Formats

- DOCX - Reports, proposals, documents
- PDF - Final deliverables
- PPTX - Presentations
- XLSX - Data, tracking (with Omega colors/formatting)

## Reference

See `.claude/skills/configuration/references/apply-branding.md` for detailed implementation.
