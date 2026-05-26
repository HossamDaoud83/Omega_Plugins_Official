# Omega Document Generation Templates

**Location:** `/assets/`
**Purpose:** Centralized templates and standards for professional document generation
**Last Updated:** February 4, 2026 (v2.0 - Big 3 Caliber Enhancement)

---

## 🔒 Omega METHODOLOGY - MANDATORY VALIDATION FRAMEWORK

**ALL DOCUMENT GENERATION MUST USE Omega METHODOLOGY**

Before generating ANY documents (DOCX, XLSX, PDF, PPTX), you **MUST** call the Omega Methodology validation framework:

```javascript
const { validateOmegaMethodology } = require('./scripts/omega-methodology');
const { branding, template, big3 } = validateOmegaMethodology('DOCX');
```

### Why Omega Methodology is Mandatory

| Requirement | Enforced By Omega Methodology |
|-------------|---------------------------|
| ✅ Consistent Omega Branding | Loads unified `omega-branding.json` |
| ✅ Big 3 Consulting Quality | Loads McKinsey/BCG/Bain frameworks |
| ✅ Template Compliance | Validates document-specific templates |
| ✅ Asset Availability | Checks all required files exist |
| ✅ Professional Excellence | Ensures client-ready deliverables |

**📖 Complete Documentation:** [Omega_METHODOLOGY.md](../Omega_METHODOLOGY.md)

**⚠️ No Hardcoding Allowed:** All colors, fonts, layouts MUST come from assets folder, NOT hardcoded values.

---

## Overview

This folder contains Omega standard templates and Big 3 consulting frameworks for generating professional business documents at McKinsey, BCG, and Bain quality levels. These templates ensure consistency, quality, and brand compliance across all deliverables while incorporating best practices from top-tier strategy consulting firms.

---

## Available Templates

### 1. Omega DOCX Template Standards v1.0
**File:** [Omega_DOCX_Template_Standards_v1.0.json](Omega_DOCX_Template_Standards_v1.0.json)
**Type:** Word Document Generation
**Library:** `docx` (npm)
**Document Type:** Executive Business Documents (Feasibility Studies, Proposals, Reports)

**Includes:**
- Complete Omega color palette (8 colors with exact hex codes)
- Typography standards (H1-H3, body text, tables, captions)
- Table styling (Dark Teal headers, alternating rows)
- Key insight box design (minimalist left accent bar)
- Text normalization patterns (Unicode characters)
- Helper function code patterns
- Best practices and quality checklists

**Use For:**
- Client proposals
- Feasibility studies
- Technical reports
- Executive summaries
- Project documentation

**Reference Implementation:** `scripts/generate_mrcc_client_proposal_v3_FINAL.js`

---

### 2. Omega Excel Template Standards v1.0
**File:** [Omega_EXCEL_Template_Standards_v1.0.json](Omega_EXCEL_Template_Standards_v1.0.json)
**Type:** Excel Workbook Generation
**Library:** `exceljs` (npm)
**Document Type:** Financial Models, Data Analysis, Risk Registers, Project Plans

**Includes:**
- Omega color palette in ARGB format (Excel)
- Cell style definitions (headers, data, input, calculated)
- Number format patterns (currency, percent, date)
- Formula best practices and patterns
- Conditional formatting rules
- Chart styling standards
- Workbook structure templates
- Data validation protocols

**Use For:**
- Financial models (P&L, cash flow, IRR/NPV)
- Risk registers
- Project timelines and plans
- Data analysis workbooks
- Budget tracking

**Companion Document:** [EXCEL_GENERATION_PROMPT.md](EXCEL_GENERATION_PROMPT.md)

---

### 3. Excel Generation Prompt
**File:** [EXCEL_GENERATION_PROMPT.md](EXCEL_GENERATION_PROMPT.md)
**Type:** Prompt Template
**Purpose:** Guide for requesting Excel workbook generation from Claude

**Includes:**
- Quick start prompt template
- Data validation checklist
- Formula integrity requirements
- Cross-sheet reference mapping
- Quality verification checklist
- ExcelJS code patterns
- Common workbook structures

**How to Use:**
1. Copy the prompt template
2. Replace placeholders with project-specific details
3. Paste into Claude conversation
4. Follow validation protocol
5. Review generated workbook

---

## Big 3 Caliber Libraries

**NEW:** Professional consulting frameworks and visualization libraries based on McKinsey, BCG, and Bain best practices.

### 4. Big 3 Visualization Library
**File:** [BIG3_VISUALIZATION_LIBRARY.json](BIG3_VISUALIZATION_LIBRARY.json)
**Type:** Chart and Diagram Specifications
**Library:** `chart.js`, `chartjs-node-canvas`
**Purpose:** Generate McKinsey/BCG/Bain quality visualizations

**Includes:**
- 14 chart types (bar, line, waterfall, scatter, pie, combo, area, heatmap, gauge, etc.)
- 5 professional color palettes (categorical, sequential, diverging, traffic light, monochrome)
- 10 diagram templates (2x2 matrix, pyramid, funnel, process flow, org chart, timeline, stakeholder map, risk heat map, RACI, journey map)
- Icon library (40+ SVG icons for business concepts)
- Design principles (data-ink ratio, accessibility, storytelling)
- Typography standards for charts

**Key Features:**
- Answer-first chart titles (insight, not description)
- "So What?" principle - every chart must answer implications
- Color-coded by insight (green=positive, red=negative, orange=caution)
- Accessibility compliant (WCAG AA, colorblind-safe palettes)

**Use For:**
- Executive presentations
- Strategic analysis visualizations
- Financial performance charts
- Process diagrams and flowcharts
- Organizational charts
- Risk matrices and heat maps

**Companion Document:** [BIG3_CHART_GENERATION_GUIDE.md](BIG3_CHART_GENERATION_GUIDE.md)

---

### 5. Big 3 Consulting Frameworks
**File:** [BIG3_CONSULTING_FRAMEWORKS.json](BIG3_CONSULTING_FRAMEWORKS.json)
**Type:** Strategic & Analytical Frameworks
**Purpose:** Apply proven consulting methodologies to client engagements

**Includes:**

**Strategic Frameworks (10):**
- Porter's Five Forces (competitive analysis)
- BCG Matrix (portfolio management)
- McKinsey 7S Model (organizational alignment)
- GE-McKinsey Matrix (9-box portfolio)
- SWOT Analysis
- PESTEL Analysis
- Value Chain Analysis
- Ansoff Matrix (growth strategy)
- Blue Ocean Strategy
- Three Horizons Framework

**Financial Frameworks (6):**
- DCF Valuation
- IRR Calculation
- NPV Analysis
- Payback Period
- ROI Analysis
- Sensitivity Analysis

**Problem-Solving Frameworks (5):**
- MECE Principle (Mutually Exclusive, Collectively Exhaustive)
- Issue Trees
- Hypothesis-Driven Approach
- Pyramid Principle
- SCQA Framework (Situation-Complication-Question-Answer)

**Change Management (2):**
- ADKAR Model
- Kotter's 8-Step Process

**Use For:**
- Strategic planning engagements
- Market analysis and competitive positioning
- Financial modeling and valuation
- Organizational transformation
- Problem decomposition and analysis
- Executive presentations and reports

---

### 6. Big 3 Document Patterns
**File:** [BIG3_DOCUMENT_PATTERNS.json](BIG3_DOCUMENT_PATTERNS.json)
**Type:** Communication Frameworks & Writing Patterns
**Purpose:** Structure executive communications like top consulting firms

**Includes:**

**Fundamental Principles (6):**
- Answer First (lead with conclusion)
- So What? (always answer implications)
- Rule of Three (group ideas in threes)
- Action Orientation (verbs, not nouns)
- MECE Structure
- Evidence-Based (data supports claims)

**Document Types (5):**
- Executive Summary (1-3 pages, SCQA structure)
- Slide Decks (1-pager, pitch deck, steering committee, board presentation)
- Full Reports (20-50 pages, multi-chapter)
- Memos (1-2 pages, action-oriented)
- One-Sliders (single slide summaries)

**Narrative Patterns (4):**
- Situation-Complication-Resolution
- Problem-Solution-Benefit
- Before-After-Bridge
- 3-Act Structure

**Writing Best Practices:**
- Active voice (>80% of sentences)
- Short sentences (<20 words average)
- Specific over vague ("12% increase" not "significant growth")
- Action verbs ("recommend" not "recommendation is")
- Minimize jargon (explain technical terms)

**Chart Title Patterns:**
- BAD: "Revenue by Quarter"
- GOOD: "Q3 revenue declined 12%, driven by pricing pressure in EMEA"

**Use For:**
- Client proposals and reports
- Executive summaries
- Slide deck narratives
- Board presentations
- Strategic recommendations

---

### 7. Big 3 Chart Generation Guide
**File:** [BIG3_CHART_GENERATION_GUIDE.md](BIG3_CHART_GENERATION_GUIDE.md)
**Type:** Implementation Guide with Working Code
**Purpose:** Practical examples for generating and embedding charts in DOCX

**Includes:**
- Setup instructions (npm packages)
- 4 complete working examples:
  1. Revenue bar chart (horizontal bars with Omega branding)
  2. Timeline/Gantt chart (project schedules)
  3. 2x2 Risk Matrix (quadrant diagram)
  4. Waterfall chart (revenue bridges, variance analysis)
- DOCX integration code (ImageRun embedding)
- Chart sizing best practices (600-700px for Word)
- Troubleshooting guide (DPI, fonts, pixelation)
- Color palette usage examples

**Quick Start:**
```javascript
const { ChartJSNodeCanvas } = require('chartjs-node-canvas');
const chartBuffer = await createRevenueBarChart();

sections.push(
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new ImageRun({ data: chartBuffer, transformation: { width: 600, height: 375 } })]
    }),
    createFigureCaption('Revenue Concentration by Product Line')
);
```

**Use For:**
- Adding charts to Word documents programmatically
- Learning Chart.js configuration
- Troubleshooting chart generation issues
- Implementing Big 3 visualization standards

---

## Quick Reference

### Omega Color Palette

| Color | Hex | ARGB (Excel) | Usage |
|-------|-----|--------------|-------|
| **PRIMARY** | #1B4F72 | FF1B4F72 | Headings, key metrics |
| **DARK_TEAL** | #104E70 | FF104E70 | Table headers |
| **LIGHT_BLUE** | #9CC2E5 | FF9CC2E5 | Borders, accents |
| **INPUT_YELLOW** | #FFF9E6 | FFFFF9E6 | Input cells (Excel) |
| **CALCULATED_GREEN** | #E8F5E9 | FFE8F5E9 | Formula cells (Excel) |
| **LIGHT_BG** | #F8FBFD | FFF8FBFD | Alternating rows |

### Typography Quick Reference

| Element | DOCX Size | Excel Size | Weight | Color |
|---------|-----------|------------|--------|-------|
| **Title** | 16pt (32) | 16pt | Bold | PRIMARY |
| **H1** | 16pt (32) | 14pt | Bold | PRIMARY |
| **H2** | 14pt (28) | 11pt | Bold | PRIMARY |
| **H3** | 12pt (24) | 11pt | Bold | PRIMARY |
| **Body** | 12pt (24) | 10pt | Normal | BODY_TEXT |
| **Table Header** | 11pt (22) | 11pt | Bold | WHITE on DARK_TEAL |
| **Table Caption** | 10pt (20) | N/A | Bold | CAPTION_GRAY |
| **Figure Caption** | 10pt (20) | N/A | Italic | CAPTION_GRAY |
| **Reference** | 10pt (20) | 9pt | Italic | REFERENCE_BLUE |

---

## Usage Workflow

### For DOCX Documents

1. **Read Template**
   ```javascript
   const template = require('./assets/Omega_DOCX_Template_Standards_v1.0.json');
   ```

2. **Extract Constants**
   ```javascript
   const COLORS = {
       PRIMARY: template.colors.PRIMARY.docxFormat,
       DARK_TEAL: template.colors.DARK_TEAL.docxFormat,
       // ...
   };
   ```

3. **Copy Helper Functions**
   - `fixText()` - Text normalization
   - `createParagraph()` - Styled paragraphs
   - `createHeading()` - Headings with proper sizing
   - `createTable()` - Omega-branded tables
   - `createReference()` - Source citations
   - `createKeyInsightBox()` - Key insight boxes

4. **Generate Document**
   - Apply Omega formatting standards
   - Use justified text for body paragraphs
   - Include reference citations after tables
   - Add key insight boxes for critical findings

### For Excel Workbooks

1. **Read Prompt Template**
   - Open [EXCEL_GENERATION_PROMPT.md](EXCEL_GENERATION_PROMPT.md)
   - Copy "Quick Start Prompt Template"

2. **Prepare Data**
   - Identify all required data fields
   - Source from `session_state.json` or `project.json`
   - **NEVER use placeholder values**

3. **Request Generation**
   - Paste prompt to Claude
   - Specify workbook type
   - Provide data source files
   - Follow validation protocol

4. **Verify Output**
   - Open in Microsoft Excel
   - Check all formulas resolve
   - Verify Omega formatting applied
   - Test cross-sheet references

---

## Best Practices

### General
- ✅ Always apply Omega brand colors exactly
- ✅ Use consistent typography throughout
- ✅ Include source citations for data
- ✅ Test generated documents before delivery
- ❌ Never use placeholder values
- ❌ Don't deviate from Omega color palette
- ❌ Avoid mixing font sizes arbitrarily

### DOCX Specific
- Use justified alignment for body text
- Apply Unicode text normalization (`fixText()`)
- Include Key Insight boxes for critical findings (2-3 max per chapter)
- Add reference citations after tables/figures
- Use exact Omega colors (no variations)

### Excel Specific
- Color-code cells: Yellow=Input, Green=Calculated
- Document cross-sheet references with row numbers
- Use absolute references for assumption cells
- Test all formulas for errors
- Include Cover sheet with navigation for complex workbooks
- Protect formula cells from accidental editing

---

## Integration Examples: Combining Omega Templates with Big 3 Libraries

### Example 1: Strategic Analysis Report with Visualizations

**Objective:** Create a market analysis report with Porter's Five Forces framework and competitive landscape chart

**Steps:**

1. **Load Templates & Frameworks**
```javascript
const docxTemplate = require('./assets/Omega_DOCX_Template_Standards_v1.0.json');
const frameworks = require('./assets/BIG3_CONSULTING_FRAMEWORKS.json');
const vizLibrary = require('./assets/BIG3_VISUALIZATION_LIBRARY.json');
const { ChartJSNodeCanvas } = require('chartjs-node-canvas');

const COLORS = {
    PRIMARY: docxTemplate.colors.PRIMARY.docxFormat,
    DARK_TEAL: docxTemplate.colors.DARK_TEAL.docxFormat,
    SUCCESS: docxTemplate.colors.SUCCESS.docxFormat,
    WARNING: docxTemplate.colors.WARNING.docxFormat
};
```

2. **Apply Framework Analysis**
```javascript
// Use Porter's Five Forces from BIG3_CONSULTING_FRAMEWORKS.json
const portersFramework = frameworks.strategicFrameworks.find(f => f.id === 'porters-five-forces');

// Structure your analysis using the framework
const competitiveAnalysis = portersFramework.forces.map(force => ({
    force: force.name,
    rating: assessForceStrength(force), // Your analysis function
    implications: force.implications
}));
```

3. **Create Visualization**
```javascript
// Use color palette from BIG3_VISUALIZATION_LIBRARY.json
const chartColors = vizLibrary.colorPalettes.diverging.colors;

// Generate radar chart showing competitive forces
const chartBuffer = await createRadarChart({
    labels: competitiveAnalysis.map(a => a.force),
    data: competitiveAnalysis.map(a => a.rating),
    colors: chartColors
});
```

4. **Build Document with Omega Branding**
```javascript
// Use DOCX template helper functions
sections.push(
    createHeading('Competitive Landscape Analysis', 1),

    createParagraph('Our analysis of competitive forces reveals moderate industry attractiveness...'),

    // Add chart
    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new ImageRun({ data: chartBuffer, transformation: { width: 600, height: 400 } })]
    }),
    createFigureCaption('Porter\'s Five Forces analysis shows supplier power as primary concern'),

    // Add framework-based table
    ...createTable(
        ['Competitive Force', 'Strength', 'Key Implications'],
        competitiveAnalysis.map(a => [a.force, a.rating, a.implications]),
        'Competitive Force Assessment Summary'
    ),

    createKeyInsightBox('Supplier consolidation in raw materials market creates pricing pressure risk')
);
```

**Output:** Professional strategy report combining Omega branding, McKinsey framework, and data visualization

---

### Example 2: Executive Summary with SCQA Narrative Pattern

**Objective:** Write executive summary using Big 3 communication patterns

**Steps:**

1. **Load Document Patterns**
```javascript
const docPatterns = require('./assets/BIG3_DOCUMENT_PATTERNS.json');
const scqaPattern = docPatterns.narrativePatterns.find(p => p.id === 'scqa');
```

2. **Structure Content Using SCQA**
```javascript
const executiveSummary = {
    situation: "The port currently operates at 45% capacity utilization...",
    complication: "However, government plans for economic zone will triple demand by 2028...",
    question: "How can the port scale operations to meet projected demand while maintaining profitability?",
    answer: "We recommend a $24M phased expansion with BOT financing structure..."
};
```

3. **Apply Answer-First Principle**
```javascript
// From BIG3_DOCUMENT_PATTERNS.json fundamentalPrinciples
sections.push(
    createHeading('Executive Summary', 1),

    // Answer first (recommendation upfront)
    createParagraph('We recommend a phased $24M expansion using BOT financing, enabling 3x capacity increase with 18-month payback.'),

    // Situation
    createHeading('Current Situation', 2),
    createParagraph(executiveSummary.situation),

    // Complication
    createHeading('Key Challenge', 2),
    createParagraph(executiveSummary.complication),

    // Supporting evidence (Rule of Three)
    createHeading('Three Critical Success Factors', 2),
    createParagraph('1. Infrastructure readiness by Q4 2026\n2. Private partner selection by Q1 2027\n3. Regulatory approvals secured by Q2 2027')
);
```

**Output:** Executive summary following McKinsey/BCG communication standards

---

### Example 3: Financial Model with Big 3 Chart Integration

**Objective:** Create Excel financial model and embed visualizations in Word report

**Steps:**

1. **Generate Excel Model** (using Omega_EXCEL_Template_Standards)
```javascript
const ExcelJS = require('exceljs');
const excelTemplate = require('./assets/Omega_EXCEL_Template_Standards_v1.0.json');

// Create financial model with Omega formatting
const workbook = new ExcelJS.Workbook();
// ... (follow EXCEL_GENERATION_PROMPT.md)
await workbook.xlsx.writeFile('financial_model.xlsx');
```

2. **Extract Data for Visualization**
```javascript
// Read data from generated Excel
const sheet = workbook.getWorksheet('P&L');
const revenueData = sheet.getColumn('C').values.slice(5, 10);
```

3. **Create Waterfall Chart** (from BIG3_CHART_GENERATION_GUIDE.md)
```javascript
// Use waterfall chart pattern from guide
const waterfallChart = await createWaterfallChart({
    title: 'Revenue grew 23% YoY driven by container volume increase',
    categories: ['2025 Revenue', 'Volume Growth', 'Price Increase', 'New Services', 'FX Impact', '2026 Revenue'],
    values: [100, 15, 8, 5, -3, 125],
    colors: vizLibrary.colorPalettes.trafficLight
});
```

4. **Embed in Word Report**
```javascript
sections.push(
    createHeading('Financial Performance', 1),
    createParagraph('Revenue increased 23% year-over-year, primarily driven by container volume growth...'),

    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new ImageRun({ data: waterfallChart, transformation: { width: 650, height: 400 } })]
    }),
    createFigureCaption('Revenue Bridge Analysis (2025-2026)'),

    createReference('Source: Financial Model v2.0; Omega Analysis')
);
```

**Output:** Integrated deliverable with Excel model and Word report featuring professional charts

---

### Example 4: BCG Matrix Portfolio Analysis

**Objective:** Analyze product portfolio using BCG Matrix framework with visual output

**Steps:**

1. **Load Framework**
```javascript
const bcgMatrix = frameworks.strategicFrameworks.find(f => f.id === 'bcg-matrix');
```

2. **Classify Products**
```javascript
const products = [
    { name: 'Container Handling', marketShare: 0.35, growth: 0.12, quadrant: 'stars' },
    { name: 'Warehousing', marketShare: 0.25, growth: 0.05, quadrant: 'cash-cows' },
    { name: 'Logistics Tech', marketShare: 0.05, growth: 0.28, quadrant: 'question-marks' },
    { name: 'Legacy IT', marketShare: 0.08, growth: 0.02, quadrant: 'dogs' }
];
```

3. **Create 2x2 Matrix Visualization**
```javascript
// Use diagram template from BIG3_VISUALIZATION_LIBRARY.json
const matrixTemplate = vizLibrary.diagramTemplates.find(d => d.id === 'two-by-two-matrix');

const matrixChart = await create2x2Matrix({
    title: 'Portfolio concentrated in mature businesses; invest in Logistics Tech',
    xAxis: 'Relative Market Share',
    yAxis: 'Market Growth Rate',
    quadrants: bcgMatrix.quadrants,
    dataPoints: products,
    colors: matrixTemplate.colorMapping
});
```

4. **Add Strategic Recommendations**
```javascript
sections.push(
    createHeading('Portfolio Strategy', 1),

    new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new ImageRun({ data: matrixChart, transformation: { width: 600, height: 600 } })]
    }),
    createFigureCaption('BCG Matrix: Current Product Portfolio Positioning'),

    ...createTable(
        ['Product', 'Quadrant', 'Strategy', 'Investment Level'],
        products.map(p => {
            const quad = bcgMatrix.quadrants.find(q => q.name.toLowerCase() === p.quadrant);
            return [p.name, quad.name, quad.strategy, quad.cashFlow];
        }),
        'Strategic Recommendations by Product Portfolio Position'
    ),

    createKeyInsightBox('Divest Legacy IT and reinvest proceeds into Logistics Tech to capture high-growth segment')
);
```

**Output:** Strategic portfolio analysis combining framework, visualization, and Omega document standards

---

## Template Maintenance

### Version Control
- Templates use semantic versioning (MAJOR.MINOR.PATCH)
- Current version: **1.0.0**
- Breaking changes require MAJOR version bump
- New features require MINOR version bump
- Bug fixes require PATCH version bump

### Update Process
1. Identify need for update (new feature, bug fix, improvement)
2. Update JSON template file
3. Update version number
4. Add entry to `versionHistory` array
5. Update reference implementations if needed
6. Test with sample document generation
7. Document changes in this README

### Quality Assurance
- Test templates with new document generation
- Verify output matches Omega brand standards
- Check all helper function patterns work correctly
- Validate color codes display correctly in output
- Ensure backward compatibility where possible

---

## File Structure

```
assets/
├── README.md                                    (This file - Navigation & Documentation)
│
├── Omega CORE TEMPLATES
│   ├── Omega_DOCX_Template_Standards_v1.0.json   (Word document template)
│   ├── Omega_EXCEL_Template_Standards_v1.0.json  (Excel workbook template)
│   └── EXCEL_GENERATION_PROMPT.md              (Excel generation guide)
│
├── BIG 3 CALIBER LIBRARIES (McKinsey/BCG/Bain Standards)
│   ├── BIG3_VISUALIZATION_LIBRARY.json         (Charts & diagrams specifications)
│   ├── BIG3_CONSULTING_FRAMEWORKS.json         (Strategic frameworks & methodologies)
│   ├── BIG3_DOCUMENT_PATTERNS.json             (Communication patterns & writing standards)
│   └── BIG3_CHART_GENERATION_GUIDE.md          (Implementation guide with code examples)
│
└── SUPPLEMENTARY
    └── DOCUMENT_ENHANCEMENTS_SUMMARY.md        (Table/figure caption implementation)
```

---

## Related Files

### Reference Implementations
- **DOCX**: `scripts/generate_mrcc_client_proposal_v3_FINAL.js`
- **Excel**: (To be created as needed per project)

### Example Outputs
- **DOCX**: `05_Deliverables_Final/MRCC_Client_Proposal_Beni_Suef_BOT_v3_FINAL_2026-02-04.docx`
- **Excel**: (To be created as needed per project)

---

## Quick Navigation Guide

### I Need To...

**Generate a Word document with Omega branding**
→ Use [Omega_DOCX_Template_Standards_v1.0.json](Omega_DOCX_Template_Standards_v1.0.json)
→ Reference implementation: `scripts/generate_mrcc_client_proposal_v3_FINAL.js`

**Create an Excel financial model**
→ Use [Omega_EXCEL_Template_Standards_v1.0.json](Omega_EXCEL_Template_Standards_v1.0.json)
→ Follow guide: [EXCEL_GENERATION_PROMPT.md](EXCEL_GENERATION_PROMPT.md)

**Add charts/visualizations to documents**
→ Review chart types: [BIG3_VISUALIZATION_LIBRARY.json](BIG3_VISUALIZATION_LIBRARY.json)
→ Implementation guide: [BIG3_CHART_GENERATION_GUIDE.md](BIG3_CHART_GENERATION_GUIDE.md)
→ See Example 1 & Example 3 in Integration Examples above

**Apply a strategic framework (Porter's, BCG, SWOT)**
→ Framework library: [BIG3_CONSULTING_FRAMEWORKS.json](BIG3_CONSULTING_FRAMEWORKS.json)
→ See Example 4 (BCG Matrix) in Integration Examples above

**Write an executive summary or client report**
→ Communication patterns: [BIG3_DOCUMENT_PATTERNS.json](BIG3_DOCUMENT_PATTERNS.json)
→ Follow SCQA structure (Situation-Complication-Question-Answer)
→ See Example 2 in Integration Examples above

**Understand table/figure captions and repeating headers**
→ Implementation guide: [DOCUMENT_ENHANCEMENTS_SUMMARY.md](../05_Deliverables_Final/DOCUMENT_ENHANCEMENTS_SUMMARY.md)

---

## Library Version History

### v2.0 - Big 3 Caliber Enhancement (February 4, 2026)
**Major Addition:** McKinsey, BCG, and Bain best practices integration

**New Files:**
- BIG3_VISUALIZATION_LIBRARY.json - 14 chart types, 5 color palettes, 10 diagram templates
- BIG3_CONSULTING_FRAMEWORKS.json - 23 frameworks (strategic, financial, problem-solving)
- BIG3_DOCUMENT_PATTERNS.json - Communication frameworks and writing best practices
- BIG3_CHART_GENERATION_GUIDE.md - Working code examples for chart generation

**Enhancements:**
- Integration examples showing combined usage of Omega templates + Big 3 libraries
- Color palette alignment between Omega branding and Big 3 standards
- Chart.js + DOCX integration patterns
- SCQA narrative structure templates
- Answer-first communication principles

**Impact:**
- Elevates all Omega deliverables to top-tier consulting firm quality
- Provides reusable frameworks for strategic analysis
- Enables data visualization in Word documents
- Standardizes executive communication patterns

### v1.0 - Initial Release (January 2026)
- Omega_DOCX_Template_Standards_v1.0.json
- Omega_EXCEL_Template_Standards_v1.0.json
- EXCEL_GENERATION_PROMPT.md

---

## Support & Questions

For questions about template usage or to report issues:

1. **Omega Document Templates:** Check the JSON template file for detailed specifications
2. **Big 3 Libraries:** Review the specific JSON/MD file for your use case
3. **Integration:** See Integration Examples section above
4. **Implementation:** Review reference code in `scripts/` folder
5. **Examples:** Consult example output documents in `05_Deliverables_Final/`

---

**Document Classification:** INTERNAL USE ONLY
**Prepared by:** Omega Consulting - Document Engineering & Strategy Team
**Project:** Beni Suef Dry Port BOT Advisory (Project P005)
**Template Version:** 2.0 (Big 3 Caliber Enhancement)
**Date:** February 4, 2026
