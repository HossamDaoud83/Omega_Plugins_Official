---
type: rule
scope: omega-core
priority: high
---

# Omega Document Standards

All Omega deliverables follow these standards. Auto-applied by `omega-document-generator.js` and verified by `branding-check.js` hook.

## Branding (auto-applied from `assets/omega-branding.json`)

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#1B4F72` | Headers, titles, borders |
| Critical | `#CC0000` | Critical status |
| High | `#FF8C00` | High priority, in progress |
| Complete | `#228B22` | Complete, low priority |
| Alt Row | `#F8FBFD` | Table alternating rows |

## Auto-applied standards

- **Logo:** 0.77" × 0.77", floating, top-left
- **Header:** Logo | Line | "Omega Consulting | CONFIDENTIAL"
- **Footer:** Document title | Page X of Y
- **Fonts:** Arial Black (headings), Arial (body, 11pt)
- **Tables:** Blue headers, alternating row shading

## Generator API (Node.js)

```javascript
const generator = require('@omega/core/scripts/omega-document-generator');

// DOCX
await generator.createDocument('docx', {
  title: 'Report Title',
  sections: [
    { heading: 'Section', content: 'Text...' },
    { table: { headers: [...], rows: [[...]] } }
  ]
});

// PDF, XLSX, PPTX — same shape, different format
await generator.createDocument('pdf', { title, sections });
await generator.createDocument('xlsx', { title: 'Workbook', sheets: [...] });
await generator.createDocument('pptx', { title: 'Presentation', slides: [...] });
```

## File location enforcement

| Output type | Location |
|---|---|
| Final client-facing deliverables | `05_Deliverables_Final/` (relative to engagement workspace) |
| Client communications (emails, status reports) | `06_Client_Communications/` |
| Discovery artifacts | `01_Discovery/{data_collected,extracted_data,interview_notes,current_state_analysis}/` |
| Analysis artifacts | `02_Analysis/{findings,benchmarking,gap_analysis}/` |
| Recommendations | `03_Recommendations/{business_case,options_analysis,roadmap}/` |
| Implementation | `04_Implementation/{project_plan,change_management,training_materials}/` |

## Naming conventions

- Final deliverables: `D0XX_<TitleCase>_<Client-or-Engagement>_<vN.M>.docx`
- Status reports: `status_report_YYYY-MM-DD.{md,docx}`
- Invoices: `invoice_<engagement-code>_<milestone>_<YYYY-MM-DD>.docx`
- Meeting notes: `meeting_<topic-slug>_YYYY-MM-DD.md`

## What `branding-check.js` validates

For files written under `05_Deliverables_Final/` (and `.md/.txt/.html/.tex` extensions):

- Contains "Omega Consulting" or "Omega" or "@omega" reference
- Contains a classification marker (CONFIDENTIAL / DRAFT / CLIENT-READY)
- References the engagement's client name (per `project.json`)

Warnings only — does not block. Hard requirements are enforced by `quality-gate.js` on the tracker update.
