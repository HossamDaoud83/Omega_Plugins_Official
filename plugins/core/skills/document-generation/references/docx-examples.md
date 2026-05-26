# DOCX Generation Examples

## Complete Word Document with Omega Branding

```javascript
const { Document, Packer, Paragraph, Table, TableRow, TableCell,
        TextRun, HeadingLevel, BorderStyle, AlignmentType,
        Header, Footer, PageNumber, WidthType } = require("docx");
const fs = require("fs");

// Omega Brand Colors (hex without #)
const Omega = {
    primary: "1B4F72",
    tableHeader: "1B4F72",
    tableBorder: "1B4F72"
};

/**
 * Create a complete consulting report with Omega styling
 */
async function createConsultingReport(config) {
    const { title, client, date, sections } = config;
    
    const doc = new Document({
        creator: "Omega Consulting",
        title: title,
        description: `${title} for ${client}`,
        sections: [{
            properties: {
                page: {
                    margin: {
                        top: 1440,    // 1 inch in twips
                        right: 1440,
                        bottom: 1440,
                        left: 1440
                    }
                }
            },
            headers: {
                default: new Header({
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({ 
                                    text: title, 
                                    bold: true, 
                                    color: Omega.primary,
                                    font: "Arial"
                                }),
                                new TextRun({ text: "  |  " }),
                                new TextRun({ 
                                    text: date,
                                    color: Omega.primary,
                                    font: "Arial"
                                })
                            ],
                            alignment: AlignmentType.RIGHT
                        })
                    ]
                })
            },
            footers: {
                default: new Footer({
                    children: [
                        new Paragraph({
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({ 
                                    children: ["Page ", PageNumber.CURRENT, " of ", PageNumber.TOTAL_PAGES],
                                    color: Omega.primary,
                                    font: "Arial",
                                    size: 20
                                })
                            ]
                        }),
                        new Paragraph({
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "Confidential - Omega Consulting",
                                    italics: true,
                                    size: 18,
                                    color: Omega.primary
                                })
                            ]
                        })
                    ]
                })
            },
            children: [
                // Document Title
                createTitle(title),
                createSubtitle(`Prepared for: ${client}`),
                createSubtitle(`Date: ${date}`),
                new Paragraph({ text: "" }), // Spacer
                
                // Add all sections
                ...sections.flatMap(section => createSection(section))
            ]
        }]
    });
    
    return doc;
}

/**
 * Create styled title paragraph
 */
function createTitle(text) {
    return new Paragraph({
        children: [
            new TextRun({
                text: text,
                bold: true,
                size: 48,
                color: Omega.primary,
                font: "Arial Black"
            })
        ],
        heading: HeadingLevel.TITLE,
        spacing: { after: 400 }
    });
}

/**
 * Create styled subtitle
 */
function createSubtitle(text) {
    return new Paragraph({
        children: [
            new TextRun({
                text: text,
                size: 24,
                color: Omega.primary,
                font: "Arial"
            })
        ],
        spacing: { after: 200 }
    });
}

/**
 * Create a complete section with heading and content
 */
function createSection(section) {
    const elements = [];
    
    // Section heading
    elements.push(new Paragraph({
        children: [
            new TextRun({
                text: section.heading,
                bold: true,
                size: 28,
                color: Omega.primary,
                font: "Arial"
            })
        ],
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 400, after: 200 }
    }));
    
    // Section content
    if (section.paragraphs) {
        section.paragraphs.forEach(para => {
            elements.push(new Paragraph({
                children: [new TextRun({ text: para, font: "Arial", size: 22 })],
                spacing: { after: 200 }
            }));
        });
    }
    
    // Section table
    if (section.table) {
        elements.push(createOmegaTable(section.table.headers, section.table.rows));
    }
    
    // Section bullets
    if (section.bullets) {
        section.bullets.forEach(bullet => {
            elements.push(new Paragraph({
                children: [new TextRun({ text: bullet, font: "Arial", size: 22 })],
                bullet: { level: 0 },
                spacing: { after: 100 }
            }));
        });
    }
    
    return elements;
}

/**
 * Create table with Omega styling
 */
function createOmegaTable(headers, rows) {
    const borderConfig = {
        style: BorderStyle.SINGLE,
        size: 1,
        color: Omega.tableBorder
    };
    
    return new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
            // Header row
            new TableRow({
                tableHeader: true,
                children: headers.map(h => new TableCell({
                    shading: { fill: Omega.tableHeader },
                    children: [new Paragraph({
                        children: [new TextRun({ 
                            text: h, 
                            bold: true, 
                            color: Omega.primary,
                            font: "Arial",
                            size: 22
                        })],
                        alignment: AlignmentType.CENTER
                    })],
                    borders: {
                        top: borderConfig,
                        bottom: borderConfig,
                        left: borderConfig,
                        right: borderConfig
                    }
                }))
            }),
            // Data rows
            ...rows.map(row => new TableRow({
                children: row.map(cell => new TableCell({
                    children: [new Paragraph({
                        children: [new TextRun({ 
                            text: String(cell), 
                            font: "Arial",
                            size: 22
                        })]
                    })],
                    borders: {
                        top: borderConfig,
                        bottom: borderConfig,
                        left: borderConfig,
                        right: borderConfig
                    }
                }))
            }))
        ]
    });
}

/**
 * Create key term with Omega styling (bold, dark blue)
 */
function createKeyTerm(term, definition) {
    return new Paragraph({
        children: [
            new TextRun({
                text: term + ": ",
                bold: true,
                color: Omega.primary,
                font: "Arial",
                size: 22
            }),
            new TextRun({
                text: definition,
                font: "Arial",
                size: 22
            })
        ],
        spacing: { after: 200 }
    });
}

// ============================================
// USAGE EXAMPLE
// ============================================

async function generateSampleReport() {
    const report = await createConsultingReport({
        title: "Digital Transformation Assessment",
        client: "Acme Corporation",
        date: "December 23, 2024",
        sections: [
            {
                heading: "Executive Summary",
                paragraphs: [
                    "This document presents the findings of our digital transformation assessment conducted over the past four weeks.",
                    "Key recommendations focus on modernizing core systems and improving data analytics capabilities."
                ]
            },
            {
                heading: "Current State Analysis",
                paragraphs: [
                    "The organization currently operates with a mix of legacy and modern systems."
                ],
                table: {
                    headers: ["System", "Age", "Status", "Priority"],
                    rows: [
                        ["ERP", "8 years", "Critical", "High"],
                        ["CRM", "3 years", "Stable", "Medium"],
                        ["HR System", "12 years", "End of Life", "High"]
                    ]
                }
            },
            {
                heading: "Recommendations",
                bullets: [
                    "Implement cloud-based ERP solution within 18 months",
                    "Establish data governance framework",
                    "Create Center of Excellence for digital initiatives",
                    "Develop comprehensive change management program"
                ]
            }
        ]
    });
    
    // Save to file
    const buffer = await Packer.toBuffer(report);
    fs.writeFileSync("Acme_DigitalAssessment_v1.0_2024-12-23.docx", buffer);
    console.log("Report generated successfully!");
}

// Run
generateSampleReport();
```

---

## Executive Summary Template

```javascript
async function createExecutiveSummary(config) {
    const { title, client, situation, complication, resolution, keyFindings, nextSteps } = config;
    
    return createConsultingReport({
        title: "Executive Summary: " + title,
        client: client,
        date: new Date().toISOString().split('T')[0],
        sections: [
            {
                heading: "Situation",
                paragraphs: [situation]
            },
            {
                heading: "Complication", 
                paragraphs: [complication]
            },
            {
                heading: "Resolution",
                paragraphs: [resolution]
            },
            {
                heading: "Key Findings",
                bullets: keyFindings
            },
            {
                heading: "Next Steps",
                bullets: nextSteps
            }
        ]
    });
}
```

---

## Gap Analysis Document

```javascript
async function createGapAnalysis(config) {
    const { title, client, gaps } = config;
    
    const sections = [
        {
            heading: "Gap Analysis Overview",
            table: {
                headers: ["Area", "Current State", "Future State", "Gap", "Priority"],
                rows: gaps.map(g => [g.area, g.current, g.future, g.gap, g.priority])
            }
        }
    ];
    
    // Add detailed gap sections
    gaps.forEach(gap => {
        sections.push({
            heading: `Gap: ${gap.area}`,
            paragraphs: [
                `Current State: ${gap.current}`,
                `Target State: ${gap.future}`,
                `Impact: ${gap.impact}`
            ],
            bullets: gap.recommendations
        });
    });
    
    return createConsultingReport({
        title: title,
        client: client,
        date: new Date().toISOString().split('T')[0],
        sections: sections
    });
}
```
