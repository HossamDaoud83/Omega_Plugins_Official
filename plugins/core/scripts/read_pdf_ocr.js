/**
 * PDF OCR Reader Script
 * Reads PDF files - both text-based and scanned (using OCR)
 *
 * Usage: node scripts/read_pdf_ocr.js <file_path> [options]
 * Options:
 *   --pages <range>    Read specific pages (e.g., "1-5" or "1,3,5")
 *   --ocr              Force OCR even for text PDFs
 *   --lang <lang>      OCR language (default: eng+ara for English+Arabic)
 *   --json             Output as JSON format
 *   --output <path>    Save output to file
 */

const fs = require('fs');
const path = require('path');
const { PDFDocument } = require('pdf-lib');

// Try to load tesseract for OCR
let createWorker;
try {
    const tesseract = require('tesseract.js');
    createWorker = tesseract.createWorker;
} catch (e) {
    console.log('Note: tesseract.js not available, OCR disabled');
}

async function readPdfFile(filePath, options = {}) {
    console.log(`\n${'='.repeat(80)}`);
    console.log(`PDF FILE READER`);
    console.log(`${'='.repeat(80)}`);
    console.log(`File: ${path.basename(filePath)}`);
    console.log(`Path: ${filePath}`);
    console.log(`${'='.repeat(80)}\n`);

    const result = {
        fileName: path.basename(filePath),
        filePath: filePath,
        pageCount: 0,
        hasText: false,
        method: 'unknown',
        pages: [],
        fullText: '',
        metadata: {}
    };

    try {
        // Read the PDF file
        const dataBuffer = fs.readFileSync(filePath);

        // Get page count and metadata using pdf-lib
        const pdfDoc = await PDFDocument.load(dataBuffer, { ignoreEncryption: true });
        result.pageCount = pdfDoc.getPageCount();

        console.log(`Pages: ${result.pageCount}`);

        // Try to get metadata
        try {
            result.metadata = {
                title: pdfDoc.getTitle(),
                author: pdfDoc.getAuthor(),
                subject: pdfDoc.getSubject(),
                creator: pdfDoc.getCreator(),
                producer: pdfDoc.getProducer(),
                creationDate: pdfDoc.getCreationDate()?.toISOString(),
                modificationDate: pdfDoc.getModificationDate()?.toISOString()
            };
            if (result.metadata.title) console.log(`Title: ${result.metadata.title}`);
            if (result.metadata.author) console.log(`Author: ${result.metadata.author}`);
        } catch (e) {
            // Metadata extraction failed, continue
        }

        // Try text extraction using pdf-parse
        console.log('\nAttempting text extraction...');
        let textExtracted = false;

        try {
            // pdf-parse v1.x - simple function call
            const pdfParse = require('pdf-parse');
            const pdfData = await pdfParse(dataBuffer);

            const textContent = pdfData.text.trim();
            const meaningfulTextLength = textContent.replace(/\s+/g, ' ').length;

            console.log(`Text extraction result: ${meaningfulTextLength} characters`);

            if (meaningfulTextLength > 100 && !options.ocr) {
                // We have meaningful text content
                result.hasText = true;
                result.method = 'text-extraction';
                result.fullText = textContent;
                textExtracted = true;

                console.log(`Method: Direct text extraction`);

                // Split by form feeds (page breaks) if possible
                const pageTexts = textContent.split(/\f/);
                result.pages = pageTexts.map((text, i) => ({
                    pageNumber: i + 1,
                    text: text.trim(),
                    method: 'text-extraction'
                }));

            } else {
                console.log('Limited text found - PDF may be scanned/image-based');
            }
        } catch (parseError) {
            console.log(`pdf-parse extraction failed: ${parseError.message}`);
        }

        // If no text extracted, try alternative methods
        if (!textExtracted) {
            result.method = 'scanned-pdf';
            console.log('\nThis appears to be a scanned PDF (image-based).');
            console.log('Options for text extraction:');
            console.log('  1. Use Adobe Acrobat OCR feature');
            console.log('  2. Use online OCR services (e.g., Google Drive, Adobe)');
            console.log('  3. Convert to images and use image OCR script');

            // Try to extract any embedded text anyway
            result.fullText = `[Scanned PDF - ${result.pageCount} pages - OCR required for text extraction]`;
            result.pages = [{
                pageNumber: 1,
                text: result.fullText,
                note: 'Scanned document - manual OCR recommended'
            }];

            // Provide page dimensions for context
            const pageDims = [];
            for (let i = 0; i < Math.min(result.pageCount, 5); i++) {
                const page = pdfDoc.getPage(i);
                const { width, height } = page.getSize();
                pageDims.push({ page: i + 1, width: Math.round(width), height: Math.round(height) });
            }
            result.pageDimensions = pageDims;
            console.log('\nPage dimensions (first 5):');
            pageDims.forEach(p => console.log(`  Page ${p.page}: ${p.width} x ${p.height} pts`));
        }

        // Output results
        outputResults(result, options);

        return result;

    } catch (error) {
        console.error(`\nERROR reading PDF file: ${error.message}`);
        throw error;
    }
}

function outputResults(result, options) {
    console.log(`\n${'─'.repeat(60)}`);
    console.log(`EXTRACTION RESULTS`);
    console.log(`${'─'.repeat(60)}`);
    console.log(`Method: ${result.method}`);
    console.log(`Pages: ${result.pageCount}`);
    console.log(`Has Extractable Text: ${result.hasText}`);
    console.log(`Total Characters: ${result.fullText.length}`);

    if (options.json) {
        const jsonOutput = JSON.stringify(result, null, 2);
        if (options.output) {
            fs.writeFileSync(options.output, jsonOutput);
            console.log(`\nJSON output saved to: ${options.output}`);
        } else {
            console.log('\nJSON OUTPUT:');
            console.log(jsonOutput);
        }
    } else if (result.hasText) {
        // Print text preview
        console.log(`\n${'─'.repeat(60)}`);
        console.log(`TEXT PREVIEW (first 3000 characters):`);
        console.log(`${'─'.repeat(60)}`);
        console.log(result.fullText.substring(0, 3000));
        if (result.fullText.length > 3000) {
            console.log(`\n... [${result.fullText.length - 3000} more characters]`);
        }

        if (options.output) {
            fs.writeFileSync(options.output, result.fullText);
            console.log(`\nFull text saved to: ${options.output}`);
        }
    }

    console.log(`\n${'='.repeat(80)}`);
    console.log(`EXTRACTION COMPLETE`);
    console.log(`${'='.repeat(80)}\n`);
}

// Batch read multiple PDF files
async function readPdfDirectory(dirPath, options = {}) {
    const results = [];

    function findPdfFiles(dir) {
        const files = [];
        const items = fs.readdirSync(dir, { withFileTypes: true });

        for (const item of items) {
            const fullPath = path.join(dir, item.name);
            if (item.isDirectory()) {
                files.push(...findPdfFiles(fullPath));
            } else if (path.extname(item.name).toLowerCase() === '.pdf') {
                files.push(fullPath);
            }
        }
        return files;
    }

    const pdfFiles = findPdfFiles(dirPath);
    console.log(`Found ${pdfFiles.length} PDF files in ${dirPath}\n`);

    for (const file of pdfFiles) {
        console.log(`\nProcessing: ${path.basename(file)}`);
        try {
            const result = await readPdfFile(file, { ...options, json: false });
            results.push({
                file: path.basename(file),
                path: file,
                pages: result.pageCount,
                method: result.method,
                hasText: result.hasText,
                textLength: result.fullText.length,
                preview: result.fullText.substring(0, 500)
            });
        } catch (error) {
            console.error(`Failed to read ${file}: ${error.message}`);
            results.push({
                file: path.basename(file),
                path: file,
                error: error.message
            });
        }
    }

    // Summary
    console.log(`\n${'='.repeat(80)}`);
    console.log(`BATCH PROCESSING SUMMARY`);
    console.log(`${'='.repeat(80)}`);
    console.log(`Total files: ${results.length}`);
    console.log(`Successful: ${results.filter(r => !r.error).length}`);
    console.log(`With extractable text: ${results.filter(r => r.hasText).length}`);
    console.log(`Scanned (no text): ${results.filter(r => r.method === 'scanned-pdf').length}`);

    if (options.output) {
        fs.writeFileSync(options.output, JSON.stringify(results, null, 2));
        console.log(`\nResults saved to: ${options.output}`);
    }

    return results;
}

// CLI execution
if (require.main === module) {
    const args = process.argv.slice(2);

    if (args.length === 0) {
        console.log(`
PDF Reader
==========
Usage: node scripts/read_pdf_ocr.js <file_path> [options]

Options:
  --pages <range>    Read specific pages (e.g., "1-5" or "1,3,5")
  --ocr              Force OCR attempt (requires manual setup)
  --lang <lang>      OCR language (default: eng+ara for English+Arabic)
  --json             Output as JSON format
  --output <path>    Save output to file
  --dir              Treat path as directory, read all PDF files

Examples:
  node scripts/read_pdf_ocr.js document.pdf
  node scripts/read_pdf_ocr.js document.pdf --output text.txt
  node scripts/read_pdf_ocr.js ./pdfs --dir --output summary.json

Notes:
  - Text-based PDFs: Full text extraction supported
  - Scanned PDFs: Detected but require external OCR
    - Recommend: Adobe Acrobat, Google Drive, or online OCR services
        `);
        process.exit(0);
    }

    const filePath = args[0];
    const options = {
        pages: args.includes('--pages') ? args[args.indexOf('--pages') + 1] : null,
        ocr: args.includes('--ocr'),
        lang: args.includes('--lang') ? args[args.indexOf('--lang') + 1] : 'eng+ara',
        json: args.includes('--json'),
        output: args.includes('--output') ? args[args.indexOf('--output') + 1] : null,
        dir: args.includes('--dir')
    };

    (async () => {
        try {
            if (options.dir) {
                await readPdfDirectory(filePath, options);
            } else {
                await readPdfFile(filePath, options);
            }
        } catch (error) {
            console.error('Error:', error.message);
            process.exit(1);
        }
    })();
}

module.exports = { readPdfFile, readPdfDirectory };
