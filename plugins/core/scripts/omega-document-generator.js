/**
 * Omega Unified Document Generator
 *
 * A comprehensive document generation system that creates professionally
 * branded documents in multiple formats using the unified Omega branding configuration.
 *
 * Supported formats: DOCX, PDF, XLSX, PPTX
 *
 * Usage:
 *   const generator = require('./omega-document-generator');
 *   await generator.createDocument('docx', options);
 *   await generator.createDocument('pdf', options);
 *   await generator.createDocument('xlsx', options);
 *   await generator.createDocument('pptx', options);
 */

const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
        WidthType, AlignmentType, BorderStyle, Header, Footer,
        PageNumber, ImageRun, HeadingLevel, PageBreak,
        TextWrappingType, HorizontalPositionRelativeFrom,
        VerticalPositionRelativeFrom } = require('docx');
const PDFDocument = require('pdfkit');
const ExcelJS = require('exceljs');
const PptxGenJS = require('pptxgenjs');
const fs = require('fs');
const path = require('path');

// Load unified branding configuration
const projectRoot = path.resolve(__dirname, '..');
const brandingPath = path.join(projectRoot, 'assets', 'omega-branding.json');
const BRANDING = JSON.parse(fs.readFileSync(brandingPath, 'utf8'));

// Resolve asset paths
const logoPath = path.join(projectRoot, BRANDING.assets.logos.full);
const outputDir = path.join(projectRoot, BRANDING.documents.outputDirectory);

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// ============================================
// SHARED UTILITIES
// ============================================

/**
 * Load logo buffer if available
 */
function getLogoBuffer() {
    return fs.existsSync(logoPath) ? fs.readFileSync(logoPath) : null;
}

/**
 * Get color value in various formats
 */
function getColor(colorKey, format = 'hex') {
    const color = BRANDING.colors[colorKey] || BRANDING.colors.status[colorKey];
    if (!color) return BRANDING.colors.primary[format === 'hex' ? 'hexNoHash' : format];

    switch (format) {
        case 'hex': return color.hex;
        case 'hexNoHash': return color.hexNoHash;
        case 'argb': return color.argb;
        case 'rgb': return color.rgb;
        default: return color.hexNoHash;
    }
}

/**
 * Get font size
 */
function getFontSize(sizeKey, format = 'pt') {
    const size = BRANDING.typography.sizes[sizeKey];
    return format === 'docx' ? size.docxHalfPt : size.pt;
}

/**
 * Generate output filename
 */
function generateFilename(title, extension) {
    const sanitized = title.replace(/[^a-zA-Z0-9]/g, '_');
    const date = new Date().toISOString().split('T')[0];
    return `Omega_${sanitized}_${date}${extension}`;
}

// ============================================
// DOCX GENERATOR
// ============================================

class DocxGenerator {
    constructor() {
        this.logoBuffer = getLogoBuffer();
    }

    /**
     * Parse text with markdown-style formatting (**bold**) into TextRun array
     * @param {string} text - Text with **bold** markers
     * @param {object} baseOptions - Base options for all TextRuns
     * @returns {Array} Array of TextRun objects
     */
    parseFormattedText(text, baseOptions = {}) {
        const parts = [];
        const regex = /\*\*(.*?)\*\*/g;
        let lastIndex = 0;
        let match;

        while ((match = regex.exec(text)) !== null) {
            // Add text before the bold part
            if (match.index > lastIndex) {
                parts.push(new TextRun({
                    text: text.substring(lastIndex, match.index),
                    font: BRANDING.typography.fonts.body,
                    size: getFontSize('body', 'docx'),
                    ...baseOptions
                }));
            }
            // Add bold text
            parts.push(new TextRun({
                text: match[1],
                font: BRANDING.typography.fonts.body,
                size: getFontSize('body', 'docx'),
                bold: true,
                ...baseOptions
            }));
            lastIndex = regex.lastIndex;
        }

        // Add remaining text
        if (lastIndex < text.length) {
            parts.push(new TextRun({
                text: text.substring(lastIndex),
                font: BRANDING.typography.fonts.body,
                size: getFontSize('body', 'docx'),
                ...baseOptions
            }));
        }

        return parts.length > 0 ? parts : [new TextRun({
            text: text,
            font: BRANDING.typography.fonts.body,
            size: getFontSize('body', 'docx'),
            ...baseOptions
        })];
    }

    createFloatingLogo() {
        if (!this.logoBuffer) return [];

        return [new Paragraph({
            children: [
                new ImageRun({
                    data: this.logoBuffer,
                    transformation: {
                        width: BRANDING.assets.dimensions.logoWidthPx,
                        height: BRANDING.assets.dimensions.logoHeightPx
                    },
                    floating: {
                        horizontalPosition: {
                            relative: HorizontalPositionRelativeFrom.PAGE,
                            offset: 914400 // 1 inch
                        },
                        verticalPosition: {
                            relative: VerticalPositionRelativeFrom.PAGE,
                            offset: 457200 // 0.5 inch
                        },
                        wrap: { type: TextWrappingType.NONE }
                    }
                })
            ]
        })];
    }

    /**
     * Create document header with logo and document title
     * Includes: Logo (left), Document title (right)
     * @param {string} documentTitle - Main document title
     */
    createHeader(documentTitle = '') {
        const headerChildren = [...this.createFloatingLogo()];

        // Add document title
        if (documentTitle) {
            headerChildren.push(new Paragraph({
                alignment: AlignmentType.RIGHT,
                spacing: { after: 100 },
                children: [
                    new TextRun({
                        text: documentTitle.toUpperCase(),
                        font: BRANDING.typography.fonts.heading,
                        size: getFontSize('small', 'docx'),
                        bold: true,
                        color: getColor('primary', 'hexNoHash')
                    })
                ]
            }));
        }

        return new Header({
            children: headerChildren
        });
    }

    /**
     * Create document footer with company name, contact information, and page numbers
     * Format: Company name | Contact info | Page X of Y
     */
    createFooter() {
        return new Footer({
            children: [
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { before: 100 },
                    children: [
                        new TextRun({
                            text: BRANDING.company.name.toUpperCase() + ' | ',
                            font: BRANDING.typography.fonts.body,
                            size: getFontSize('footer', 'docx'),
                            bold: true,
                            color: getColor('primary', 'hexNoHash')
                        }),
                        new TextRun({
                            text: 'Page ',
                            font: BRANDING.typography.fonts.body,
                            size: getFontSize('footer', 'docx'),
                            color: getColor('primary', 'hexNoHash')
                        }),
                        new TextRun({ children: [PageNumber.CURRENT] }),
                        new TextRun({ text: ' of ' }),
                        new TextRun({ children: [PageNumber.TOTAL_PAGES] })
                    ]
                }),
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                        new TextRun({
                            text: BRANDING.company.contact.address.formatted + ' | ' + BRANDING.company.contact.email,
                            font: BRANDING.typography.fonts.body,
                            size: getFontSize('footer', 'docx'),
                            color: getColor('gray', 'hexNoHash')
                        })
                    ]
                })
            ]
        });
    }

    /**
     * Create heading using Word's native heading styles
     * This allows users to modify formatting through Word's style editor
     * @param {string} text - Heading text
     * @param {number} level - Heading level (1-4)
     */
    createHeading(text, level = 1) {
        const headingLevel = level === 1 ? HeadingLevel.HEADING_1 :
                            level === 2 ? HeadingLevel.HEADING_2 :
                            level === 3 ? HeadingLevel.HEADING_3 : HeadingLevel.HEADING_4;

        return new Paragraph({
            heading: headingLevel,
            text: text,
            spacing: { after: 200, before: 200 }
        });
    }

    createParagraph(text, options = {}) {
        return new Paragraph({
            spacing: { after: 200 },
            ...options,
            children: this.parseFormattedText(text, options.textOptions || {})
        });
    }

    /**
     * Create a horizontal divider line
     */
    createDivider() {
        return new Paragraph({
            border: {
                bottom: {
                    color: getColor('primary', 'hexNoHash'),
                    space: 1,
                    value: BorderStyle.SINGLE,
                    size: 6
                }
            },
            spacing: { before: 200, after: 200 }
        });
    }

    /**
     * Create a bulleted list from array of items
     * @param {Array<string>} items - List items (can contain **bold**)
     */
    createBulletList(items) {
        return items.map(item => new Paragraph({
            bullet: { level: 0 },
            spacing: { after: 100 },
            children: this.parseFormattedText(item, {})
        }));
    }

    createTable(headers, rows) {
        return new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                new TableRow({
                    children: headers.map(h => new TableCell({
                        shading: { fill: getColor('primary', 'hexNoHash') },
                        children: [new Paragraph({
                            children: this.parseFormattedText(String(h), {
                                bold: true,
                                color: getColor('white', 'hexNoHash')
                            })
                        })]
                    }))
                }),
                ...rows.map((row, idx) => new TableRow({
                    children: row.map(cell => new TableCell({
                        shading: idx % 2 === 1 ? { fill: getColor('tableAltRow', 'hexNoHash') } : undefined,
                        children: [new Paragraph({
                            children: this.parseFormattedText(String(cell), {})
                        })]
                    }))
                }))
            ]
        });
    }

    async generate(options) {
        const { title, sections = [], outputPath, metadata = {} } = options;

        const doc = new Document({
            styles: {
                default: {
                    document: {
                        run: {
                            font: BRANDING.typography.fonts.body,
                            size: getFontSize('body', 'docx')
                        }
                    }
                },
                paragraphStyles: [
                    {
                        id: 'Heading1',
                        name: 'Heading 1',
                        basedOn: 'Normal',
                        next: 'Normal',
                        run: {
                            font: BRANDING.typography.fonts.heading,
                            size: getFontSize('heading1', 'docx'),
                            bold: true,
                            color: getColor('primary', 'hexNoHash')
                        },
                        paragraph: {
                            spacing: { before: 240, after: 120 }
                        }
                    },
                    {
                        id: 'Heading2',
                        name: 'Heading 2',
                        basedOn: 'Normal',
                        next: 'Normal',
                        run: {
                            font: BRANDING.typography.fonts.heading,
                            size: getFontSize('heading2', 'docx'),
                            bold: true,
                            color: getColor('primary', 'hexNoHash')
                        },
                        paragraph: {
                            spacing: { before: 200, after: 100 }
                        }
                    },
                    {
                        id: 'Heading3',
                        name: 'Heading 3',
                        basedOn: 'Normal',
                        next: 'Normal',
                        run: {
                            font: BRANDING.typography.fonts.body,
                            size: getFontSize('heading3', 'docx'),
                            bold: true,
                            color: getColor('primary', 'hexNoHash')
                        },
                        paragraph: {
                            spacing: { before: 160, after: 80 }
                        }
                    },
                    {
                        id: 'Heading4',
                        name: 'Heading 4',
                        basedOn: 'Normal',
                        next: 'Normal',
                        run: {
                            font: BRANDING.typography.fonts.body,
                            size: getFontSize('heading3', 'docx'),
                            bold: true,
                            color: getColor('primary', 'hexNoHash')
                        },
                        paragraph: {
                            spacing: { before: 120, after: 60 }
                        }
                    }
                ]
            },
            sections: [{
                properties: {
                    page: {
                        margin: BRANDING.layout.page.margins.twips
                    }
                },
                headers: { default: this.createHeader(title) },
                footers: { default: this.createFooter() },
                children: [
                    this.createHeading(title, 1),
                    ...sections.flatMap(section => {
                        const elements = [];
                        if (section.heading) elements.push(this.createHeading(section.heading, section.level || 2));
                        if (section.content) {
                            // Handle content with bullet points
                            if (section.content.includes('\n• ') || section.content.includes('\n- ')) {
                                // Split into lines and process bullets
                                const lines = section.content.split('\n');
                                let currentParagraph = '';
                                let bulletItems = [];

                                lines.forEach(line => {
                                    if (line.trim().startsWith('• ') || line.trim().startsWith('- ')) {
                                        // If we have accumulated paragraph text, add it first
                                        if (currentParagraph) {
                                            elements.push(this.createParagraph(currentParagraph.trim()));
                                            currentParagraph = '';
                                        }
                                        // Add bullet item (remove bullet marker)
                                        bulletItems.push(line.trim().replace(/^[•-]\s*/, ''));
                                    } else if (line.trim()) {
                                        // If we have bullets, flush them first
                                        if (bulletItems.length > 0) {
                                            elements.push(...this.createBulletList(bulletItems));
                                            bulletItems = [];
                                        }
                                        currentParagraph += (currentParagraph ? '\n' : '') + line;
                                    }
                                });

                                // Flush remaining content
                                if (bulletItems.length > 0) {
                                    elements.push(...this.createBulletList(bulletItems));
                                }
                                if (currentParagraph) {
                                    elements.push(this.createParagraph(currentParagraph.trim()));
                                }
                            } else {
                                elements.push(this.createParagraph(section.content));
                            }
                        }
                        if (section.bullets) elements.push(...this.createBulletList(section.bullets));
                        if (section.table) elements.push(this.createTable(section.table.headers, section.table.rows));
                        if (section.divider) elements.push(this.createDivider());
                        if (section.pageBreak) elements.push(new Paragraph({ children: [new PageBreak()] }));
                        return elements;
                    })
                ]
            }]
        });

        const buffer = await Packer.toBuffer(doc);
        const finalPath = outputPath || path.join(outputDir, generateFilename(title, '.docx'));
        fs.writeFileSync(finalPath, buffer);
        return finalPath;
    }
}

// ============================================
// PDF GENERATOR
// ============================================

class PdfGenerator {
    constructor() {
        this.primaryColor = BRANDING.colors.primary.hex;
        this.layout = BRANDING.layout;
    }

    addHeaderFooter(doc, pageNum, totalPages, title) {
        doc.save();

        // Logo
        if (fs.existsSync(logoPath)) {
            doc.image(logoPath,
                this.layout.header.logoPosition.x,
                this.layout.header.logoPosition.y,
                { width: BRANDING.assets.dimensions.logoWidthPx, height: BRANDING.assets.dimensions.logoHeightPx }
            );
        }

        // Header line (between logo and text)
        doc.moveTo(this.layout.header.lineStartX, this.layout.header.lineY)
           .lineTo(523, this.layout.header.lineY)
           .strokeColor(this.primaryColor)
           .lineWidth(1)
           .stroke();

        // Header text
        doc.fontSize(getFontSize('footer'))
           .fillColor(this.primaryColor)
           .text(BRANDING.company.confidentialityNotice,
                 this.layout.header.textX,
                 this.layout.header.textY,
                 { align: 'right', width: this.layout.header.textWidth });

        // Footer
        doc.moveTo(72, this.layout.footer.lineY)
           .lineTo(523, this.layout.footer.lineY)
           .stroke();
        doc.fontSize(getFontSize('footer'))
           .fillColor(this.primaryColor)
           .text(`${title} | Page ${pageNum} of ${totalPages}`,
                 72, this.layout.footer.textY,
                 { align: 'center', width: 451 });

        doc.restore();
    }

    async generate(options) {
        const { title, sections = [], outputPath } = options;

        return new Promise((resolve) => {
            const finalPath = outputPath || path.join(outputDir, generateFilename(title, '.pdf'));
            const doc = new PDFDocument({
                size: 'A4',
                margins: BRANDING.layout.page.margins.points,
                info: {
                    Title: title,
                    Author: BRANDING.company.name,
                    Subject: title
                }
            });

            const stream = fs.createWriteStream(finalPath);
            doc.pipe(stream);

            // Track pages for footer
            let pageCount = 1;
            const pages = [];

            doc.on('pageAdded', () => {
                pageCount++;
                pages.push(pageCount);
            });

            // Content starts after header area
            doc.y = 100;

            // Title
            doc.font('Helvetica-Bold')
               .fontSize(getFontSize('title'))
               .fillColor(this.primaryColor)
               .text(title, { align: 'left' });

            doc.moveDown();

            // Sections
            sections.forEach(section => {
                if (section.heading) {
                    doc.font('Helvetica-Bold')
                       .fontSize(getFontSize('heading1'))
                       .fillColor(this.primaryColor)
                       .text(section.heading);
                    doc.moveDown(0.5);
                }

                if (section.content) {
                    doc.font('Helvetica')
                       .fontSize(getFontSize('body'))
                       .fillColor('#000000')
                       .text(section.content);
                    doc.moveDown();
                }

                if (section.pageBreak) {
                    doc.addPage();
                    doc.y = 100;
                }
            });

            // Add headers/footers to all pages
            const allPages = doc.bufferedPageRange();
            for (let i = 0; i < allPages.count; i++) {
                doc.switchToPage(i);
                this.addHeaderFooter(doc, i + 1, allPages.count, title);
            }

            doc.end();

            stream.on('finish', () => resolve(finalPath));
        });
    }
}

// ============================================
// EXCEL GENERATOR
// ============================================

class ExcelGenerator {
    constructor() {
        this.colors = BRANDING.colors;
    }

    getHeaderStyle() {
        return {
            font: {
                name: BRANDING.typography.fonts.body,
                size: 11,
                bold: true,
                color: { argb: this.colors.white.argb }
            },
            fill: {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: this.colors.primary.argb }
            },
            alignment: { horizontal: 'center', vertical: 'middle' },
            border: {
                top: { style: 'thin', color: { argb: this.colors.primary.argb } },
                bottom: { style: 'thin', color: { argb: this.colors.primary.argb } },
                left: { style: 'thin', color: { argb: this.colors.primary.argb } },
                right: { style: 'thin', color: { argb: this.colors.primary.argb } }
            }
        };
    }

    getDataStyle(isAltRow = false) {
        return {
            font: { name: BRANDING.typography.fonts.body, size: 11 },
            fill: isAltRow ? {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: this.colors.tableAltRow.argb }
            } : undefined,
            border: {
                top: { style: 'thin', color: { argb: this.colors.primary.argb } },
                bottom: { style: 'thin', color: { argb: this.colors.primary.argb } },
                left: { style: 'thin', color: { argb: this.colors.primary.argb } },
                right: { style: 'thin', color: { argb: this.colors.primary.argb } }
            }
        };
    }

    async generate(options) {
        const { title, sheets = [], outputPath } = options;

        const workbook = new ExcelJS.Workbook();
        workbook.creator = BRANDING.company.name;
        workbook.created = new Date();

        sheets.forEach((sheetData, sheetIdx) => {
            const sheet = workbook.addWorksheet(sheetData.name, {
                properties: { tabColor: { argb: sheetData.tabColor || this.colors.primary.argb } }
            });

            // Title row
            sheet.mergeCells(1, 1, 1, sheetData.headers.length);
            const titleCell = sheet.getCell(1, 1);
            titleCell.value = sheetData.title || title;
            titleCell.font = {
                name: BRANDING.typography.fonts.heading,
                size: 18,
                bold: true,
                color: { argb: this.colors.primary.argb }
            };
            titleCell.alignment = { horizontal: 'center' };
            sheet.getRow(1).height = 30;

            // Header row
            const headerRow = sheet.getRow(3);
            sheetData.headers.forEach((h, i) => {
                const cell = headerRow.getCell(i + 1);
                cell.value = h;
                Object.assign(cell, this.getHeaderStyle());
            });
            headerRow.height = 25;

            // Data rows
            sheetData.rows.forEach((rowData, rowIdx) => {
                const row = sheet.getRow(4 + rowIdx);
                rowData.forEach((val, colIdx) => {
                    const cell = row.getCell(colIdx + 1);
                    cell.value = val;
                    Object.assign(cell, this.getDataStyle(rowIdx % 2 === 1));
                });
            });

            // Auto-fit columns
            sheet.columns.forEach((col, i) => {
                col.width = sheetData.columnWidths?.[i] || 20;
            });
        });

        const finalPath = outputPath || path.join(outputDir, generateFilename(title, '.xlsx'));
        await workbook.xlsx.writeFile(finalPath);
        return finalPath;
    }
}

// ============================================
// PPTX GENERATOR
// ============================================

class PptxGenerator {
    constructor() {
        this.colors = BRANDING.colors;
        this.layout = BRANDING.layout.slide;
    }

    createMaster(pptx) {
        pptx.defineSlideMaster({
            title: 'Omega_MASTER',
            background: { color: 'FFFFFF' },
            objects: [
                { line: {
                    x: this.layout.safeMargin,
                    y: 0.4,
                    w: this.layout.width - this.layout.safeMargin * 2,
                    h: 0,
                    line: { color: this.colors.primary.hexNoHash, width: 2 }
                }},
                { line: {
                    x: this.layout.safeMargin,
                    y: 6.9,
                    w: this.layout.width - this.layout.safeMargin * 2,
                    h: 0,
                    line: { color: this.colors.primary.hexNoHash, width: 1 }
                }},
                { text: {
                    text: BRANDING.company.confidentialityNotice,
                    options: {
                        x: this.layout.safeMargin,
                        y: 7.0,
                        w: this.layout.width - this.layout.safeMargin * 2,
                        h: 0.3,
                        fontSize: 9,
                        color: this.colors.primary.hexNoHash,
                        align: 'center'
                    }
                }}
            ]
        });
    }

    async generate(options) {
        const { title, slides = [], outputPath } = options;

        const pptx = new PptxGenJS();
        pptx.author = BRANDING.company.name;
        pptx.title = title;
        pptx.subject = title;

        this.createMaster(pptx);

        slides.forEach(slideData => {
            const slide = pptx.addSlide({ masterName: 'Omega_MASTER' });

            // Logo placeholder
            slide.addShape(pptx.ShapeType.rect, {
                x: this.layout.safeMargin,
                y: 0.6,
                w: BRANDING.assets.dimensions.logoWidth,
                h: BRANDING.assets.dimensions.logoHeight,
                fill: { color: this.colors.primary.hexNoHash }
            });
            slide.addText('Omega', {
                x: this.layout.safeMargin,
                y: 0.6,
                w: BRANDING.assets.dimensions.logoWidth,
                h: BRANDING.assets.dimensions.logoHeight,
                fontSize: 10,
                color: 'FFFFFF',
                bold: true,
                align: 'center',
                valign: 'middle'
            });

            // Slide title
            if (slideData.title) {
                slide.addText(slideData.title, {
                    x: this.layout.safeMargin,
                    y: slideData.isTitleSlide ? 2.2 : 0.6,
                    w: this.layout.width - this.layout.safeMargin * 2,
                    h: 0.8,
                    fontSize: slideData.isTitleSlide ? 36 : 32,
                    fontFace: BRANDING.typography.fonts.heading,
                    color: this.colors.primary.hexNoHash,
                    bold: true,
                    align: slideData.isTitleSlide ? 'center' : 'left'
                });
            }

            // Subtitle
            if (slideData.subtitle) {
                slide.addText(slideData.subtitle, {
                    x: this.layout.safeMargin,
                    y: slideData.isTitleSlide ? 3.0 : 1.5,
                    w: this.layout.width - this.layout.safeMargin * 2,
                    h: 0.5,
                    fontSize: slideData.isTitleSlide ? 24 : 14,
                    fontFace: BRANDING.typography.fonts.body,
                    color: slideData.isTitleSlide ? this.colors.primary.hexNoHash : this.colors.gray.hexNoHash,
                    align: slideData.isTitleSlide ? 'center' : 'left'
                });
            }

            // Content
            if (slideData.content) {
                slide.addText(slideData.content, {
                    x: this.layout.safeMargin,
                    y: 2.0,
                    w: this.layout.width - this.layout.safeMargin * 2,
                    h: 4.0,
                    fontSize: 14,
                    fontFace: BRANDING.typography.fonts.body,
                    color: '000000'
                });
            }

            // Bullet points
            if (slideData.bullets) {
                slideData.bullets.forEach((bullet, idx) => {
                    slide.addText(bullet, {
                        x: this.layout.safeMargin + 0.3,
                        y: 1.8 + idx * 0.6,
                        w: this.layout.width - this.layout.safeMargin * 2 - 0.3,
                        h: 0.5,
                        fontSize: 14,
                        fontFace: BRANDING.typography.fonts.body,
                        color: '000000',
                        bullet: true
                    });
                });
            }

            // Table
            if (slideData.table) {
                const tableData = [
                    slideData.table.headers.map(h => ({
                        text: h,
                        options: {
                            fill: { color: this.colors.primary.hexNoHash },
                            color: 'FFFFFF',
                            bold: true
                        }
                    })),
                    ...slideData.table.rows.map((row, idx) =>
                        row.map(cell => ({
                            text: String(cell),
                            options: idx % 2 === 1 ? { fill: { color: this.colors.tableAltRow.hexNoHash } } : {}
                        }))
                    )
                ];

                slide.addTable(tableData, {
                    x: this.layout.safeMargin,
                    y: 1.8,
                    w: this.layout.width - this.layout.safeMargin * 2,
                    h: 3,
                    fontFace: BRANDING.typography.fonts.body,
                    fontSize: 11,
                    border: { type: 'solid', color: this.colors.primary.hexNoHash, pt: 0.5 }
                });
            }
        });

        const finalPath = outputPath || path.join(outputDir, generateFilename(title, '.pptx'));
        await pptx.writeFile({ fileName: finalPath });
        return finalPath;
    }
}

// ============================================
// UNIFIED API
// ============================================

const generators = {
    docx: new DocxGenerator(),
    pdf: new PdfGenerator(),
    xlsx: new ExcelGenerator(),
    pptx: new PptxGenerator()
};

/**
 * Create a document in the specified format
 * @param {string} format - 'docx', 'pdf', 'xlsx', or 'pptx'
 * @param {object} options - Document options
 * @returns {Promise<string>} - Path to generated file
 */
async function createDocument(format, options) {
    const generator = generators[format.toLowerCase()];
    if (!generator) {
        throw new Error(`Unsupported format: ${format}. Use docx, pdf, xlsx, or pptx.`);
    }
    return generator.generate(options);
}

/**
 * Create documents in multiple formats
 * @param {string[]} formats - Array of format strings
 * @param {object} options - Document options
 * @returns {Promise<object>} - Object with format keys and path values
 */
async function createMultipleFormats(formats, options) {
    const results = {};
    for (const format of formats) {
        results[format] = await createDocument(format, options);
    }
    return results;
}

/**
 * Get branding configuration
 */
function getBranding() {
    return BRANDING;
}

/**
 * Get color value
 */
function getColorValue(colorKey, format = 'hexNoHash') {
    return getColor(colorKey, format);
}

// Export
module.exports = {
    createDocument,
    createMultipleFormats,
    getBranding,
    getColor: getColorValue,
    generators,
    DocxGenerator,
    PdfGenerator,
    ExcelGenerator,
    PptxGenerator,
    BRANDING
};

// CLI Support
if (require.main === module) {
    const args = process.argv.slice(2);

    if (args.length === 0) {
        console.log(`
Omega Document Generator - CLI Usage
===================================
node omega-document-generator.js <format> <title> [output-path]

Formats: docx, pdf, xlsx, pptx

Example:
  node omega-document-generator.js docx "Project Report"
  node omega-document-generator.js pdf "Client Proposal" ./output/proposal.pdf
`);
        process.exit(0);
    }

    const [format, title, outputPath] = args;

    createDocument(format, {
        title: title || 'Omega Document',
        sections: [
            { heading: 'Overview', content: 'This is a sample document generated with Omega branding.' },
            { heading: 'Summary', content: 'The document demonstrates consistent professional formatting.' }
        ],
        slides: [
            { title: 'Omega Presentation', subtitle: 'Generated Document', isTitleSlide: true },
            { title: 'Overview', bullets: ['Point 1', 'Point 2', 'Point 3'] }
        ],
        sheets: [
            {
                name: 'Data',
                title: 'Sample Data',
                headers: ['Column A', 'Column B', 'Column C'],
                rows: [['Data 1', 'Data 2', 'Data 3'], ['Data 4', 'Data 5', 'Data 6']]
            }
        ],
        outputPath
    }).then(path => {
        console.log(`Document created: ${path}`);
    }).catch(err => {
        console.error('Error:', err.message);
        process.exit(1);
    });
}
