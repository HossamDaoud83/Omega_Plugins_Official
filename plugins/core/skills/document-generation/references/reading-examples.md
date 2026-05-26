# Document Reading Examples

## Reading DOCX Files

### Using mammoth (recommended for text extraction)

```javascript
const mammoth = require("mammoth");
const fs = require("fs");

/**
 * Extract plain text from DOCX file
 */
async function readDocxAsText(filePath) {
    const result = await mammoth.extractRawText({ path: filePath });
    return {
        text: result.value,
        messages: result.messages
    };
}

/**
 * Convert DOCX to HTML (preserves some formatting)
 */
async function docxToHtml(filePath) {
    const result = await mammoth.convertToHtml({ path: filePath });
    return {
        html: result.value,
        messages: result.messages
    };
}

/**
 * Extract DOCX with custom style mappings
 */
async function readDocxWithStyles(filePath) {
    const options = {
        styleMap: [
            "p[style-name='Heading 1'] => h1:fresh",
            "p[style-name='Heading 2'] => h2:fresh",
            "p[style-name='Quote'] => blockquote:fresh",
            "r[style-name='Strong'] => strong"
        ]
    };
    
    const result = await mammoth.convertToHtml({ path: filePath }, options);
    return result.value;
}

// Example usage
async function processDocx(filePath) {
    console.log("Reading DOCX file:", filePath);
    
    const textResult = await readDocxAsText(filePath);
    console.log("Extracted text length:", textResult.text.length);
    console.log("First 500 characters:", textResult.text.substring(0, 500));
    
    const htmlResult = await docxToHtml(filePath);
    console.log("HTML output length:", htmlResult.html.length);
    
    return {
        text: textResult.text,
        html: htmlResult.html
    };
}
```

### Using docx library (for detailed structure)

```javascript
const { Document } = require("docx");
const AdmZip = require("adm-zip");
const xml2js = require("xml2js");

/**
 * Extract structured content from DOCX
 * (DOCX files are ZIP archives with XML inside)
 */
async function readDocxStructured(filePath) {
    const zip = new AdmZip(filePath);
    const documentXml = zip.getEntry("word/document.xml");
    
    if (!documentXml) {
        throw new Error("Invalid DOCX file");
    }
    
    const xmlContent = documentXml.getData().toString("utf8");
    const parser = new xml2js.Parser();
    const result = await parser.parseStringPromise(xmlContent);
    
    return result;
}
```

---

## Reading PDF Files

### Using pdf-parse (recommended)

```javascript
const fs = require("fs");
const pdfParse = require("pdf-parse");

/**
 * Extract text and metadata from PDF
 */
async function readPdf(filePath) {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdfParse(dataBuffer);
    
    return {
        text: data.text,
        info: data.info,           // PDF metadata
        metadata: data.metadata,   // XML metadata if present
        version: data.version,     // PDF version
        numPages: data.numpages,
        numRender: data.numrender
    };
}

/**
 * Extract text from specific pages only
 */
async function readPdfPages(filePath, startPage, endPage) {
    const dataBuffer = fs.readFileSync(filePath);
    
    const options = {
        max: endPage,  // Maximum pages to parse
        pagerender: (pageData) => {
            // Custom page rendering
            return pageData.getTextContent().then(textContent => {
                let text = "";
                for (let item of textContent.items) {
                    text += item.str + " ";
                }
                return text;
            });
        }
    };
    
    const data = await pdfParse(dataBuffer, options);
    return data.text;
}

/**
 * Extract PDF metadata only (faster)
 */
async function getPdfMetadata(filePath) {
    const dataBuffer = fs.readFileSync(filePath);
    
    // Parse only first page for speed
    const options = { max: 1 };
    const data = await pdfParse(dataBuffer, options);
    
    return {
        info: data.info,
        metadata: data.metadata,
        version: data.version,
        totalPages: data.numpages
    };
}

// Example usage
async function processPdf(filePath) {
    console.log("Reading PDF file:", filePath);
    
    const result = await readPdf(filePath);
    
    console.log("=== PDF Info ===");
    console.log("Title:", result.info?.Title || "N/A");
    console.log("Author:", result.info?.Author || "N/A");
    console.log("Created:", result.info?.CreationDate || "N/A");
    console.log("Pages:", result.numPages);
    console.log("PDF Version:", result.version);
    
    console.log("\n=== Text Content (first 1000 chars) ===");
    console.log(result.text.substring(0, 1000));
    
    return result;
}
```

### Using pdf-lib (for structure/manipulation)

```javascript
const { PDFDocument } = require("pdf-lib");
const fs = require("fs");

/**
 * Get PDF page count and metadata without full text extraction
 */
async function getPdfInfo(filePath) {
    const pdfBytes = fs.readFileSync(filePath);
    const pdfDoc = await PDFDocument.load(pdfBytes);
    
    return {
        pageCount: pdfDoc.getPageCount(),
        title: pdfDoc.getTitle(),
        author: pdfDoc.getAuthor(),
        subject: pdfDoc.getSubject(),
        creator: pdfDoc.getCreator(),
        producer: pdfDoc.getProducer(),
        creationDate: pdfDoc.getCreationDate(),
        modificationDate: pdfDoc.getModificationDate()
    };
}

/**
 * Extract specific pages from PDF
 */
async function extractPdfPages(inputPath, outputPath, pageNumbers) {
    const pdfBytes = fs.readFileSync(inputPath);
    const pdfDoc = await PDFDocument.load(pdfBytes);
    
    const newPdf = await PDFDocument.create();
    const copiedPages = await newPdf.copyPages(pdfDoc, pageNumbers.map(n => n - 1));
    copiedPages.forEach(page => newPdf.addPage(page));
    
    const newPdfBytes = await newPdf.save();
    fs.writeFileSync(outputPath, newPdfBytes);
    
    return outputPath;
}
```

---

## Universal Document Reader

```javascript
const mammoth = require("mammoth");
const pdfParse = require("pdf-parse");
const fs = require("fs");
const path = require("path");

/**
 * Read any supported document type
 * Supports: .docx, .pdf, .txt
 */
async function readDocument(filePath) {
    const extension = path.extname(filePath).toLowerCase();
    
    switch (extension) {
        case ".docx":
            return await readDocxDocument(filePath);
        case ".pdf":
            return await readPdfDocument(filePath);
        case ".txt":
            return readTextDocument(filePath);
        default:
            throw new Error(`Unsupported file type: ${extension}`);
    }
}

async function readDocxDocument(filePath) {
    const result = await mammoth.extractRawText({ path: filePath });
    return {
        type: "docx",
        text: result.value,
        metadata: {},
        pages: null  // DOCX doesn't have page concept
    };
}

async function readPdfDocument(filePath) {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdfParse(dataBuffer);
    return {
        type: "pdf",
        text: data.text,
        metadata: data.info,
        pages: data.numpages
    };
}

function readTextDocument(filePath) {
    const text = fs.readFileSync(filePath, "utf8");
    return {
        type: "txt",
        text: text,
        metadata: {},
        pages: null
    };
}

/**
 * Process multiple documents and extract content
 */
async function batchReadDocuments(filePaths) {
    const results = [];
    
    for (const filePath of filePaths) {
        try {
            const content = await readDocument(filePath);
            results.push({
                file: filePath,
                success: true,
                content: content
            });
        } catch (error) {
            results.push({
                file: filePath,
                success: false,
                error: error.message
            });
        }
    }
    
    return results;
}

// Example usage for consulting engagement
async function processClientDocuments(documentDir) {
    const files = fs.readdirSync(documentDir)
        .filter(f => [".docx", ".pdf", ".txt"].includes(path.extname(f).toLowerCase()))
        .map(f => path.join(documentDir, f));
    
    console.log(`Found ${files.length} documents to process`);
    
    const results = await batchReadDocuments(files);
    
    // Summary
    const successful = results.filter(r => r.success).length;
    const failed = results.filter(r => !r.success).length;
    
    console.log(`\nProcessing complete: ${successful} successful, ${failed} failed`);
    
    // Combine all text for analysis
    const allText = results
        .filter(r => r.success)
        .map(r => r.content.text)
        .join("\n\n---\n\n");
    
    return {
        results: results,
        combinedText: allText,
        summary: { successful, failed, total: files.length }
    };
}
```

---

## Required Packages

Install these packages to use the reading examples:

```bash
npm install mammoth pdf-parse pdf-lib adm-zip xml2js
```

| Package | Purpose |
|---------|---------|
| `mammoth` | Best for DOCX text extraction |
| `pdf-parse` | PDF text extraction |
| `pdf-lib` | PDF manipulation and metadata |
| `adm-zip` | DOCX internal structure access |
| `xml2js` | Parse DOCX XML content |
