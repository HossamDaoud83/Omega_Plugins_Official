# PowerPoint (PPTX) Generation Examples

## Complete PowerPoint with Omega Branding

```javascript
const pptxgen = require("pptxgenjs");

// Omega Brand Colors
const Omega = {
    primary: "1B4F72",
    white: "FFFFFF",
    gray: "666666",
    lightGray: "F8FBFD"
};

// Logo path
const LOGO_PATH = "assets/logos/omega-logo-full.png";

/**
 * Create a complete Omega-branded presentation
 */
function createOmegaPresentation(config) {
    const { title, subtitle, author, slides } = config;
    
    const pptx = new pptxgen();
    
    // Set presentation properties
    pptx.author = author || "Omega Consulting";
    pptx.company = "Omega Consulting";
    pptx.title = title;
    pptx.subject = subtitle || "";
    
    // Define master slide with Omega branding
    pptx.defineSlideMaster({
        title: "Omega_MASTER",
        background: { color: Omega.white },
        objects: [
            // Logo in top-right
            { image: { x: 8.5, y: 0.3, w: 1.2, h: 0.6, path: LOGO_PATH } },
            // Footer line
            { line: { x: 0.5, y: 5.2, w: 9, h: 0, line: { color: Omega.primary, width: 1 } } },
            // Confidentiality text
            { text: { 
                text: "Confidential - Omega Consulting",
                options: { x: 0.5, y: 5.3, fontSize: 8, color: Omega.gray, fontFace: "Arial" }
            }}
        ]
    });
    
    // Title Slide
    createTitleSlide(pptx, { title, subtitle, author });
    
    // Content Slides
    slides.forEach(slideConfig => {
        if (slideConfig.type === "content") {
            createContentSlide(pptx, slideConfig);
        } else if (slideConfig.type === "two-column") {
            createTwoColumnSlide(pptx, slideConfig);
        } else if (slideConfig.type === "table") {
            createTableSlide(pptx, slideConfig);
        } else if (slideConfig.type === "chart") {
            createChartSlide(pptx, slideConfig);
        }
    });
    
    return pptx;
}

/**
 * Create title slide
 */
function createTitleSlide(pptx, config) {
    const { title, subtitle, author } = config;
    const slide = pptx.addSlide();
    
    // Background accent
    slide.addShape(pptx.ShapeType.rect, {
        x: 0, y: 3.5, w: 10, h: 2,
        fill: { color: Omega.primary }
    });
    
    // Logo centered
    slide.addImage({
        path: LOGO_PATH,
        x: 3.5, y: 0.5, w: 3, h: 1.5
    });
    
    // Title
    slide.addText(title, {
        x: 0.5, y: 2.2, w: 9, h: 1,
        fontSize: 36, fontFace: "Arial Black",
        color: Omega.primary, align: "center"
    });
    
    // Subtitle
    slide.addText(subtitle || "", {
        x: 0.5, y: 3.7, w: 9, h: 0.5,
        fontSize: 20, fontFace: "Arial",
        color: Omega.white, align: "center"
    });
    
    // Author/Date
    slide.addText(`${author || "Omega Consulting"} | ${new Date().toLocaleDateString()}`, {
        x: 0.5, y: 4.3, w: 9, h: 0.4,
        fontSize: 14, fontFace: "Arial",
        color: Omega.white, align: "center"
    });
}

/**
 * Create content slide with bullets
 */
function createContentSlide(pptx, config) {
    const { heading, bullets } = config;
    const slide = pptx.addSlide({ masterName: "Omega_MASTER" });
    
    // Heading
    slide.addText(heading, {
        x: 0.5, y: 0.3, w: 8, h: 0.7,
        fontSize: 28, fontFace: "Arial Black",
        color: Omega.primary
    });
    
    // Divider line under heading
    slide.addShape(pptx.ShapeType.line, {
        x: 0.5, y: 1, w: 9, h: 0,
        line: { color: Omega.primary, width: 2 }
    });
    
    // Bullets
    const bulletText = bullets.map(b => ({ text: b, options: { bullet: true } }));
    slide.addText(bulletText, {
        x: 0.5, y: 1.3, w: 9, h: 3.5,
        fontSize: 18, fontFace: "Arial",
        color: "000000", valign: "top"
    });
}

/**
 * Create two-column slide
 */
function createTwoColumnSlide(pptx, config) {
    const { heading, leftColumn, rightColumn } = config;
    const slide = pptx.addSlide({ masterName: "Omega_MASTER" });
    
    // Heading
    slide.addText(heading, {
        x: 0.5, y: 0.3, w: 8, h: 0.7,
        fontSize: 28, fontFace: "Arial Black",
        color: Omega.primary
    });
    
    // Left column
    slide.addText(leftColumn.title, {
        x: 0.5, y: 1.2, w: 4.2, h: 0.4,
        fontSize: 18, fontFace: "Arial", bold: true,
        color: Omega.primary
    });
    
    const leftBullets = leftColumn.items.map(b => ({ text: b, options: { bullet: true } }));
    slide.addText(leftBullets, {
        x: 0.5, y: 1.7, w: 4.2, h: 3,
        fontSize: 14, fontFace: "Arial",
        color: "000000", valign: "top"
    });
    
    // Right column
    slide.addText(rightColumn.title, {
        x: 5.2, y: 1.2, w: 4.2, h: 0.4,
        fontSize: 18, fontFace: "Arial", bold: true,
        color: Omega.primary
    });
    
    const rightBullets = rightColumn.items.map(b => ({ text: b, options: { bullet: true } }));
    slide.addText(rightBullets, {
        x: 5.2, y: 1.7, w: 4.2, h: 3,
        fontSize: 14, fontFace: "Arial",
        color: "000000", valign: "top"
    });
}

/**
 * Create table slide
 */
function createTableSlide(pptx, config) {
    const { heading, headers, rows } = config;
    const slide = pptx.addSlide({ masterName: "Omega_MASTER" });
    
    // Heading
    slide.addText(heading, {
        x: 0.5, y: 0.3, w: 8, h: 0.7,
        fontSize: 28, fontFace: "Arial Black",
        color: Omega.primary
    });
    
    // Table
    const tableData = [
        headers.map(h => ({ text: h, options: { 
            fill: Omega.primary, 
            color: Omega.white, 
            bold: true,
            fontFace: "Arial"
        }})),
        ...rows.map(row => row.map(cell => ({ 
            text: String(cell), 
            options: { fontFace: "Arial" }
        })))
    ];
    
    slide.addTable(tableData, {
        x: 0.5, y: 1.2, w: 9,
        border: { type: "solid", color: Omega.primary, pt: 1 },
        fontFace: "Arial",
        fontSize: 12
    });
}

/**
 * Create chart slide
 */
function createChartSlide(pptx, config) {
    const { heading, chartType, data } = config;
    const slide = pptx.addSlide({ masterName: "Omega_MASTER" });
    
    // Heading
    slide.addText(heading, {
        x: 0.5, y: 0.3, w: 8, h: 0.7,
        fontSize: 28, fontFace: "Arial Black",
        color: Omega.primary
    });
    
    // Chart
    slide.addChart(pptx.ChartType[chartType] || pptx.ChartType.bar, data, {
        x: 0.5, y: 1.2, w: 9, h: 3.5,
        chartColors: [Omega.primary, "85C1E9", "5DADE2", "3498DB"],
        showTitle: false,
        showLegend: true,
        legendPos: "b"
    });
}

// ============================================
// USAGE EXAMPLE
// ============================================

async function generateSamplePresentation() {
    const pptx = createOmegaPresentation({
        title: "Digital Transformation Strategy",
        subtitle: "Executive Presentation",
        author: "Omega Consulting",
        slides: [
            {
                type: "content",
                heading: "Executive Summary",
                bullets: [
                    "Digital maturity assessment completed",
                    "Key opportunities identified in customer experience",
                    "Recommended investment of $2.5M over 3 years",
                    "Expected ROI of 250% by Year 3"
                ]
            },
            {
                type: "two-column",
                heading: "Current vs Future State",
                leftColumn: {
                    title: "Current State",
                    items: ["Manual processes", "Legacy systems", "Siloed data", "Limited analytics"]
                },
                rightColumn: {
                    title: "Future State",
                    items: ["Automated workflows", "Cloud-native platform", "Integrated data lake", "AI-powered insights"]
                }
            },
            {
                type: "table",
                heading: "Implementation Timeline",
                headers: ["Phase", "Duration", "Investment", "Key Deliverables"],
                rows: [
                    ["Foundation", "Q1-Q2", "$800K", "Cloud migration, data integration"],
                    ["Automation", "Q3-Q4", "$1.0M", "Process automation, self-service"],
                    ["Intelligence", "Year 2", "$700K", "Analytics, AI/ML capabilities"]
                ]
            },
            {
                type: "chart",
                heading: "Projected ROI",
                chartType: "bar",
                data: [
                    { name: "Investment", labels: ["Y1", "Y2", "Y3"], values: [1.8, 0.5, 0.2] },
                    { name: "Returns", labels: ["Y1", "Y2", "Y3"], values: [0.5, 2.0, 4.0] }
                ]
            }
        ]
    });
    
    await pptx.writeFile("Omega_DigitalStrategy_2024.pptx");
    console.log("Presentation created successfully!");
}

generateSamplePresentation();
```

---

## Slide Templates Quick Reference

| Template | Function | Use Case |
|----------|----------|----------|
| Title Slide | `createTitleSlide()` | Opening slide with logo |
| Content | `createContentSlide()` | Bullet points |
| Two-Column | `createTwoColumnSlide()` | Comparison/pros-cons |
| Table | `createTableSlide()` | Data tables |
| Chart | `createChartSlide()` | Bar, line, pie charts |

---

## Required Package

```bash
npm install pptxgenjs
```
