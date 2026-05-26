# Big 3 Chart Generation Guide
**Version:** 1.0.0
**Last Updated:** February 4, 2026
**Purpose:** Practical guide for generating McKinsey/BCG/Bain-quality charts and diagrams

---

## Quick Start

This guide shows how to generate professional consulting-quality charts using the Big 3 Visualization Library and integrate them into Omega documents.

### **Three-Step Process**

1. **Design** - Choose chart type from BIG3_VISUALIZATION_LIBRARY.json
2. **Generate** - Create chart using JavaScript library (Chart.js recommended)
3. **Embed** - Insert into DOCX using ImageRun with proper caption

---

## Setup

### **Install Required Libraries**

```bash
npm install chart.js canvas chartjs-node-canvas
```

### **Import in Your Script**

```javascript
const {
 ChartJSNodeCanvas } = require('chartjs-node-canvas');
const fs = require('fs');

// For DOCX integration
const { Document, Paragraph, ImageRun, AlignmentType, TextRun } = require('docx');

// Load Big 3 library for reference
const BIG3_VIZ = require('./assets/BIG3_VISUALIZATION_LIBRARY.json');
```

---

## Chart Generation Examples

### **Example 1: Professional Bar Chart**

**Use Case:** Revenue by product line (from MRCC proposal)

```javascript
const { ChartJSNodeCanvas } = require('chartjs-node-canvas');

// Omega Colors from library
const COLORS = {
    PRIMARY: '#1B4F72',
    DARK_TEAL: '#104E70',
    LIGHT_BLUE: '#9CC2E5',
    SUCCESS: '#228B22',
    WARNING: '#FF8C00',
    CRITICAL: '#CC0000'
};

async function createRevenueBarChart() {
    const width = 800;
    const height = 500;
    const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height });

    const configuration = {
        type: 'bar',
        data: {
            labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
            datasets: [{
                label: 'Revenue (EGP M)',
                data: [45, 32, 28, 18, 12],
                backgroundColor: [
                    COLORS.PRIMARY,
                    COLORS.DARK_TEAL,
                    COLORS.LIGHT_BLUE,
                    COLORS.LIGHT_BLUE,
                    COLORS.LIGHT_BLUE
                ],
                borderWidth: 0
            }]
        },
        options: {
            indexAxis: 'y',  // Horizontal bars
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Product A drives 60% of revenue, creating concentration risk',
                    font: { size: 16, weight: 'bold', family: 'Arial' },
                    color: COLORS.PRIMARY,
                    align: 'start'
                },
                legend: {
                    display: false  // Single series, no legend needed
                },
                datalabels: {  // Requires chartjs-plugin-datalabels
                    anchor: 'end',
                    align: 'end',
                    formatter: (value) => `${value}M`,
                    font: { size: 12, family: 'Arial' },
                    color: '#333333'
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Revenue (EGP Millions)',
                        font: { size: 12, family: 'Arial' }
                    },
                    grid: {
                        color: '#F8FBFD'
                    }
                },
                y: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    };

    const imageBuffer = await chartJSNodeCanvas.renderToBuffer(configuration);
    fs.writeFileSync('revenue_chart.png', imageBuffer);

    console.log('✅ Chart generated: revenue_chart.png');
    return imageBuffer;
}
```

**Output:** Professional horizontal bar chart with Omega branding and actionable title.

---

### **Example 2: Timeline / Gantt Chart**

**Use Case:** 12-week engagement timeline (MRCC proposal)

```javascript
async function createTimelineChart() {
    const width = 1000;
    const height = 400;
    const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height });

    const configuration = {
        type: 'bar',
        data: {
            labels: ['Discovery', 'Assessment', 'Financial Analysis', 'Decision Support'],
            datasets: [
                {
                    label: 'Start Week',
                    data: [1, 3, 6, 10],
                    backgroundColor: 'transparent',
                    borderWidth: 0
                },
                {
                    label: 'Duration',
                    data: [2, 3, 4, 3],  // Weeks duration
                    backgroundColor: [
                        COLORS.PRIMARY,
                        COLORS.DARK_TEAL,
                        COLORS.SUCCESS,
                        COLORS.WARNING
                    ]
                }
            ]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: '12-Week Engagement Delivered in 4 Phases',
                    font: { size: 16, weight: 'bold', family: 'Arial' },
                    color: COLORS.PRIMARY,
                    align: 'start'
                },
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    stacked: true,
                    title: {
                        display: true,
                        text: 'Week',
                        font: { size: 12, family: 'Arial' }
                    },
                    max: 12,
                    ticks: {
                        stepSize: 1
                    }
                },
                y: {
                    stacked: true,
                    grid: {
                        display: false
                    }
                }
            }
        }
    };

    const imageBuffer = await chartJSNodeCanvas.renderToBuffer(configuration);
    fs.writeFileSync('timeline_chart.png', imageBuffer);

    return imageBuffer;
}
```

---

### **Example 3: 2x2 Matrix (BCG / Risk Matrix)**

**Use Case:** Risk heat map

```javascript
async function createRiskMatrix() {
    const width = 700;
    const height = 700;
    const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height });

    const risks = [
        { x: 4, y: 5, r: 20, label: 'R1: Regulatory delay' },
        { x: 3, y: 4, r: 15, label: 'R2: CAPEX overrun' },
        { x: 2, y: 2, r: 10, label: 'R3: Demand variance' },
        { x: 1, y: 1, r: 8, label: 'R4: FX fluctuation' }
    ];

    const configuration = {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Risks',
                data: risks,
                backgroundColor: risks.map(r => {
                    const score = r.x * r.y;
                    if (score >= 15) return COLORS.CRITICAL;
                    if (score >= 6) return COLORS.WARNING;
                    return COLORS.SUCCESS;
                })
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: '2 High-Impact Risks Require Immediate Mitigation',
                    font: { size: 16, weight: 'bold', family: 'Arial' },
                    color: COLORS.PRIMARY,
                    align: 'start'
                },
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: (context) => {
                            const risk = risks[context.dataIndex];
                            return `${risk.label} (P=${risk.x}, I=${risk.y})`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    min: 0,
                    max: 5,
                    title: {
                        display: true,
                        text: 'Probability (1=Rare, 5=Almost Certain)',
                        font: { size: 12, family: 'Arial' }
                    },
                    ticks: {
                        stepSize: 1
                    },
                    grid: {
                        color: '#E0E0E0'
                    }
                },
                y: {
                    min: 0,
                    max: 5,
                    title: {
                        display: true,
                        text: 'Impact (1=Negligible, 5=Catastrophic)',
                        font: { size: 12, family: 'Arial' }
                    },
                    ticks: {
                        stepSize: 1
                    },
                    grid: {
                        color: '#E0E0E0'
                    }
                }
            }
        },
        plugins: [{
            // Add quadrant lines
            beforeDraw: (chart) => {
                const ctx = chart.ctx;
                const xScale = chart.scales.x;
                const yScale = chart.scales.y;

                ctx.save();
                ctx.strokeStyle = '#999999';
                ctx.lineWidth = 2;
                ctx.setLineDash([5, 5]);

                // Vertical line at x=2.5
                ctx.beginPath();
                ctx.moveTo(xScale.getPixelForValue(2.5), yScale.top);
                ctx.lineTo(xScale.getPixelForValue(2.5), yScale.bottom);
                ctx.stroke();

                // Horizontal line at y=2.5
                ctx.beginPath();
                ctx.moveTo(xScale.left, yScale.getPixelForValue(2.5));
                ctx.lineTo(xScale.right, yScale.getPixelForValue(2.5));
                ctx.stroke();

                ctx.restore();
            }
        }]
    };

    const imageBuffer = await chartJSNodeCanvas.renderToBuffer(configuration);
    fs.writeFileSync('risk_matrix.png', imageBuffer);

    return imageBuffer;
}
```

---

### **Example 4: Waterfall Chart**

**Use Case:** Revenue to EBITDA bridge

```javascript
async function createWaterfallChart() {
    const width = 900;
    const height = 500;
    const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height });

    const configuration = {
        type: 'bar',
        data: {
            labels: ['Revenue', 'COGS', 'SG&A', 'R&D', 'Other', 'EBITDA'],
            datasets: [
                {
                    label: 'Base',
                    data: [0, 135, 77, 62, 58, 0],
                    backgroundColor: 'transparent'
                },
                {
                    label: 'Values',
                    data: [135, -58, -15, -4, -4, 54],
                    backgroundColor: (context) => {
                        const value = context.raw;
                        if (context.dataIndex === 0 || context.dataIndex === 5) {
                            return COLORS.PRIMARY;  // Start and end
                        }
                        return value > 0 ? COLORS.SUCCESS : COLORS.CRITICAL;
                    }
                }
            ]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'COGS represents 43% of revenue, primary margin improvement opportunity',
                    font: { size: 16, weight: 'bold', family: 'Arial' },
                    color: COLORS.PRIMARY,
                    align: 'start'
                },
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    stacked: true
                },
                y: {
                    stacked: true,
                    title: {
                        display: true,
                        text: 'EGP Millions',
                        font: { size: 12, family: 'Arial' }
                    }
                }
            }
        }
    };

    const imageBuffer = await chartJSNodeCanvas.renderToBuffer(configuration);
    fs.writeFileSync('waterfall_chart.png', imageBuffer);

    return imageBuffer;
}
```

---

## Embedding Charts in DOCX

### **Complete Example: Chart → DOCX Document**

```javascript
const { Document, Packer, Paragraph, ImageRun, AlignmentType, TextRun } = require('docx');
const fs = require('fs');

// Assuming chart generation functions above are available

async function generateDocumentWithCharts() {
    // Generate charts
    const revenueChart = await createRevenueBarChart();
    const timelineChart = await createTimelineChart();
    const riskMatrix = await createRiskMatrix();

    // Figure counter (from Omega DOCX Template Standards v1.1.0)
    let figureCounter = 0;

    function createFigureCaption(text) {
        figureCounter++;
        return new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 100, after: 200 },
            children: [
                new TextRun({
                    text: `Figure ${figureCounter}: ${text}`,
                    italic: true,
                    size: 20,  // 10pt
                    color: '666666',
                    font: 'Arial'
                })
            ]
        });
    }

    const sections = [];

    // Add revenue chart
    sections.push(
        new Paragraph({
            text: '5.1 Revenue Analysis',
            heading: 'Heading2'
        }),
        new Paragraph({
            text: 'Our analysis of the revenue composition reveals significant concentration risk in the product portfolio.',
            spacing: { after: 200 }
        }),
        new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new ImageRun({
                    data: revenueChart,
                    transformation: {
                        width: 600,
                        height: 375
                    }
                })
            ]
        }),
        createFigureCaption('Revenue Concentration by Product Line'),
        new Paragraph({
            spacing: { before: 80, after: 240 },
            children: [
                new TextRun({
                    text: 'Source: Company financial data; Omega analysis February 2026',
                    italic: true,
                    size: 20,
                    color: '0066CC',
                    font: 'Arial'
                })
            ]
        })
    );

    // Add timeline chart
    sections.push(
        new Paragraph({
            text: '6. Implementation Timeline',
            heading: 'Heading2'
        }),
        new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new ImageRun({
                    data: timelineChart,
                    transformation: {
                        width: 650,
                        height: 260
                    }
                })
            ]
        }),
        createFigureCaption('Phased Delivery Approach')
    );

    // Add risk matrix
    sections.push(
        new Paragraph({
            text: '7. Risk Assessment',
            heading: 'Heading2'
        }),
        new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new ImageRun({
                    data: riskMatrix,
                    transformation: {
                        width: 500,
                        height: 500
                    }
                })
            ]
        }),
        createFigureCaption('Risk Heat Map - Probability vs Impact')
    );

    // Create document
    const doc = new Document({
        sections: [{
            children: sections
        }]
    });

    // Save
    const buffer = await Packer.toBuffer(doc);
    fs.writeFileSync('Report_With_Charts.docx', buffer);

    console.log('✅ Document with charts generated: Report_With_Charts.docx');
}

// Run
generateDocumentWithCharts().catch(console.error);
```

---

## Best Practices

### **1. Chart Sizing**

| Document Type | Width | Height | DPI |
|---------------|-------|--------|-----|
| **Word Report** | 600-700px | 375-450px | 150+ |
| **PowerPoint Slide** | 800-1000px | 500-600px | 150+ |
| **Dashboard** | Variable | Variable | 96-150 |

**Rule of Thumb:** Maintain 16:10 or 4:3 aspect ratio for most charts.

### **2. Font Consistency**

```javascript
const FONT_CONFIG = {
    title: { size: 16, weight: 'bold', family: 'Arial' },
    axis: { size: 12, family: 'Arial' },
    dataLabels: { size: 10, family: 'Arial' },
    legend: { size: 10, family: 'Arial' }
};
```

**Apply** these consistently across all charts in a document.

### **3. Color Usage**

```javascript
// Load from BIG3_VISUALIZATION_LIBRARY.json
const VIZ_COLORS = {
    categorical: ['#1B4F72', '#228B22', '#FF8C00', '#CC0000', '#7030A0', '#104E70'],
    sequential: ['#EFF3F7', '#9CC2E5', '#5B9BD5', '#2E75B6', '#1B4F72'],
    diverging: ['#CC0000', '#FF6B6B', '#F8FBFD', '#5B9BD5', '#1B4F72'],
    trafficLight: { green: '#228B22', amber: '#FF8C00', red: '#CC0000' }
};
```

**Choose** palette based on data type (categories, sequential, diverging).

### **4. Titles: Answer 'So What?'**

```javascript
// BAD
title: 'Revenue by Quarter'

// GOOD
title: 'Q3 revenue declined 12%, driven by pricing pressure in EMEA'
```

**Formula:** Insight + Supporting detail = Actionable title

### **5. Data Labels**

```javascript
// Show labels when:
- Bars/columns < 10
- Precise values matter
- Chart is standalone (not in table)

// Hide labels when:
- Too many data points (cluttered)
- Trend is more important than values
- Accompanying table shows values
```

---

## Common Patterns Library

### **Pattern 1: Comparison Across Categories**

**Use:** Bar or column chart
**Example:** Revenue by region, market share by competitor
**Code Template:** Example 1 (Revenue Bar Chart)

### **Pattern 2: Trends Over Time**

**Use:** Line chart
**Example:** KPI tracking, revenue growth, forecasts
**Key:** Use consistent time intervals, start Y-axis at meaningful baseline

### **Pattern 3: Part-to-Whole**

**Use:** Pie, donut, or stacked bar
**Example:** Revenue mix, cost breakdown
**Limit:** Max 6 categories

### **Pattern 4: Correlation / Portfolio**

**Use:** Scatter plot, bubble chart
**Example:** BCG matrix, risk heat map
**Code Template:** Example 3 (Risk Matrix)

### **Pattern 5: Sequential Flow**

**Use:** Waterfall, Sankey
**Example:** Revenue to profit bridge, customer funnel
**Code Template:** Example 4 (Waterfall)

### **Pattern 6: Timeline / Schedule**

**Use:** Gantt chart, timeline
**Example:** Project schedule, roadmap
**Code Template:** Example 2 (Timeline)

---

## Troubleshooting

### **Issue: Charts too large / slow to generate**

**Solution:** Reduce canvas size or switch to SVG:
```javascript
const chartJSNodeCanvas = new ChartJSNodeCanvas({
    width: 800,
    height: 500,
    backgroundColour: 'white'  // Ensures white background
});
```

### **Issue: Fonts not rendering correctly**

**Solution:** Install system fonts or use web-safe fonts:
```bash
# On Windows, ensure Arial is available
# On Linux:
sudo apt-get install ttf-mscorefonts-installer
```

### **Issue: Charts pixelated in Word**

**Solution:** Increase DPI by scaling canvas:
```javascript
const scale = 2;  // 2x for 300 DPI equivalent
const width = 800 * scale;
const height = 500 * scale;

// Then scale down in ImageRun transformation
transformation: {
    width: 800,  // Display size in document
    height: 500
}
```

---

## Quick Reference

### **Chart Type Selection**

| Data Structure | Chart Type | Library Example |
|----------------|------------|-----------------|
| Categories | Bar, Column | Example 1 |
| Time series | Line, Area | Standard line config |
| Part-whole | Pie, Stacked Bar | Standard pie config |
| Two dimensions | Scatter, Bubble | Example 3 |
| Sequential | Waterfall, Sankey | Example 4 |
| Timeline | Gantt, Roadmap | Example 2 |
| Distribution | Histogram, Box | Standard histogram |

### **Color by Use Case**

| Use Case | Palette | Example |
|----------|---------|---------|
| Products/segments | Categorical | 6 distinct colors |
| Performance range | Sequential | Light to dark blue |
| Variance (+/-) | Diverging | Red-white-blue |
| Status (RAG) | Traffic Light | Red/Amber/Green |

---

## Next Steps

1. **Copy templates** from this guide into your generation scripts
2. **Load color palettes** from BIG3_VISUALIZATION_LIBRARY.json
3. **Test charts** by generating samples and viewing in Word
4. **Iterate** on sizing and styling for your specific documents
5. **Standardize** by creating reusable chart generation functions

---

**Related Files:**
- [BIG3_VISUALIZATION_LIBRARY.json](BIG3_VISUALIZATION_LIBRARY.json) - Chart specifications
- [Omega_DOCX_Template_Standards_v1.0.json](Omega_DOCX_Template_Standards_v1.0.json) - DOCX formatting
- [BIG3_CONSULTING_FRAMEWORKS.json](BIG3_CONSULTING_FRAMEWORKS.json) - Analysis frameworks

**Version:** 1.0.0
**Last Updated:** February 4, 2026
**Maintained by:** Omega Consulting - Document Engineering Team
