# Omega METHODOLOGY

**Universal Document Generation Framework**
**Version:** 1.0.0
**Created:** February 4, 2026
**Status:** Production Ready

---

## Overview

The **Omega Methodology** is a mandatory validation and quality assurance framework that ensures ALL document generation across Omega Consulting engagements meets:

1. ✅ **Consistent Omega Branding** - Unified colors, fonts, logos, and layouts
2. ✅ **Big 3 Consulting Quality** - McKinsey, BCG, and Bain-level standards
3. ✅ **Template Compliance** - Standardized structures and formatting
4. ✅ **Professional Excellence** - Client-ready deliverables every time

---

## Why Omega Methodology Exists

### The Problem

Without a unified framework:
- ❌ Inconsistent branding across documents (different colors, fonts, layouts)
- ❌ Quality varies by consultant or project
- ❌ Templates not reused, leading to reinvention
- ❌ Missing Big 3 caliber frameworks and visualizations
- ❌ No validation before generation (errors discovered after delivery)

### The Solution

The Omega Methodology **forces** every document generation script to:
1. Load standardized Omega branding from `assets/omega-branding.json`
2. Apply document-type-specific templates (DOCX, XLSX, PDF, PPTX)
3. Access Big 3 consulting frameworks and visualization patterns
4. Pass validation checks before generating ANY files

---

## Mandatory Usage

### Rule #1: Every Generation Script Must Validate First

```javascript
// WRONG - Direct generation without validation
const doc = new Document({ ... });

// CORRECT - Omega Methodology validation FIRST
const { validateOmegaMethodology } = require('./omega-methodology');
const { branding, template, big3 } = validateOmegaMethodology('DOCX');

// Now use loaded assets for generation
const doc = new Document({ ... });
```

### Rule #2: Assets Folder is Single Source of Truth

All document generation **MUST** reference the `assets/` folder:

```
assets/
├── omega-branding.json                        ← Unified Omega branding
├── Omega_DOCX_Template_Standards_v1.0.json    ← Word templates
├── Omega_EXCEL_Template_Standards_v1.0.json   ← Excel templates
├── BIG3_VISUALIZATION_LIBRARY.json          ← Chart specifications
├── BIG3_CONSULTING_FRAMEWORKS.json          ← Strategic frameworks
├── BIG3_DOCUMENT_PATTERNS.json              ← Writing patterns
├── BIG3_CHART_GENERATION_GUIDE.md           ← Chart.js guide
└── logos/
    ├── omega-logo-full.png
    └── omega-logo-alt.png
```

**NO hardcoding colors, fonts, or layouts.** Use the assets folder.

---

## How to Use Omega Methodology

### Step 1: Import the Module

```javascript
const { validateOmegaMethodology } = require('./omega-methodology');
```

### Step 2: Validate Before Generation

```javascript
// For DOCX (Word documents)
const { branding, template, big3 } = validateOmegaMethodology('DOCX');

// For XLSX (Excel workbooks)
const { branding, template, big3 } = validateOmegaMethodology('XLSX');

// For PDF (PDF documents)
const { branding, template, big3 } = validateOmegaMethodology('PDF');

// For PPTX (PowerPoint presentations)
const { branding, template, big3 } = validateOmegaMethodology('PPTX');
```

### Step 3: Use Loaded Assets

```javascript
// Access Omega colors
const COLORS = {
    PRIMARY: branding.colors.primary.hexNoHash,        // 1B4F72
    DARK_TEAL: '#104E70',
    CAPTION_GRAY: branding.colors.gray.hexNoHash,      // 666666
    BODY_TEXT: branding.colors.bodyText.hexNoHash      // 333333
};

// Access typography
const FONTS = branding.typography.fonts;  // { heading: 'Arial Black', body: 'Arial' }
const SIZES = branding.typography.sizes;  // { title: 24pt, heading1: 18pt, ... }

// Access Big 3 frameworks
const portersForces = big3.frameworks.strategic.portersFiveForces;
const bcgMatrix = big3.frameworks.strategic.bcgMatrix;
const chartPalettes = big3.visualization.colorPalettes.categorical;

// Access template standards
const tableStyles = template.tables;      // For DOCX
const cellStyles = template.cellStyles;   // For XLSX
```

---

## Complete Example: DOCX Generation

```javascript
/**
 * generate_client_proposal.js
 * Generates client proposal using Omega Methodology
 */

const { Document, Paragraph, TextRun, Table, TableRow, TableCell } = require('docx');
const fs = require('fs').promises;
const { validateOmegaMethodology, getColorPalette, getLogoPath } = require('./omega-methodology');

// ═══════════════════════════════════════════════════════════════════
// STEP 1: VALIDATE Omega METHODOLOGY
// ═══════════════════════════════════════════════════════════════════

const { branding, template, big3 } = validateOmegaMethodology('DOCX');

// ═══════════════════════════════════════════════════════════════════
// STEP 2: LOAD STANDARDIZED ASSETS
// ═══════════════════════════════════════════════════════════════════

const COLORS = getColorPalette(branding);
const SIZES = branding.typography.sizes;
const LOGO_PATH = getLogoPath(branding);

// ═══════════════════════════════════════════════════════════════════
// STEP 3: HELPER FUNCTIONS (Using Template Standards)
// ═══════════════════════════════════════════════════════════════════

let tableCounter = 0;

function createTableCaption(text) {
    tableCounter++;
    return new Paragraph({
        spacing: { before: 200, after: 100 },
        children: [
            new TextRun({
                text: `Table ${tableCounter}: ${text}`,
                bold: true,
                size: SIZES.small.docxHalfPt,
                color: COLORS.CAPTION_GRAY,
                font: 'Arial'
            })
        ]
    });
}

function createTable(headers, rows) {
    const headerCells = headers.map(h =>
        new TableCell({
            children: [new Paragraph({
                children: [new TextRun({ text: h, bold: true, color: 'FFFFFF' })]
            })],
            shading: { fill: COLORS.DARK_TEAL }
        })
    );

    const dataRows = rows.map(row =>
        new TableRow({
            children: row.map(cell =>
                new TableCell({
                    children: [new Paragraph({ text: cell })]
                })
            )
        })
    );

    return new Table({
        rows: [
            new TableRow({ children: headerCells, tableHeader: true }),
            ...dataRows
        ]
    });
}

// ═══════════════════════════════════════════════════════════════════
// STEP 4: GENERATE DOCUMENT
// ═══════════════════════════════════════════════════════════════════

async function generateProposal() {
    const sections = [];

    // Add title
    sections.push(
        new Paragraph({
            text: 'Strategic Advisory Proposal',
            heading: HeadingLevel.HEADING_1
        })
    );

    // Add table with caption
    sections.push(
        createTableCaption('Engagement Overview'),
        createTable(
            ['Item', 'Details'],
            [
                ['Client', 'Example Corp'],
                ['Duration', '12 weeks']
            ]
        )
    );

    // Create document
    const doc = new Document({
        sections: [{ children: sections }]
    });

    // Save
    await doc.save('proposal.docx');
    console.log('✅ Proposal generated with Omega Methodology compliance');
}

generateProposal();
```

---

## Complete Example: XLSX Generation

```javascript
/**
 * generate_financial_model.js
 * Generates Excel workbook using Omega Methodology
 */

const ExcelJS = require('exceljs');
const { validateOmegaMethodology } = require('./omega-methodology');

// ═══════════════════════════════════════════════════════════════════
// STEP 1: VALIDATE Omega METHODOLOGY
// ═══════════════════════════════════════════════════════════════════

const { branding, template, big3 } = validateOmegaMethodology('XLSX');

// ═══════════════════════════════════════════════════════════════════
// STEP 2: LOAD COLORS AND STYLES
// ═══════════════════════════════════════════════════════════════════

const COLORS = {
    PRIMARY: branding.colors.primary.argb,
    DARK_TEAL: template.colors.DARK_TEAL.argb,
    CAPTION_GRAY: template.colors.CAPTION_GRAY.argb,
    WHITE: template.colors.WHITE.argb
};

const CELL_STYLES = template.cellStyles;

// ═══════════════════════════════════════════════════════════════════
// STEP 3: GENERATE WORKBOOK
// ═══════════════════════════════════════════════════════════════════

async function generateFinancialModel() {
    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'Omega Consulting';
    workbook.created = new Date();

    const sheet = workbook.addWorksheet('Financial Model');

    // Apply table caption style
    sheet.getCell('A1').value = 'Table 1: Revenue Projections';
    sheet.getCell('A1').font = CELL_STYLES.tableCaptionRow.font;
    sheet.getCell('A1').alignment = CELL_STYLES.tableCaptionRow.alignment;

    // Apply header style
    sheet.getCell('A2').value = 'Year';
    sheet.getCell('A2').font = CELL_STYLES.tableHeader.font;
    sheet.getCell('A2').fill = CELL_STYLES.tableHeader.fill;

    // Save workbook
    await workbook.xlsx.writeFile('financial_model.xlsx');
    console.log('✅ Financial model generated with Omega Methodology compliance');
}

generateFinancialModel();
```

---

## What Omega Methodology Validates

### Asset File Checks

| Asset Category | Files Validated | Purpose |
|----------------|-----------------|---------|
| **Core Templates** | `omega-branding.json`, `Omega_DOCX_Template_Standards_v1.0.json`, `Omega_EXCEL_Template_Standards_v1.0.json` | Branding and template consistency |
| **Big 3 Libraries** | `BIG3_VISUALIZATION_LIBRARY.json`, `BIG3_CONSULTING_FRAMEWORKS.json`, `BIG3_DOCUMENT_PATTERNS.json`, `BIG3_CHART_GENERATION_GUIDE.md` | McKinsey/BCG/Bain quality frameworks |
| **Logos** | `logos/omega-logo-full.png` | Brand identity assets |

### Branding Element Checks

| Element | Validation | Error if Missing |
|---------|------------|------------------|
| Color Palette | `branding.colors.primary` exists | ❌ "Invalid branding: Missing color palette" |
| Typography | `branding.typography.fonts` exists | ❌ "Invalid branding: Missing typography standards" |
| Logos | `branding.assets.logos` exists | ❌ "Invalid branding: Missing logo configuration" |

---

## Validation Output

When you call `validateOmegaMethodology()`, you'll see:

```
═══════════════════════════════════════════════════════════════════
  Omega METHODOLOGY - Document Generation Validation
═══════════════════════════════════════════════════════════════════

📄 Document Type: Microsoft Word Document (DOCX)
🔧 Methodology Version: 1.0.0
📁 Assets Folder: /path/to/project/assets

🔍 Step 1/4: Validating required asset files...
✅ All required assets found

🎨 Step 2/4: Loading Omega branding configuration...
✅ Branding loaded (v1.0.0)

📋 Step 3/4: Loading template standards...
✅ Template standards loaded (v1.1.0)

🏆 Step 4/4: Loading Big 3 Caliber Libraries...
✅ Big 3 frameworks and patterns loaded

═══════════════════════════════════════════════════════════════════
  ✅ Omega METHODOLOGY VALIDATION COMPLETE
  Ready to generate client-ready deliverables
═══════════════════════════════════════════════════════════════════
```

---

## Error Handling

### Missing Asset Files

If any required asset is missing:

```
❌ Omega METHODOLOGY VALIDATION FAILED

Missing required assets:
  - BIG3_VISUALIZATION_LIBRARY.json
  - logos/omega-logo-full.png

All document generation must use the assets folder for consistency.
```

**Fix:** Ensure all files in `REQUIRED_ASSETS` exist in the assets folder.

### Invalid Document Type

```javascript
validateOmegaMethodology('INVALID');
// ❌ Error: Invalid document type: INVALID. Must be one of: DOCX, XLSX, PDF, PPTX
```

**Fix:** Use one of the supported document types: `DOCX`, `XLSX`, `PDF`, `PPTX`.

---

## Helper Functions

### `getColorPalette(branding)`

Returns Omega color palette in hex format:

```javascript
const { getColorPalette } = require('./omega-methodology');
const colors = getColorPalette(branding);

console.log(colors.PRIMARY);       // '1B4F72'
console.log(colors.CAPTION_GRAY);  // '666666'
console.log(colors.CRITICAL);      // 'CC0000'
```

### `getTypography(branding)`

Returns typography standards:

```javascript
const { getTypography } = require('./omega-methodology');
const typo = getTypography(branding);

console.log(typo.fonts.heading);   // 'Arial Black'
console.log(typo.sizes.title.pt);  // 24
```

### `getLogoPath(branding)`

Returns absolute path to Omega logo:

```javascript
const { getLogoPath } = require('./omega-methodology');
const logoPath = getLogoPath(branding);

// Use in document generation
const logoBuffer = fs.readFileSync(logoPath);
```

---

## Integration with Existing Scripts

### Before Omega Methodology

```javascript
// Old script with hardcoded values
const COLORS = {
    PRIMARY: '1B4F72',
    BODY: '333333'
};

const doc = new Document({ ... });
```

### After Omega Methodology

```javascript
// New script using Omega Methodology
const { validateOmegaMethodology, getColorPalette } = require('./omega-methodology');

const { branding, template, big3 } = validateOmegaMethodology('DOCX');
const COLORS = getColorPalette(branding);

const doc = new Document({ ... });
```

---

## Benefits

| Benefit | Impact |
|---------|--------|
| **Consistent Branding** | All deliverables use same colors, fonts, logos |
| **Quality Assurance** | Big 3 frameworks ensure consulting excellence |
| **Error Prevention** | Validation catches missing assets before generation |
| **Reusability** | Templates are reused, not reinvented |
| **Maintainability** | Change branding once in assets, applies everywhere |
| **Professionalism** | Client-ready deliverables every time |
| **Scalability** | Easy to add new document types or templates |

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| **1.0.0** | 2026-02-04 | Initial Omega Methodology framework created |

---

## Related Files

| File | Location | Purpose |
|------|----------|---------|
| **Omega Methodology Script** | `scripts/omega-methodology.js` | Validation framework module |
| **Omega Branding** | `assets/omega-branding.json` | Unified branding configuration |
| **DOCX Template** | `assets/Omega_DOCX_Template_Standards_v1.0.json` | Word document standards |
| **XLSX Template** | `assets/Omega_EXCEL_Template_Standards_v1.0.json` | Excel workbook standards |
| **Big 3 Visualization** | `assets/BIG3_VISUALIZATION_LIBRARY.json` | Chart specifications |
| **Big 3 Frameworks** | `assets/BIG3_CONSULTING_FRAMEWORKS.json` | Strategic frameworks |
| **Big 3 Patterns** | `assets/BIG3_DOCUMENT_PATTERNS.json` | Writing patterns |
| **Chart Guide** | `assets/BIG3_CHART_GENERATION_GUIDE.md` | Chart.js implementation |
| **Assets README** | `assets/README.md` | Complete assets documentation |

---

## Support

For questions or issues with Omega Methodology:

1. Check `assets/README.md` for asset documentation
2. Review template standards files in `assets/`
3. See example scripts in `scripts/generate_*.js`

---

**Document Classification:** INTERNAL USE ONLY
**Prepared by:** Omega Consulting - Document Engineering Team
**Version:** 1.0.0
**Date:** February 4, 2026
