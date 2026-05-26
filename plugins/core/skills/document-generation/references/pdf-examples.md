# PDF Generation Examples

## Complete PDF Document with Omega Branding

```javascript
const { PDFDocument, rgb, StandardFonts, PageSizes } = require("pdf-lib");
const fs = require("fs");

// Omega Brand Colors (RGB 0-1 scale)
const Omega = {
    primary: rgb(0.106, 0.310, 0.447),      // #1B4F72
    tableHeader: rgb(0.106, 0.310, 0.447),  // #1B4F72
    black: rgb(0, 0, 0),
    white: rgb(1, 1, 1),
    gray: rgb(0.5, 0.5, 0.5)
};

// Page dimensions (Letter size in points)
const PAGE = {
    width: 612,
    height: 792,
    margin: 72,  // 1 inch
    contentWidth: 612 - 144,
    contentHeight: 792 - 144
};

/**
 * Create a complete PDF report with Omega branding
 */
async function createOmegaReport(config) {
    const { title, client, date, sections } = config;
    
    const pdfDoc = await PDFDocument.create();
    pdfDoc.setTitle(title);
    pdfDoc.setAuthor("Omega Consulting");
    pdfDoc.setCreator("Omega Document Generator");
    pdfDoc.setProducer("pdf-lib");
    pdfDoc.setCreationDate(new Date());
    
    // Embed fonts
    const fonts = {
        bold: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
        regular: await pdfDoc.embedFont(StandardFonts.Helvetica),
        italic: await pdfDoc.embedFont(StandardFonts.HelveticaOblique)
    };
    
    // Create title page
    await createTitlePage(pdfDoc, fonts, { title, client, date });
    
    // Create content pages
    let currentPage = pdfDoc.addPage(PageSizes.Letter);
    let yPosition = PAGE.height - PAGE.margin;
    
    for (const section of sections) {
        const result = await addSection(currentPage, fonts, section, yPosition);
        yPosition = result.yPosition;
        
        if (result.needsNewPage) {
            currentPage = pdfDoc.addPage(PageSizes.Letter);
            yPosition = PAGE.height - PAGE.margin;
        }
    }
    
    // Add page numbers to all pages
    await addPageNumbers(pdfDoc, fonts);
    
    return pdfDoc;
}

/**
 * Create title page
 */
async function createTitlePage(pdfDoc, fonts, config) {
    const { title, client, date } = config;
    const page = pdfDoc.addPage(PageSizes.Letter);
    
    // Title block
    const titleY = PAGE.height - 250;
    page.drawText(title, {
        x: PAGE.margin,
        y: titleY,
        size: 32,
        font: fonts.bold,
        color: Omega.primary,
        maxWidth: PAGE.contentWidth
    });
    
    // Decorative line under title
    page.drawLine({
        start: { x: PAGE.margin, y: titleY - 20 },
        end: { x: PAGE.width - PAGE.margin, y: titleY - 20 },
        thickness: 3,
        color: Omega.primary
    });
    
    // Client info
    page.drawText(`Prepared for: ${client}`, {
        x: PAGE.margin,
        y: titleY - 60,
        size: 16,
        font: fonts.regular,
        color: Omega.primary
    });
    
    page.drawText(`Date: ${date}`, {
        x: PAGE.margin,
        y: titleY - 85,
        size: 14,
        font: fonts.regular,
        color: Omega.gray
    });
    
    // Footer with company name
    page.drawText("Omega Consulting", {
        x: PAGE.margin,
        y: PAGE.margin + 30,
        size: 14,
        font: fonts.bold,
        color: Omega.primary
    });
    
    page.drawText("Confidential", {
        x: PAGE.margin,
        y: PAGE.margin + 10,
        size: 10,
        font: fonts.italic,
        color: Omega.gray
    });
    
    return page;
}

/**
 * Add section to page
 */
async function addSection(page, fonts, section, startY) {
    let yPosition = startY;
    const minY = PAGE.margin + 50;
    let needsNewPage = false;
    
    // Section heading
    if (section.heading) {
        yPosition -= 30;
        page.drawText(section.heading, {
            x: PAGE.margin,
            y: yPosition,
            size: 16,
            font: fonts.bold,
            color: Omega.primary
        });
        
        // Underline
        page.drawLine({
            start: { x: PAGE.margin, y: yPosition - 5 },
            end: { x: PAGE.margin + fonts.bold.widthOfTextAtSize(section.heading, 16), y: yPosition - 5 },
            thickness: 1,
            color: Omega.primary
        });
        
        yPosition -= 25;
    }
    
    // Paragraphs
    if (section.paragraphs) {
        for (const para of section.paragraphs) {
            if (yPosition < minY) {
                needsNewPage = true;
                break;
            }
            
            // Word wrap text
            const lines = wrapText(para, fonts.regular, 11, PAGE.contentWidth);
            for (const line of lines) {
                page.drawText(line, {
                    x: PAGE.margin,
                    y: yPosition,
                    size: 11,
                    font: fonts.regular,
                    color: Omega.black
                });
                yPosition -= 16;
            }
            yPosition -= 10;
        }
    }
    
    // Bullets
    if (section.bullets) {
        for (const bullet of section.bullets) {
            if (yPosition < minY) {
                needsNewPage = true;
                break;
            }
            
            // Bullet point
            page.drawText("•", {
                x: PAGE.margin,
                y: yPosition,
                size: 11,
                font: fonts.regular,
                color: Omega.primary
            });
            
            // Bullet text
            const lines = wrapText(bullet, fonts.regular, 11, PAGE.contentWidth - 20);
            for (let i = 0; i < lines.length; i++) {
                page.drawText(lines[i], {
                    x: PAGE.margin + 15,
                    y: yPosition - (i * 16),
                    size: 11,
                    font: fonts.regular,
                    color: Omega.black
                });
            }
            yPosition -= (lines.length * 16) + 5;
        }
    }
    
    // Table
    if (section.table) {
        const tableResult = drawTable(page, fonts, section.table, yPosition);
        yPosition = tableResult.yPosition;
        needsNewPage = tableResult.needsNewPage;
    }
    
    return { yPosition, needsNewPage };
}

/**
 * Draw table with Omega styling
 */
function drawTable(page, fonts, tableData, startY) {
    const { headers, rows } = tableData;
    const colWidth = PAGE.contentWidth / headers.length;
    const rowHeight = 25;
    let yPosition = startY - 20;
    
    // Header row background
    page.drawRectangle({
        x: PAGE.margin,
        y: yPosition - rowHeight + 5,
        width: PAGE.contentWidth,
        height: rowHeight,
        color: Omega.tableHeader
    });
    
    // Header text
    headers.forEach((header, i) => {
        page.drawText(header, {
            x: PAGE.margin + (i * colWidth) + 5,
            y: yPosition - 12,
            size: 10,
            font: fonts.bold,
            color: Omega.primary
        });
    });
    
    // Header border
    page.drawRectangle({
        x: PAGE.margin,
        y: yPosition - rowHeight + 5,
        width: PAGE.contentWidth,
        height: rowHeight,
        borderColor: Omega.primary,
        borderWidth: 1
    });
    
    yPosition -= rowHeight;
    
    // Data rows
    rows.forEach((row, rowIndex) => {
        row.forEach((cell, i) => {
            page.drawText(String(cell), {
                x: PAGE.margin + (i * colWidth) + 5,
                y: yPosition - 12,
                size: 10,
                font: fonts.regular,
                color: Omega.black
            });
        });
        
        // Row border
        page.drawRectangle({
            x: PAGE.margin,
            y: yPosition - rowHeight + 5,
            width: PAGE.contentWidth,
            height: rowHeight,
            borderColor: Omega.primary,
            borderWidth: 0.5
        });
        
        yPosition -= rowHeight;
    });
    
    return { yPosition: yPosition - 10, needsNewPage: yPosition < PAGE.margin + 50 };
}

/**
 * Add page numbers to all pages
 */
async function addPageNumbers(pdfDoc, fonts) {
    const pages = pdfDoc.getPages();
    const totalPages = pages.length;
    
    pages.forEach((page, index) => {
        const pageNum = index + 1;
        const text = `${pageNum}`;
        
        page.drawText(text, {
            x: PAGE.width / 2 - 10,
            y: PAGE.margin / 2,
            size: 10,
            font: fonts.regular,
            color: Omega.primary
        });
        
        // Confidentiality notice
        page.drawText("Confidential - Omega Consulting", {
            x: PAGE.margin,
            y: PAGE.margin / 2,
            size: 8,
            font: fonts.italic,
            color: Omega.gray
        });
    });
}

/**
 * Word wrap helper
 */
function wrapText(text, font, fontSize, maxWidth) {
    const words = text.split(" ");
    const lines = [];
    let currentLine = "";
    
    words.forEach(word => {
        const testLine = currentLine ? `${currentLine} ${word}` : word;
        const width = font.widthOfTextAtSize(testLine, fontSize);
        
        if (width <= maxWidth) {
            currentLine = testLine;
        } else {
            if (currentLine) lines.push(currentLine);
            currentLine = word;
        }
    });
    
    if (currentLine) lines.push(currentLine);
    return lines;
}

// ============================================
// USAGE EXAMPLE
// ============================================

async function generateSamplePDF() {
    const pdfDoc = await createOmegaReport({
        title: "Strategic Assessment Report",
        client: "Acme Corporation",
        date: "December 23, 2024",
        sections: [
            {
                heading: "Executive Summary",
                paragraphs: [
                    "This strategic assessment provides a comprehensive analysis of Acme Corporation's current market position and identifies key opportunities for growth and optimization.",
                    "Our findings indicate significant potential in digital transformation initiatives, with projected ROI of 250% over three years."
                ]
            },
            {
                heading: "Key Findings",
                bullets: [
                    "Current systems are operating at 65% efficiency compared to industry benchmarks",
                    "Customer acquisition costs have increased 40% over the past two years",
                    "Digital maturity score of 2.3 out of 5.0 indicates significant room for improvement",
                    "Employee engagement in technology initiatives is below industry average"
                ]
            },
            {
                heading: "Financial Summary",
                table: {
                    headers: ["Category", "Year 1", "Year 2", "Year 3"],
                    rows: [
                        ["Investment", "$500K", "$300K", "$200K"],
                        ["Savings", "$150K", "$450K", "$600K"],
                        ["Net Benefit", "-$350K", "$150K", "$400K"],
                        ["Cumulative", "-$350K", "-$200K", "$200K"]
                    ]
                }
            },
            {
                heading: "Recommendations",
                bullets: [
                    "Implement cloud-first strategy for all new technology initiatives",
                    "Establish a digital Center of Excellence to drive transformation",
                    "Invest in employee training and change management programs",
                    "Modernize legacy ERP system within 18-month timeframe"
                ]
            }
        ]
    });
    
    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync("Acme_StrategicAssessment_2024-12-23.pdf", pdfBytes);
    console.log("PDF report generated successfully!");
}

generateSamplePDF();
```

---

## Merge PDFs

```javascript
/**
 * Merge multiple PDFs into one
 */
async function mergePDFs(pdfPaths, outputPath) {
    const mergedPdf = await PDFDocument.create();
    
    for (const pdfPath of pdfPaths) {
        const pdfBytes = fs.readFileSync(pdfPath);
        const pdf = await PDFDocument.load(pdfBytes);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach(page => mergedPdf.addPage(page));
    }
    
    const mergedBytes = await mergedPdf.save();
    fs.writeFileSync(outputPath, mergedBytes);
    return outputPath;
}
```

---

## Add Watermark

```javascript
/**
 * Add Omega watermark to existing PDF
 */
async function addWatermark(inputPath, outputPath, watermarkText = "DRAFT") {
    const pdfBytes = fs.readFileSync(inputPath);
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    
    const pages = pdfDoc.getPages();
    pages.forEach(page => {
        const { width, height } = page.getSize();
        
        page.drawText(watermarkText, {
            x: width / 2 - 100,
            y: height / 2,
            size: 60,
            font: font,
            color: rgb(0.9, 0.9, 0.9),
            rotate: degrees(45),
            opacity: 0.3
        });
    });
    
    const newPdfBytes = await pdfDoc.save();
    fs.writeFileSync(outputPath, newPdfBytes);
    return outputPath;
}
```
