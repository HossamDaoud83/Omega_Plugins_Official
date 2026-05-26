# Excel Workbook Generation Prompt - Omega Standards

**Template Version:** 1.0.0
**Last Updated:** February 4, 2026
**Standards Reference:** [Omega_EXCEL_Template_Standards_v1.0.json](Omega_EXCEL_Template_Standards_v1.0.json)

Use this prompt template when requesting Claude to generate Excel workbooks for Omega consulting engagements.

---

## Quick Start Prompt Template

```
Generate {WORKBOOK_NAME} Excel workbook for {PROJECT_NAME}.

CRITICAL REQUIREMENTS:

1. **PRE-GENERATION DATA VALIDATION**
   - Before generating ANY workbook, list ALL data fields required
   - Cross-reference each field against session_state.json and project.json
   - Identify ANY missing values and ASK ME before proceeding
   - Do NOT use placeholder values, assumptions, or $0 defaults

2. **Omega FORMATTING STANDARDS**
   - Apply Omega Excel Template Standards v1.0
   - Colors: PRIMARY (#1B4F72), DARK_TEAL (#104E70) for headers
   - Input cells: Yellow background (#FFF9E6)
   - Calculated cells: Light green background (#E8F5E9)
   - Table headers: Dark Teal background, white text, 11pt bold
   - Data cells: 10pt Arial, appropriate number formatting

3. **FORMULA INTEGRITY**
   - Use HARDCODED values from data source for Year 1 base values
   - Use RELATIVE formulas (e.g., `=ROUND(C5*1.25,0)`) for growth calculations
   - NEVER reference assumption sheet cells by row number without documentation
   - Test ALL cross-sheet references match actual row numbers
   - Document the exact row number for each referenced value

4. **CROSS-SHEET REFERENCE MAPPING**
   Before writing formulas, create a reference map:
   - Sheet Name → Row Number → What it contains
   - Example: "Enrollment Projections!C15" → Grand Total Enrollment Year 1
   - Use absolute references: ='SheetName'!$B$5

5. **VALIDATION CHECKLIST (Run Before Output)**
   □ All cells have values (no blanks where data expected)
   □ All formulas resolve (no #VALUE!, #REF!, #N/A errors)
   □ Cross-sheet references verified against actual row positions
   □ Named ranges not used (they cause issues)
   □ All monetary values from data source, not assumptions
   □ Input cells are yellow, calculated cells are light green
   □ Headers use Omega Dark Teal color

6. **MISSING DATA PROTOCOL**
   If ANY of these are missing or unclear, STOP and ask me:
   - Base year values for calculations
   - Growth rates or percentages
   - Cost items or revenue streams
   - Specific assumptions needed for the model

7. **OUTPUT VERIFICATION**
   After generating, provide:
   - List of all sheets created with descriptions
   - Key values populated in each sheet
   - All formulas that reference other sheets
   - Confirmation all data sourced from session_state.json/project.json
   - Cross-sheet reference map

WORKBOOK REQUESTED: {Specify workbook name and purpose}
PROJECT: {Project name and reference}
DATA SOURCE: session_state.json and project.json
```

---

## Omega Excel Standards Reference

All workbooks must follow **Omega Excel Template Standards v1.0**. Key standards:

### Color Palette (ARGB Format for ExcelJS)

| Color | ARGB | Usage |
|-------|------|-------|
| **PRIMARY** | FF1B4F72 | Section headers, key metrics |
| **DARK_TEAL** | FF104E70 | Table headers, navigation |
| **LIGHT_BLUE** | FF9CC2E5 | Borders, subtle elements |
| **INPUT_YELLOW** | FFFFF9E6 | Input cells (user edits) |
| **CALCULATED_GREEN** | FFE8F5E9 | Calculated cells (formulas) |
| **LIGHT_BG** | FFF8FBFD | Alternating rows |

### Typography Standards

| Element | Font | Size | Weight | Color |
|---------|------|------|--------|-------|
| **Workbook Title** | Arial | 16pt | Bold | PRIMARY |
| **Section Header** | Arial | 14pt | Bold | WHITE (on DARK_TEAL bg) |
| **Table Header** | Arial | 11pt | Bold | WHITE (on DARK_TEAL bg) |
| **Data Cells** | Arial | 10pt | Normal | BODY_TEXT (#333333) |
| **Notes** | Arial | 9pt | Italic | Gray (#666666) |

### Cell Style Guide

| Style | Background | Border | Number Format | Usage |
|-------|-----------|--------|---------------|-------|
| **Input Cell** | Yellow (#FFF9E6) | Orange | Custom | User assumptions |
| **Calculated Cell** | Light Green (#E8F5E9) | Gray | Custom | Formula results |
| **Data Cell** | White | Thin gray | Custom | Display values |
| **Total Row** | Light BG (#F8FBFD) | Double top | Bold | Subtotals, totals |
| **Header Cell** | Dark Teal (#104E70) | Thin | N/A | Column headers |

### Number Formats

| Type | Format | Example |
|------|--------|---------|
| **Integer** | `#,##0` | 1,234 |
| **Currency EGP** | `#,##0 "EGP"` | 1,234 EGP |
| **Currency USD** | `"$"#,##0` | $1,234 |
| **Percent** | `0%` or `0.0%` | 25% or 25.5% |
| **Date** | `dd/mm/yyyy` | 04/02/2026 |

---

## Standard Workbook Structure

### 1. Cover Sheet
- Workbook title (16pt, PRIMARY, bold, centered)
- Project name and reference
- Client name
- Date and version
- Table of contents with hyperlinks
- "CONFIDENTIAL" label
- "Prepared by Omega Consulting"

### 2. Assumptions Sheet
- Key assumptions (growth rates, inflation, etc.)
- Financial parameters (discount rate, tax rate)
- Project-specific variables
- Data sources & references
- **All input cells in YELLOW**

### 3. Data/Analysis Sheets
- Section header with sheet title (Dark Teal background)
- Table headers (Dark Teal background, white text, bold)
- Data rows with calculations
- Total/summary rows (bold, double border top)
- Notes section at bottom (9pt, italic, gray)

### 4. Summary/Dashboard Sheet
- Key Performance Indicators (KPIs)
- Visual summary (charts, conditional formatting)
- Links to detailed sheets

---

## Formula Best Practices

### Types of Formulas

1. **Hardcoded Base Values**
   ```
   // Year 1 values from data source
   sheet.getCell('C5').value = 200;  // From session_state.json
   ```

2. **Relative Growth Formulas**
   ```
   // Year 2 = Year 1 * 1.25
   sheet.getCell('D5').value = {formula: '=ROUND(C5*1.25,0)'};
   ```

3. **Cross-Sheet References (ABSOLUTE)**
   ```
   // Reference to Assumptions sheet
   sheet.getCell('C10').value = {formula: "='Assumptions'!$B$5*C5"};
   ```

4. **Sum/Total Formulas**
   ```
   // Sum range
   sheet.getCell('C15').value = {formula: '=SUM(C5:C14)'};
   ```

### Formula Documentation

Always document cross-sheet references:
```javascript
// REFERENCE MAP:
// 'Assumptions'!B5 = Discount Rate (25%)
// 'Assumptions'!B8 = Tax Rate (22.5%)
// 'Enrollment'!C15 = Total Students Year 1
```

---

## Data Validation Protocol

### Before Generation

1. **Identify Required Data**
   - List all fields needed for workbook
   - Example: enrollment numbers, tuition rates, cost items

2. **Source from Files**
   ```javascript
   // Read session_state.json
   const sessionState = JSON.parse(fs.readFileSync('session_state.json'));

   // Read project.json
   const projectData = JSON.parse(fs.readFileSync('project.json'));

   // Extract required values
   const year1Enrollment = sessionState.enrollment.year1;
   const tuitionRate = projectData.fees.tuition;
   ```

3. **Check for Missing Data**
   - If ANY value is undefined, null, or missing
   - STOP and ASK USER
   - NEVER use placeholder values

### After Generation

1. **Open in Excel**
   - Verify all formulas resolve
   - Check for #VALUE!, #REF!, #N/A errors

2. **Verify Formatting**
   - Input cells are yellow
   - Calculated cells are light green
   - Headers are Dark Teal with white text
   - Numbers formatted correctly

3. **Test Cross-Sheet References**
   - Click cells with cross-sheet formulas
   - Verify referenced cells contain expected values

---

## Common Workbook Types

### Financial Model
**Sheets:** Cover, Assumptions, Revenue Model, Cost Structure, Cash Flow, P&L, Balance Sheet, Scenarios, Summary
**Features:** Multi-year projections, IRR/NPV, sensitivity analysis

### Risk Register
**Sheets:** Cover, Risk List, Risk Matrix, Mitigation Plans, Risk Timeline
**Features:** Risk scoring, heat map, status tracking

### Project Plan
**Sheets:** Cover, Timeline, Milestones, Resources, Budget, Status
**Features:** Gantt chart, resource allocation, progress tracking

### Data Analysis
**Sheets:** Cover, Raw Data, Cleaned Data, Analysis, Visualizations, Summary
**Features:** Pivot tables, charts, statistical analysis

---

## ExcelJS Code Patterns

### Create Workbook
```javascript
const ExcelJS = require('exceljs');
const workbook = new ExcelJS.Workbook();
workbook.creator = 'Omega Consulting';
workbook.created = new Date();
```

### Add Sheet with Omega Styling
```javascript
const sheet = workbook.addWorksheet('Sheet Name', {
  properties: {tabColor: {argb: 'FF1B4F72'}},
  pageSetup: {paperSize: 9, orientation: 'landscape'}
});
```

### Style Header Cell (Dark Teal)
```javascript
const headerCell = sheet.getCell('A1');
headerCell.value = 'Description';
headerCell.font = {name: 'Arial', size: 11, bold: true, color: {argb: 'FFFFFFFF'}};
headerCell.fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'FF104E70'}};
headerCell.alignment = {horizontal: 'center', vertical: 'middle'};
headerCell.border = {
  top: {style: 'thin', color: {argb: 'FF9CC2E5'}},
  bottom: {style: 'thin', color: {argb: 'FF9CC2E5'}},
  left: {style: 'thin', color: {argb: 'FF9CC2E5'}},
  right: {style: 'thin', color: {argb: 'FF9CC2E5'}}
};
```

### Style Input Cell (Yellow)
```javascript
const inputCell = sheet.getCell('B5');
inputCell.value = 0.25;  // From data source
inputCell.numFmt = '0%';
inputCell.font = {name: 'Arial', size: 10};
inputCell.fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'FFFFF9E6'}};
inputCell.alignment = {horizontal: 'right', vertical: 'middle'};
inputCell.border = {
  top: {style: 'thin', color: {argb: 'FFFF8C00'}},
  bottom: {style: 'thin', color: {argb: 'FFFF8C00'}},
  left: {style: 'thin', color: {argb: 'FFFF8C00'}},
  right: {style: 'thin', color: {argb: 'FFFF8C00'}}
};
```

### Add Formula
```javascript
sheet.getCell('C10').value = {formula: '=ROUND(B10*1.25, 0)'};
sheet.getCell('C10').numFmt = '#,##0';
```

### Save Workbook
```javascript
await workbook.xlsx.writeFile('output.xlsx');
console.log('Workbook generated successfully!');
```

---

## Quality Checklist

### Before Submitting Workbook

- [ ] All required data sourced (no placeholders)
- [ ] All formulas resolve (no errors)
- [ ] Input cells are yellow background
- [ ] Calculated cells are light green background
- [ ] Headers use Dark Teal background (#104E70)
- [ ] Currency values formatted correctly
- [ ] Cross-sheet references documented
- [ ] Cover sheet includes navigation links
- [ ] Notes/instructions provided for complex sections
- [ ] Workbook opens successfully in Microsoft Excel

---

## Data Sources

All data should be sourced from:

1. **Primary**: `session_state.json` (project root)
2. **Secondary**: `project.json` (engagement configuration)
3. **Tertiary**: User-provided data files
4. **Fallback**: **ASK USER** - never assume or use placeholders

---

## Usage Instructions

1. Copy the **Quick Start Prompt Template** above
2. Replace `{WORKBOOK_NAME}` with specific workbook (e.g., "Financial Model", "Risk Register")
3. Replace `{PROJECT_NAME}` with actual project name
4. Paste into Claude conversation
5. Claude will:
   - Validate data requirements
   - Ask for missing data
   - Generate workbook with Omega standards
   - Provide verification checklist
6. Review generated workbook in Excel
7. Confirm all formatting and formulas are correct

---

## Related Files

- **JSON Standards**: [Omega_EXCEL_Template_Standards_v1.0.json](Omega_EXCEL_Template_Standards_v1.0.json)
- **DOCX Standards**: [Omega_DOCX_Template_Standards_v1.0.json](Omega_DOCX_Template_Standards_v1.0.json)

---

## Example Request

```
Generate Financial Model Excel workbook for Beni Suef Dry Port BOT Advisory.

CRITICAL REQUIREMENTS:
[Follow all requirements from Quick Start template above]

WORKBOOK REQUESTED: Financial Model with 10-year projections
PROJECT: Beni Suef Dry Port & Container Terminal BOT Advisory
DATA SOURCE: session_state.json and project.json

Sheets needed:
1. Cover - Project info and navigation
2. Assumptions - All input parameters (yellow cells)
3. Revenue Model - Service line revenues
4. Cost Structure - OPEX breakdown
5. Cash Flow - 10-year cash flow analysis
6. P&L - Profit & Loss statement
7. IRR/NPV - Investment returns analysis
8. Sensitivity - Scenario analysis
9. Summary - Executive dashboard with charts
```

---

**Document Classification:** INTERNAL USE ONLY
**Prepared by:** Omega Consulting
**Version:** 1.0.0
**Date:** February 4, 2026
