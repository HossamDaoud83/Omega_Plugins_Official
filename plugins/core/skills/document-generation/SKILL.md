---
name: document-generation
description: Generate Word, Excel, PDF documents with Omega branding and formatting
---

# Document Generation

Generate professional Word, Excel, PDF, and PowerPoint documents with Omega branding.

## What This Does

1. Creates DOCX (Word) reports and proposals
2. Generates PDF final deliverables
3. Creates XLSX (Excel) data exports and trackers
4. Builds PPTX (PowerPoint) presentations
5. Applies unified Omega branding automatically
6. Supports multiple output formats from same content

## Instructions for Claude

When this skill is invoked:

1. **Ask User Document Type Needed**
   - Word document (DOCX) - Reports, proposals
   - PDF document - Final deliverables, client-ready
   - Excel workbook (XLSX) - Data, trackers, dashboards
   - PowerPoint presentation (PPTX) - Slide decks

2. **Gather Content Requirements**
   - Document title
   - Sections/content
   - Tables or data
   - Output location

3. **Generate Document Using Unified System**
   ```javascript
   const generator = require('./scripts/omega-document-generator');

   await generator.createDocument('docx', {
       title: 'Document Title',
       sections: [...]
   });
   ```

4. **Auto-Apply Omega Branding**
   - Omega logo (0.77" x 0.77", top-left)
   - Navy blue headers (#1B4F72)
   - Professional formatting
   - Consistent fonts (Arial/Arial Black)
   - Page numbers and document title in footer

## Overview

This skill provides comprehensive document handling using the **unified Omega branding system**.

All documents are generated using:
- **Config**: `assets/omega-branding.json` - Single source of truth for all branding
- **Generator**: `scripts/omega-document-generator.js` - Unified document generation

---

## Quick Start

```javascript
const generator = require('./scripts/omega-document-generator');

// Create a DOCX
await generator.createDocument('docx', {
    title: 'My Report',
    sections: [
        { heading: 'Section 1', content: 'Content here...' },
        { table: { headers: ['A', 'B'], rows: [['1', '2']] } }
    ]
});

// Create a PDF
await generator.createDocument('pdf', { title: 'My Report', sections: [...] });

// Create an Excel workbook
await generator.createDocument('xlsx', {
    title: 'Data Export',
    sheets: [{
        name: 'Sheet1',
        headers: ['Col A', 'Col B'],
        rows: [['Data 1', 'Data 2']]
    }]
});

// Create a PowerPoint
await generator.createDocument('pptx', {
    title: 'Presentation',
    slides: [
        { title: 'Title Slide', subtitle: 'Subtitle', isTitleSlide: true },
        { title: 'Content', bullets: ['Point 1', 'Point 2'] }
    ]
});

// Create multiple formats at once
await generator.createMultipleFormats(['docx', 'pdf'], options);
```

---

## Omega Branding (from omega-branding.json)

### Colors

| Purpose | Color | Hex | Usage |
|---------|-------|-----|-------|
| Primary | Navy Blue | `#1B4F72` | Headers, titles, borders |
| Critical | Red | `#CC0000` | Critical status, warnings |
| High | Orange | `#FF8C00` | High priority, in progress |
| Medium | Yellow | `#FFD700` | Medium priority |
| Low/Complete | Green | `#228B22` | Low priority, complete |
| Alt Row | Light Gray | `#F8FBFD` | Table alternating rows |

### Typography

| Element | Font | Size |
|---------|------|------|
| Title | Arial Black | 24pt |
| Heading 1 | Arial Black | 18pt |
| Heading 2 | Arial Black | 14pt |
| Body | Arial | 11pt |
| Footer | Arial | 9pt |

### Logo

- **Path**: `assets/logos/omega-logo-full.png`
- **Dimensions**: 0.77" x 0.77" (55px x 55px)
- **Placement**: Top-left, floating in front of text

---

## Document Options

### DOCX Options

```javascript
{
    title: 'Document Title',
    outputPath: './output/file.docx', // Optional
    sections: [
        { heading: 'Heading Text', level: 2 },
        { content: 'Paragraph text...' },
        { table: { headers: [...], rows: [[...]] } },
        { pageBreak: true }
    ]
}
```

### PDF Options

```javascript
{
    title: 'Document Title',
    outputPath: './output/file.pdf',
    sections: [
        { heading: 'Heading Text' },
        { content: 'Paragraph text...' },
        { pageBreak: true }
    ]
}
```

### XLSX Options

```javascript
{
    title: 'Workbook Title',
    outputPath: './output/file.xlsx',
    sheets: [
        {
            name: 'Sheet Name',
            title: 'Sheet Title',
            tabColor: 'FF1B4F72', // Optional ARGB
            headers: ['Column A', 'Column B'],
            rows: [['Data 1', 'Data 2']],
            columnWidths: [20, 30] // Optional
        }
    ]
}
```

### PPTX Options

```javascript
{
    title: 'Presentation Title',
    outputPath: './output/file.pptx',
    slides: [
        { title: 'Title', subtitle: 'Subtitle', isTitleSlide: true },
        { title: 'Content Slide', content: 'Text content...' },
        { title: 'Bullets', bullets: ['Point 1', 'Point 2'] },
        { title: 'Table', table: { headers: [...], rows: [[...]] } }
    ]
}
```

---

## Accessing Branding Config

```javascript
const generator = require('./scripts/omega-document-generator');

// Get full branding config
const branding = generator.getBranding();
console.log(branding.colors.primary.hex); // #1B4F72

// Get specific color
const primaryColor = generator.getColor('primary', 'hex'); // #1B4F72
const criticalArgb = generator.getColor('critical', 'argb'); // FFCC0000
```

---

## CLI Usage

```bash
node scripts/omega-document-generator.js docx "Report Title"
node scripts/omega-document-generator.js pdf "Client Proposal" ./output/proposal.pdf
node scripts/omega-document-generator.js xlsx "Data Export"
node scripts/omega-document-generator.js pptx "Presentation"
```

---

## File Locations

| File | Purpose |
|------|---------|
| `assets/omega-branding.json` | Unified branding configuration |
| `assets/logos/omega-logo-full.png` | Full Omega logo |
| `assets/logos/omega-logo-alt.png` | Alternative logo |
| `scripts/omega-document-generator.js` | Unified generator script |
| `05_Deliverables_Final/` | Default output directory |

---

## Required Libraries

```bash
npm install docx pdfkit exceljs pptxgenjs
```

---

## Migration from Old Scripts

The following scripts are deprecated and replaced by `omega-document-generator.js`:

| Old Script | New Method |
|------------|------------|
| `generate_docx_report.js` | `createDocument('docx', ...)` |
| `generate_pdf_report.js` | `createDocument('pdf', ...)` |
| `generate_excel_report.js` | `createDocument('xlsx', ...)` |
| `generate_pptx_report.js` | `createDocument('pptx', ...)` |
| `generate_example_documents.js` | Use unified generator |

---

## File Naming Convention

```
Omega_[Deliverable]_[Date].[ext]

Examples:
Omega_Project_Report_2026-01-01.docx
Omega_Data_Export_2026-01-01.xlsx
Omega_Client_Proposal_2026-01-01.pdf
```
