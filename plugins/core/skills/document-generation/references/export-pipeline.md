# Export Pipeline Examples

## Markdown → DOCX → PDF Workflow

```javascript
const mammoth = require("mammoth");
const { Document, Packer, Paragraph, TextRun, HeadingLevel } = require("docx");
const { PDFDocument } = require("pdf-lib");
const { marked } = require("marked");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Omega Branding
const Omega = {
    primary: "1B4F72",
    white: "FFFFFF"
};

/**
 * Convert Markdown to DOCX with Omega branding
 */
async function markdownToDocx(mdContent, outputPath, config = {}) {
    const { title, author } = config;
    
    // Parse markdown
    const tokens = marked.lexer(mdContent);
    const children = [];
    
    tokens.forEach(token => {
        if (token.type === "heading") {
            const level = token.depth;
            children.push(new Paragraph({
                text: token.text,
                heading: HeadingLevel[`HEADING_${level}`],
                spacing: { before: 400, after: 200 },
                children: [new TextRun({
                    text: token.text,
                    bold: true,
                    color: Omega.primary,
                    size: 48 - (level * 4)
                })]
            }));
        } else if (token.type === "paragraph") {
            children.push(new Paragraph({
                children: [new TextRun({ text: token.text, size: 22 })],
                spacing: { after: 200 }
            }));
        } else if (token.type === "list") {
            token.items.forEach(item => {
                children.push(new Paragraph({
                    text: item.text,
                    bullet: { level: 0 },
                    spacing: { after: 100 }
                }));
            });
        }
    });
    
    const doc = new Document({
        creator: author || "Omega Consulting",
        title: title || "Document",
        sections: [{ children }]
    });
    
    const buffer = await Packer.toBuffer(doc);
    fs.writeFileSync(outputPath, buffer);
    
    return outputPath;
}

/**
 * Convert DOCX to PDF using LibreOffice (if installed)
 * Alternative: Use a cloud service API
 */
function docxToPdf(docxPath, outputDir) {
    const pdfPath = path.join(
        outputDir,
        path.basename(docxPath, ".docx") + ".pdf"
    );
    
    try {
        // Option 1: LibreOffice (free, cross-platform)
        execSync(`soffice --headless --convert-to pdf --outdir "${outputDir}" "${docxPath}"`, {
            stdio: "pipe"
        });
        console.log(`PDF created: ${pdfPath}`);
        return pdfPath;
    } catch (error) {
        console.error("LibreOffice not found. Using alternative method...");
        
        // Option 2: Return DOCX path if PDF conversion fails
        // In production, use a service like DocRaptor, CloudConvert, etc.
        return null;
    }
}

/**
 * Complete export pipeline
 */
async function exportPipeline(inputPath, outputDir, options = {}) {
    const { format = "all" } = options;
    const baseName = path.basename(inputPath, path.extname(inputPath));
    const results = { source: inputPath, outputs: [] };
    
    // Read source content
    let content;
    const ext = path.extname(inputPath).toLowerCase();
    
    if (ext === ".md") {
        content = fs.readFileSync(inputPath, "utf8");
    } else if (ext === ".docx") {
        const result = await mammoth.extractRawText({ path: inputPath });
        content = result.value;
    }
    
    // Export to DOCX
    if (format === "all" || format === "docx") {
        const docxPath = path.join(outputDir, `${baseName}.docx`);
        await markdownToDocx(content, docxPath, options);
        results.outputs.push({ format: "docx", path: docxPath });
        console.log(`✓ DOCX created: ${docxPath}`);
    }
    
    // Export to PDF
    if (format === "all" || format === "pdf") {
        const docxPath = path.join(outputDir, `${baseName}.docx`);
        if (!fs.existsSync(docxPath)) {
            await markdownToDocx(content, docxPath, options);
        }
        const pdfPath = docxToPdf(docxPath, outputDir);
        if (pdfPath) {
            results.outputs.push({ format: "pdf", path: pdfPath });
            console.log(`✓ PDF created: ${pdfPath}`);
        }
    }
    
    return results;
}

// ============================================
// BATCH PROCESSING
// ============================================

/**
 * Process multiple files
 */
async function batchExport(inputFiles, outputDir, options = {}) {
    const results = [];
    
    for (const inputPath of inputFiles) {
        try {
            const result = await exportPipeline(inputPath, outputDir, options);
            results.push({ success: true, ...result });
        } catch (error) {
            results.push({
                success: false,
                source: inputPath,
                error: error.message
            });
        }
    }
    
    // Summary
    const successful = results.filter(r => r.success).length;
    console.log(`\nBatch complete: ${successful}/${results.length} files processed`);
    
    return results;
}

/**
 * Watch folder for new files and auto-export
 */
function watchAndExport(inputDir, outputDir, options = {}) {
    const chokidar = require("chokidar");
    
    const watcher = chokidar.watch(inputDir, {
        ignored: /^\./,
        persistent: true
    });
    
    watcher.on("add", async (filePath) => {
        const ext = path.extname(filePath).toLowerCase();
        if ([".md", ".docx"].includes(ext)) {
            console.log(`New file detected: ${filePath}`);
            await exportPipeline(filePath, outputDir, options);
        }
    });
    
    console.log(`Watching ${inputDir} for new files...`);
    return watcher;
}

// ============================================
// USAGE EXAMPLES
// ============================================

// Single file export
async function example1() {
    await exportPipeline(
        "03_Recommendations/strategy-report.md",
        "05_Deliverables_Final/",
        { title: "Strategic Recommendations", author: "Omega Team" }
    );
}

// Batch export all markdown files
async function example2() {
    const files = [
        "01_Discovery/findings.md",
        "02_Analysis/gap-analysis.md",
        "03_Recommendations/roadmap.md"
    ];
    
    await batchExport(files, "05_Deliverables_Final/", {
        format: "all"
    });
}

// Export to specific format only
async function example3() {
    await exportPipeline(
        "report.md",
        "./output/",
        { format: "pdf" }
    );
}
```

---

## Required Packages

```bash
npm install mammoth docx pdf-lib marked chokidar
```

## Optional: LibreOffice for PDF conversion

LibreOffice provides free, high-quality DOCX to PDF conversion:

- **Windows**: Download from <https://www.libreoffice.org/>
- **Mac**: `brew install libreoffice`
- **Linux**: `apt install libreoffice`
