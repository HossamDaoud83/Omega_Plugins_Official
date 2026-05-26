# Apply Branding Command

Apply client-specific branding to deliverables.

## Trigger
`/project:apply-branding` or when generating client-facing deliverables

---

## Parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| `target` | No | Specific file or "all" for all deliverables |
| `template` | No | Template type (document, presentation, report) |

---

## Branding Elements

### From client_profile.json

```json
{
  "branding": {
    "primary_color": "#003366",
    "secondary_color": "#666666",
    "accent_color": "#FF6600",
    "font_family": "Calibri",
    "logo_path": "assets/client_logo.png",
    "deliverable_footer": "Acme Corp | Confidential",
    "date_format": "DD/MM/YYYY",
    "number_format": "1.234,56"
  }
}
```

---

## Application by Document Type

### Word Documents (.docx)

**Apply to:**
- Title page with client logo
- Header with client name
- Footer with confidentiality notice
- Color scheme for headings
- Font family throughout
- Date/number formatting

**Template sections:**
```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [Omega Logo]                                        [Client Logo]             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│                          [DOCUMENT TITLE]                                   │
│                          [Subtitle/Date]                                    │
│                                                                             │
│                     Prepared for: [Client Name]                             │
│                     Prepared by: Omega Consulting                │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│ CONFIDENTIAL                                      [Date: formatted]         │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### PowerPoint Presentations (.pptx)

**Apply to:**
- Master slide with logos
- Color scheme (theme colors)
- Title slide layout
- Section divider slides
- Footer on all slides

**Slide master elements:**
```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [Client Logo - Top Left]                          [Omega Logo - Top Right]    │
│                                                                             │
│                              [Content Area]                                 │
│                                                                             │
│                                                                             │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│ [Footer: Confidentiality]            [Page #]              [Date]           │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### Excel Workbooks (.xlsx)

**Apply to:**
- Header row styling
- Number formatting
- Date formatting
- Sheet headers/footers
- Print settings

---

## Execution

### Step 1: Load Branding Configuration
```
Read: client_profile.json → branding section
Validate: All required elements present
Load: Logo file if path specified
```

### Step 2: Detect Document Type
```
Based on file extension:
- .docx → Apply Word branding
- .pptx → Apply PowerPoint branding
- .xlsx → Apply Excel branding
- .md → Apply Markdown template
```

### Step 3: Apply Branding
```
For each target file:
  1. Open document
  2. Apply color scheme
  3. Apply fonts
  4. Insert logos
  5. Update headers/footers
  6. Apply date/number formats
  7. Save document
```

### Step 4: Verify
```
Check:
- Logo placement correct
- Colors applied consistently
- Fonts rendered properly
- Footers on all pages
```

---

## Output

```
═══════════════════════════════════════════════════════════════
CLIENT BRANDING APPLIED
═══════════════════════════════════════════════════════════════

Client: [Client Name]
Files Processed: [X]

BRANDING ELEMENTS APPLIED:
├── Primary Color: [#XXXXXX]
├── Secondary Color: [#XXXXXX]
├── Font Family: [Font]
├── Logo: [Inserted / Not configured]
├── Footer: [Applied]
└── Date Format: [Format]

FILES UPDATED:
✓ 05_Deliverables_Final/assessment_report.docx
✓ 05_Deliverables_Final/steering_presentation.pptx
✓ 05_Deliverables_Final/data_analysis.xlsx

MANUAL CHECK REQUIRED:
• Verify logo positioning
• Check color contrast
• Confirm footer visibility

═══════════════════════════════════════════════════════════════
```

---

## Integration Points

### With Document Templates Skill
```
When generating new document:
  1. Create from template
  2. Apply branding automatically
  3. Populate content
  4. Save to output location
```

### With Client Profile
```
On client_profile.json update:
  - Validate branding elements
  - Flag missing logos
  - Warn on accessibility issues (color contrast)
```

### With Session End
```
Before completing session:
  - Check if deliverables created
  - Prompt to apply branding
  - Verify client-ready status
```

---

## Color Accessibility Check

Automatically validate color combinations:

```
PRIMARY + WHITE TEXT
├── Contrast Ratio: 7.5:1
└── Status: ✓ WCAG AAA Pass

SECONDARY + WHITE TEXT
├── Contrast Ratio: 4.8:1
└── Status: ✓ WCAG AA Pass

ACCENT + WHITE TEXT
├── Contrast Ratio: 2.1:1
└── Status: ✗ WCAG Fail - Increase contrast
```
