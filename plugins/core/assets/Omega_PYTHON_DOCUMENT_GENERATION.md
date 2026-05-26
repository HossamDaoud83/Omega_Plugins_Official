# Omega Python Document Generation Methodology

**Version:** 2.0
**Updated:** February 2026
**Quality Standard:** Banking-Grade / Big 3 Consultant Level

---

## Overview

This document defines the Python-based document generation stack for Omega consulting deliverables. All generated documents must meet McKinsey/BCG/Bain quality standards.

---

## 1. Core Technology Stack

### 1.1 Data & Analysis Layer

| Library | Purpose | Usage |
|---------|---------|-------|
| **NumPy** | Numerical computing | Array operations, mathematical functions |
| **pandas** | Data manipulation | DataFrames, pivots, aggregations, time series |

```python
import numpy as np
import pandas as pd

# Example: Financial projection
years = np.arange(2029, 2049)
revenue = base_revenue * (1 + growth_rate) ** np.arange(20)
df = pd.DataFrame({'Year': years, 'Revenue': revenue})
```

### 1.2 Visualization Layer

| Library | Type | Best For |
|---------|------|----------|
| **matplotlib** | Static | Excel embedding, PDF reports, print materials |
| **seaborn** | Statistical | Heatmaps, distributions, correlation matrices |
| **Plotly** | Interactive | HTML dashboards, client PoC tools |

```python
import matplotlib.pyplot as plt
import seaborn as sns
import plotly.express as px

# Omega Style Configuration
plt.rcParams.update({
    'font.family': 'Arial',
    'font.size': 10,
    'axes.titlesize': 12,
    'axes.titleweight': 'bold',
    'axes.spines.top': False,
    'axes.spines.right': False,
    'axes.edgecolor': '#333333',
    'figure.facecolor': 'white',
    'axes.grid': True,
    'grid.alpha': 0.3,
})
```

### 1.3 Document Generation Layer

| Library | Approach | Best For |
|---------|----------|----------|
| **openpyxl** | Programmatic | Complex Excel workbooks with formatting |
| **xlsxwriter** | Performance | Large datasets, many charts |
| **python-docx** | Programmatic | Data-heavy Word reports |
| **docxtpl** | Template-based | Branded executive reports |
| **python-pptx** | Programmatic | Automated presentation decks |
| **Spire.Doc** | Commercial | Complex merges, Word-to-PDF |

---

## 2. Omega Branding Constants

```python
# Omega Color Palette
Omega_COLORS = {
    'PRIMARY': '#1B4F72',      # Navy Blue - Headers, titles
    'DARK_TEAL': '#104E70',    # Dark Teal - Table headers
    'LIGHT_BLUE': '#9CC2E5',   # Light Blue - Borders
    'VERY_LIGHT': '#F8FBFD',   # Almost White - Alt rows
    'WHITE': '#FFFFFF',
    'BLACK': '#333333',        # Body text

    # Status Colors
    'CRITICAL': '#CC0000',     # Red
    'HIGH': '#FF8C00',         # Orange
    'MEDIUM': '#FFD700',       # Yellow
    'LOW': '#228B22',          # Green

    # Special
    'INPUT': '#FFFF99',        # Editable cells
    'HIGHLIGHT': '#E6F3FF',    # Selected rows
}

# Typography
Omega_FONTS = {
    'heading': 'Arial Black',
    'body': 'Arial',
    'size_title': 16,
    'size_heading': 12,
    'size_body': 10,
    'size_small': 9,
}
```

---

## 3. Excel Generation (openpyxl)

### 3.1 Workbook Setup

```python
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter
from openpyxl.drawing.image import Image

# Create workbook
wb = Workbook()
ws = wb.active
ws.title = "Executive Summary"
ws.sheet_properties.tabColor = "1B4F72"

# Omega Styles
HEADER_FILL = PatternFill(start_color='1B4F72', end_color='1B4F72', fill_type='solid')
HEADER_FONT = Font(name='Arial', size=11, bold=True, color='FFFFFF')
BODY_FONT = Font(name='Arial', size=10, color='333333')
BORDER = Border(
    left=Side(style='thin', color='9CC2E5'),
    right=Side(style='thin', color='9CC2E5'),
    top=Side(style='thin', color='9CC2E5'),
    bottom=Side(style='thin', color='9CC2E5')
)
```

### 3.2 Table Formatting

```python
def create_styled_table(ws, data, headers, start_row=1, start_col=1):
    """Create a Omega-styled table with headers and data."""

    # Write headers
    for col, header in enumerate(headers, start_col):
        cell = ws.cell(row=start_row, column=col, value=header)
        cell.fill = HEADER_FILL
        cell.font = HEADER_FONT
        cell.alignment = Alignment(horizontal='center', vertical='center')
        cell.border = BORDER

    # Write data with alternating rows
    for row_idx, row_data in enumerate(data, start_row + 1):
        for col_idx, value in enumerate(row_data, start_col):
            cell = ws.cell(row=row_idx, column=col_idx, value=value)
            cell.font = BODY_FONT
            cell.border = BORDER

            # Alternating row color
            if (row_idx - start_row) % 2 == 0:
                cell.fill = PatternFill(start_color='F8FBFD', fill_type='solid')

    return start_row + len(data) + 1
```

### 3.3 Embedding Charts

```python
import matplotlib.pyplot as plt
from openpyxl.drawing.image import Image
import io

def create_and_embed_chart(ws, chart_func, cell_location, width=500, height=300):
    """Create matplotlib chart and embed in Excel."""

    # Generate chart
    fig = chart_func()

    # Save to bytes buffer
    buf = io.BytesIO()
    fig.savefig(buf, format='png', dpi=150, bbox_inches='tight',
                facecolor='white', edgecolor='none')
    buf.seek(0)
    plt.close(fig)

    # Embed in Excel
    img = Image(buf)
    img.width = width
    img.height = height
    ws.add_image(img, cell_location)
```

---

## 4. Word Generation

### 4.1 Programmatic (python-docx)

```python
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT

doc = Document()

# Title
title = doc.add_heading('Executive Summary', level=0)
title.runs[0].font.color.rgb = RGBColor(0x1B, 0x4F, 0x72)

# Paragraph
para = doc.add_paragraph('Key findings from our analysis...')
para.style.font.name = 'Arial'
para.style.font.size = Pt(11)

# Table
table = doc.add_table(rows=1, cols=3)
table.style = 'Table Grid'
hdr_cells = table.rows[0].cells
hdr_cells[0].text = 'Metric'
hdr_cells[1].text = 'Value'
hdr_cells[2].text = 'Status'

doc.save('report.docx')
```

### 4.2 Template-Based (docxtpl)

**Use Case:** High-stakes branded reports where design consistency is critical.

**Workflow:**
1. Designer creates Word template with placeholders: `{{ variable }}`
2. Python fills placeholders with data
3. Output preserves all formatting and branding

```python
from docxtpl import DocxTemplate

# Load template
doc = DocxTemplate('templates/executive_report_template.docx')

# Context data
context = {
    'project_name': 'Al Adabiya Port Development',
    'client': 'AMMCO',
    'total_capex': '$218M',
    'irr': '17.2%',
    'dscr': '1.85x',
    'key_risks': [
        {'name': 'Construction Delay', 'score': 16},
        {'name': 'Cost Overrun', 'score': 12},
    ],
    'recommendations': [
        'Proceed with FEED phase',
        'Secure environmental permits',
        'Engage SUMED for tie-in agreement',
    ]
}

# Render and save
doc.render(context)
doc.save('output/executive_report.docx')
```

**Template Syntax:**
- `{{ variable }}` - Simple variable
- `{% for item in list %}...{% endfor %}` - Loop
- `{% if condition %}...{% endif %}` - Conditional
- `{{ variable | upper }}` - Filter

---

## 5. PowerPoint Generation (python-pptx)

```python
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN

prs = Presentation()

# Title slide
title_slide = prs.slides.add_slide(prs.slide_layouts[0])
title = title_slide.shapes.title
title.text = "Al Adabiya Port Development"
subtitle = title_slide.placeholders[1]
subtitle.text = "Investment Analysis | February 2026"

# Content slide with chart
content_slide = prs.slides.add_slide(prs.slide_layouts[5])
title = content_slide.shapes.title
title.text = "CAPEX drives 60% marine infrastructure investment"

# Add chart image
content_slide.shapes.add_picture(
    'charts/capex_breakdown.png',
    Inches(1), Inches(1.5),
    width=Inches(8)
)

prs.save('presentation.pptx')
```

---

## 6. Decision Matrix

| Deliverable Type | Recommended Stack | Rationale |
|------------------|-------------------|-----------|
| Financial Model (Excel) | openpyxl + pandas + matplotlib | Full control, embedded charts |
| Risk Register (Excel) | openpyxl + seaborn heatmap | Matrix visualization |
| Executive Report (Word) | docxtpl | Preserves branding |
| Technical Appendix (Word) | python-docx | Programmatic tables |
| Client Deck (PPTX) | python-pptx + matplotlib | Automated slides |
| Interactive Dashboard | Plotly + HTML | Client exploration |
| Final PDF | docxtpl → Word → PDF | Professional output |

---

## 7. Quality Checklist

### Excel Workbooks
- [ ] Omega header styling (Navy #1B4F72)
- [ ] Alternating row colors
- [ ] Number formatting (currency, percentages)
- [ ] Column widths appropriate for content
- [ ] Professional charts with Omega colors
- [ ] Input cells highlighted (Yellow #FFFF99)
- [ ] Source citations included
- [ ] Print area defined

### Word Documents
- [ ] Omega logo positioned correctly
- [ ] Heading hierarchy consistent
- [ ] Tables styled with Omega colors
- [ ] Page numbers in footer
- [ ] Document properties set

### PowerPoint Presentations
- [ ] Master slide with Omega branding
- [ ] Consistent font usage
- [ ] Charts answer "So what?"
- [ ] Slide numbers present
- [ ] Speaker notes included

---

## 8. Installation

```bash
# Core stack
pip install numpy pandas matplotlib seaborn openpyxl xlsxwriter

# Document generation
pip install python-docx docxtpl python-pptx

# Interactive visualizations
pip install plotly

# PDF generation (optional)
pip install reportlab fpdf2 weasyprint pillow
```

---

## 9. File Templates Location

```
assets/
├── templates/
│   ├── executive_report_template.docx
│   ├── technical_assessment_template.docx
│   ├── presentation_master.pptx
│   └── financial_model_template.xlsx
├── logos/
│   ├── omega-logo-full.png
│   └── omega-logo-alt.png
└── fonts/
    └── (system fonts: Arial, Arial Black)
```

---

**Document Control:**
- Author: Omega Consulting
- Classification: Internal Methodology
- Review Cycle: Quarterly
