---
name: doc-gen
description: Generate professional DOCX, XLSX, PDF, PPTX documents with Omega branding
---

# Omega Document Generator

Generate professional, branded documents in multiple formats (Word, Excel, PDF, PowerPoint) with consistent Omega branding.

## Skill Metadata

- **Name:** Omega Document Generator
- **Command:** `/doc-gen`
- **Category:** Document Generation
- **Version:** 1.0
- **Author:** Omega Business Consulting

---

## What This Skill Does

1. Generates documents in 4 formats: DOCX, XLSX, PDF, PPTX
2. Applies consistent Omega branding (colors, fonts, logos)
3. Uses pre-defined templates for common deliverable types
4. Supports bilingual output (English/Arabic)
5. Includes headers, footers, page numbers, and watermarks

---

## When to Use

- Creating client deliverables (reports, presentations, spreadsheets)
- Generating formal letters and communications
- Producing proposals and contracts
- Exporting analysis results in professional format

---

## Instructions for Claude

When `/doc-gen` is invoked:

### Step 1: Identify Document Requirements

Ask or determine:
1. **Format:** DOCX | XLSX | PDF | PPTX
2. **Type:** Report | Letter | Proposal | Presentation | Spreadsheet | Contract
3. **Language:** English | Arabic | Bilingual
4. **Confidentiality:** Public | Internal | Confidential | Strictly Confidential

### Step 2: Load Branding Configuration

Read branding from: `assets/omega-branding.json`

```json
{
  "colors": {
    "primary": "#1B4F72",
    "secondary": "#2874A6",
    "accent": "#F39C12",
    "text": "#2C3E50",
    "background": "#FFFFFF",
    "critical": "#CC0000",
    "high": "#FF8C00",
    "complete": "#228B22",
    "alt_row": "#F8FBFD"
  },
  "fonts": {
    "heading": "Arial Black",
    "body": "Arial",
    "body_size": 11
  },
  "logo": {
    "path": "assets/logos/omega-logo-full.png",
    "width": "0.77in",
    "height": "0.77in"
  }
}
```

### Step 3: Apply Document Template

---

## Document Templates

### Template 1: Executive Report (DOCX/PDF)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [LOGO]  │  LINE  │  Omega Consulting | CONFIDENTIAL                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│                         [DOCUMENT TITLE]                                    │
│                         [Subtitle/Client Name]                              │
│                         [Date]                                              │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│ EXECUTIVE SUMMARY                                                           │
│ ─────────────────────────────────────────────────────────────────────────── │
│ [Key findings and recommendations in 3-5 bullet points]                     │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│ 1. INTRODUCTION                                                             │
│ ─────────────────────────────────────────────────────────────────────────── │
│ [Background, objectives, scope]                                             │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│ 2. METHODOLOGY                                                              │
│ ─────────────────────────────────────────────────────────────────────────── │
│ [Approach, data sources, frameworks used]                                   │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│ 3. FINDINGS                                                                 │
│ ─────────────────────────────────────────────────────────────────────────── │
│ [Detailed analysis and observations]                                        │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│ 4. RECOMMENDATIONS                                                          │
│ ─────────────────────────────────────────────────────────────────────────── │
│ [Prioritized recommendations with rationale]                                │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│ 5. NEXT STEPS                                                               │
│ ─────────────────────────────────────────────────────────────────────────── │
│ [Action items, owners, timelines]                                           │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│ APPENDICES                                                                  │
│ ─────────────────────────────────────────────────────────────────────────── │
│ [Supporting data, detailed tables, references]                              │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│ [Document Title]                                              Page X of Y   │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Sections:** Title Page, Executive Summary, TOC, Body, Appendices
**Header:** Logo (0.77") | Vertical Line | "Omega Consulting | [CONFIDENTIALITY]"
**Footer:** Document Title | Page X of Y

---

### Template 2: Formal Letter (DOCX/PDF)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  [Omega LOGO - Full Width Header]                                             │
│  ═══════════════════════════════════════════════════════════════════════    │
│                                                                             │
│  [Date]                                                                     │
│                                                                             │
│  [Recipient Name]                                                           │
│  [Title]                                                                    │
│  [Organization]                                                             │
│  [Address Line 1]                                                           │
│  [Address Line 2]                                                           │
│                                                                             │
│  Subject: [Subject Line]                                                    │
│                                                                             │
│  Dear [Salutation],                                                         │
│                                                                             │
│  [Opening paragraph - Purpose of letter]                                    │
│                                                                             │
│  [Body paragraphs - Details, requests, information]                         │
│                                                                             │
│  [Closing paragraph - Next steps, call to action]                           │
│                                                                             │
│  Sincerely,                                                                 │
│                                                                             │
│  [Signature Block]                                                          │
│  [Name]                                                                     │
│  [Title]                                                                    │
│  Omega Consulting                                                       │
│                                                                             │
│  ═══════════════════════════════════════════════════════════════════════    │
│  Omega Consulting | www.omega-consulting.local | info@omega-consulting.local              │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### Template 3: Presentation (PPTX)

**Slide 1: Title Slide**
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  [Omega LOGO]                                                                 │
│                                                                             │
│                                                                             │
│                         [PRESENTATION TITLE]                                │
│                         ─────────────────────                               │
│                         [Subtitle]                                          │
│                                                                             │
│                                                                             │
│                         [Client Name]                                       │
│                         [Date]                                              │
│                                                                             │
│  ═══════════════════════════════════════════════════════════════════════    │
│  CONFIDENTIAL                                                               │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Slide 2+: Content Slides**
```
┌─────────────────────────────────────────────────────────────────────────────┐
│  [Omega LOGO - small, top right]                                              │
│                                                                             │
│  [SLIDE TITLE]                                                              │
│  ═══════════════════════════════════════════════════════════════════════    │
│                                                                             │
│  • [Bullet point 1]                                                         │
│  • [Bullet point 2]                                                         │
│  • [Bullet point 3]                                                         │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  [Chart / Table / Diagram Area]                                       │  │
│  │                                                                       │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│  [Footer: Client Name | Date | Page #]                                      │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Final Slide: Thank You / Contact**
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  [Omega LOGO - Large, centered]                                               │
│                                                                             │
│                         Thank You                                           │
│                         ──────────                                          │
│                                                                             │
│                         [Contact Name]                                      │
│                         [Email]                                             │
│                         [Phone]                                             │
│                                                                             │
│                         www.omega-consulting.local                                   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### Template 4: Data Workbook (XLSX)

**Sheet Structure:**
```
Sheet 1: Executive Summary
├── Title Block (merged cells, Omega branding)
├── Key Metrics Table
├── Summary Charts Area
└── Notes/Assumptions

Sheet 2: Detailed Data
├── Column Headers (blue background, white text)
├── Data Rows (alternating: white/#F8FBFD)
├── Totals Row (bold, border top)
└── Footer Notes

Sheet 3: Analysis
├── Pivot Tables
├── Charts
└── Trend Analysis

Sheet 4: Appendix
├── Reference Data
├── Assumptions
└── Data Sources
```

**Formatting Standards:**
| Element | Format |
|---------|--------|
| Header Row | Background: #1B4F72, Font: White, Bold, 12pt |
| Data Rows | Alternating: White / #F8FBFD |
| Totals | Bold, Border Top, Background: #E8F4FD |
| Currency | $#,##0.00 |
| Percentage | 0.00% |
| Dates | YYYY-MM-DD |
| Numbers | #,##0 (with thousands separator) |

---

### Template 5: Contract/Agreement (DOCX/PDF)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  [Omega LOGO]                 [AGREEMENT TITLE]              [Client Logo]    │
│                                                                             │
│  ═══════════════════════════════════════════════════════════════════════    │
│                                                                             │
│  This [Agreement Type] ("Agreement") is entered into as of [Date]           │
│  ("Effective Date") by and between:                                         │
│                                                                             │
│  Omega Consulting ("Omega")                                               │
│  [Address]                                                                  │
│                                                                             │
│  AND                                                                        │
│                                                                             │
│  [CLIENT NAME] ("Client")                                                   │
│  [Address]                                                                  │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  1. SCOPE OF SERVICES                                                       │
│  2. DELIVERABLES                                                            │
│  3. TIMELINE                                                                │
│  4. FEES AND PAYMENT                                                        │
│  5. CONFIDENTIALITY                                                         │
│  6. INTELLECTUAL PROPERTY                                                   │
│  7. LIMITATION OF LIABILITY                                                 │
│  8. TERMINATION                                                             │
│  9. GOVERNING LAW                                                           │
│  10. SIGNATURES                                                             │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  AGREED AND ACCEPTED:                                                       │
│                                                                             │
│  Omega Consulting              [CLIENT NAME]                            │
│                                                                             │
│  _________________________         _________________________                │
│  Signature                         Signature                                │
│                                                                             │
│  _________________________         _________________________                │
│  Name                              Name                                     │
│                                                                             │
│  _________________________         _________________________                │
│  Title                             Title                                    │
│                                                                             │
│  _________________________         _________________________                │
│  Date                              Date                                     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Step 4: Generate Document

### For DOCX (Word):

```javascript
// Using docx library (conceptual)
const doc = new Document({
  sections: [{
    properties: {},
    headers: {
      default: new Header({
        children: [
          new Paragraph({
            children: [
              new ImageRun({ data: logoBuffer, transformation: { width: 77, height: 77 } }),
              new TextRun({ text: " | Omega Consulting | CONFIDENTIAL", font: "Arial", size: 20 })
            ]
          })
        ]
      })
    },
    footers: {
      default: new Footer({
        children: [
          new Paragraph({
            children: [
              new TextRun({ text: documentTitle }),
              new TextRun({ text: "Page " }),
              new SimpleField({ instruction: "PAGE" }),
              new TextRun({ text: " of " }),
              new SimpleField({ instruction: "NUMPAGES" })
            ]
          })
        ]
      })
    },
    children: [
      // Title
      new Paragraph({
        text: title,
        heading: HeadingLevel.TITLE,
        alignment: AlignmentType.CENTER
      }),
      // Sections...
    ]
  }]
});
```

### For XLSX (Excel):

```javascript
// Using exceljs library (conceptual)
const workbook = new ExcelJS.Workbook();
const sheet = workbook.addWorksheet('Summary');

// Header row styling
sheet.getRow(1).eachCell(cell => {
  cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1B4F72' } };
  cell.font = { color: { argb: 'FFFFFFFF' }, bold: true, size: 12 };
  cell.alignment = { horizontal: 'center', vertical: 'middle' };
});

// Alternating row colors
for (let i = 2; i <= lastRow; i++) {
  if (i % 2 === 0) {
    sheet.getRow(i).eachCell(cell => {
      cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF8FBFD' } };
    });
  }
}
```

### For PDF:

```javascript
// Using pdfkit library (conceptual)
const doc = new PDFDocument({ margin: 50 });

// Header
doc.image('assets/logos/omega-logo-full.png', 50, 45, { width: 55 });
doc.fontSize(10)
   .text('Omega Consulting | CONFIDENTIAL', 120, 50);
doc.moveTo(50, 80).lineTo(550, 80).stroke('#1B4F72');

// Title
doc.fontSize(24)
   .font('Helvetica-Bold')
   .fillColor('#1B4F72')
   .text(title, { align: 'center' });
```

### For PPTX (PowerPoint):

```javascript
// Using pptxgenjs library (conceptual)
const pptx = new PptxGenJS();

// Title Slide
let slide = pptx.addSlide();
slide.addImage({ path: 'assets/logos/omega-logo-full.png', x: 0.5, y: 0.5, w: 1.5, h: 1.5 });
slide.addText(title, { x: 1, y: 2.5, w: 8, h: 1, fontSize: 36, bold: true, color: '1B4F72' });
slide.addText(subtitle, { x: 1, y: 3.5, w: 8, h: 0.5, fontSize: 18, color: '2C3E50' });

// Content Slide
slide = pptx.addSlide();
slide.addText(sectionTitle, { x: 0.5, y: 0.5, w: 9, h: 0.8, fontSize: 28, bold: true, color: '1B4F72' });
slide.addText(bullets, { x: 0.5, y: 1.5, w: 9, h: 4, fontSize: 18, bullet: true });
```

---

## Step 5: Output Document

### File Naming Convention

```
[CLIENT]_[DOCTYPE]_[DESCRIPTION]_[DATE].[ext]

Examples:
- Omega_Report_Digital_Maturity_Assessment_2026-02-02.docx
- Omega_Proposal_AI_Governance_2026-02-02.pdf
- Omega_Analysis_Financial_Model_2026-02-02.xlsx
- Omega_Presentation_Strategy_Review_2026-02-02.pptx
```

### Output Location

```
05_Deliverables_Final/[DOCTYPE]/[FILENAME]
```

---

## Step 6: Display Confirmation

```
═══════════════════════════════════════════════════════════════════════════════
DOCUMENT GENERATED SUCCESSFULLY
═══════════════════════════════════════════════════════════════════════════════

Document:     [Title]
Format:       [DOCX | XLSX | PDF | PPTX]
Template:     [Executive Report | Letter | Presentation | Workbook | Contract]
Pages/Slides: [N]
Size:         [X KB/MB]
Language:     [English | Arabic | Bilingual]
Branding:     Omega Standard Applied

Output Path:  05_Deliverables_Final/[folder]/[filename]

═══════════════════════════════════════════════════════════════════════════════
```

---

## Quick Reference: Document Type Matrix

| Document Type | Formats | Template | Use Case |
|---------------|---------|----------|----------|
| Executive Report | DOCX, PDF | exec-report | Analysis findings, recommendations |
| Formal Letter | DOCX, PDF | letter | Client communications, requests |
| Presentation | PPTX | presentation | Client meetings, workshops |
| Data Workbook | XLSX | workbook | Financial models, data analysis |
| Proposal | DOCX, PDF | proposal | New engagement proposals |
| Contract | DOCX, PDF | contract | Engagement agreements |
| Status Report | DOCX, PDF | status-report | Weekly/monthly updates |
| Risk Register | XLSX | risk-register | Risk tracking |
| Project Plan | XLSX | project-plan | Timeline, milestones |

---

## Supported Languages

| Language | Code | RTL | Font |
|----------|------|-----|------|
| English | en | No | Arial |
| Arabic | ar | Yes | Arial Unicode MS |
| Bilingual | en-ar | Mixed | Arial / Arial Unicode MS |

---

## Integration with Other Skills

| Skill | Integration |
|-------|-------------|
| `/omega-budget` | Export budget estimate as formatted report |
| `/dashboard` | Export dashboard as PDF/PPTX |
| `/proposal` | Uses doc-gen for proposal document creation |
| `/risk-assessment` | Export risk register as XLSX |
| `/status-report` | Uses doc-gen for status report creation |

---

## Error Handling

| Error | Resolution |
|-------|------------|
| Logo not found | Use text-only header |
| Font not available | Fall back to system fonts |
| Template missing | Use default template |
| Invalid data | Show validation errors |

---

*Skill Version: 1.0*
*Last Updated: 2026-02-02*
