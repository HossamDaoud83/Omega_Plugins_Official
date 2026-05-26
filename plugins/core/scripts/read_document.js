/**
 * Universal Document Reader Script
 * Automatically detects file type and uses appropriate reader
 *
 * Supports:
 * - Excel: .xlsx, .xlsm, .xlsb, .xls
 * - PDF: .pdf (text and scanned with OCR)
 * - Word: .docx
 * - Images: .png, .jpg, .jpeg, .tiff, .bmp, .gif, .webp
 *
 * Usage: node scripts/read_document.js <file_or_directory> [options]
 * Options:
 *   --ocr              Force OCR for PDFs
 *   --lang <lang>      OCR language (default: eng+ara)
 *   --json             Output as JSON format
 *   --output <path>    Save output to file
 *   --summary          Summary mode (less detail)
 *   --recursive        Process directories recursively
 */

const fs = require('fs');
const path = require('path');

// Import readers
const { readExcelFile, readExcelDirectory } = require('./read_excel');
const { readPdfFile, readPdfDirectory } = require('./read_pdf_ocr');
const { readImageFile, readImageDirectory } = require('./read_image_ocr');

// Try to import mammoth for DOCX
let mammoth;
try {
    mammoth = require('mammoth');
} catch (e) {
    console.log('Note: mammoth not installed, DOCX support limited');
}

// File type mappings
const FILE_TYPES = {
    excel: ['.xlsx', '.xlsm', '.xlsb', '.xls'],
    pdf: ['.pdf'],
    word: ['.docx', '.doc'],
    image: ['.png', '.jpg', '.jpeg', '.tiff', '.tif', '.bmp', '.gif', '.webp']
};

function getFileType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    for (const [type, extensions] of Object.entries(FILE_TYPES)) {
        if (extensions.includes(ext)) {
            return type;
        }
    }
    return 'unknown';
}

async function readDocxFile(filePath, options = {}) {
    console.log(`\n${'='.repeat(80)}`);
    console.log(`WORD DOCUMENT READER`);
    console.log(`${'='.repeat(80)}`);
    console.log(`File: ${path.basename(filePath)}`);
    console.log(`Path: ${filePath}`);
    console.log(`${'='.repeat(80)}\n`);

    if (!mammoth) {
        throw new Error('mammoth library not installed. Run: npm install mammoth');
    }

    const result = {
        fileName: path.basename(filePath),
        filePath: filePath,
        fileType: '.docx',
        text: '',
        html: '',
        messages: []
    };

    try {
        const buffer = fs.readFileSync(filePath);

        // Extract text
        const textResult = await mammoth.extractRawText({ buffer });
        result.text = textResult.value;
        result.messages = textResult.messages;

        // Extract HTML for structure
        const htmlResult = await mammoth.convertToHtml({ buffer });
        result.html = htmlResult.value;

        console.log(`Text extracted: ${result.text.length} characters`);
        console.log(`Warnings: ${result.messages.length}`);

        if (!options.json) {
            console.log(`\n${'─'.repeat(60)}`);
            console.log(`TEXT PREVIEW (first 2000 characters):`);
            console.log(`${'─'.repeat(60)}`);
            console.log(result.text.substring(0, 2000));
            if (result.text.length > 2000) {
                console.log(`\n... [${result.text.length - 2000} more characters]`);
            }
        }

        console.log(`\n${'='.repeat(80)}`);
        console.log(`EXTRACTION COMPLETE`);
        console.log(`${'='.repeat(80)}\n`);

        return result;

    } catch (error) {
        console.error(`\nERROR reading DOCX file: ${error.message}`);
        throw error;
    }
}

async function readDocument(filePath, options = {}) {
    const fileType = getFileType(filePath);

    console.log(`\nDetected file type: ${fileType.toUpperCase()}`);

    switch (fileType) {
        case 'excel':
            return await readExcelFile(filePath, options);
        case 'pdf':
            return await readPdfFile(filePath, options);
        case 'word':
            return await readDocxFile(filePath, options);
        case 'image':
            return await readImageFile(filePath, options);
        default:
            throw new Error(`Unsupported file type: ${path.extname(filePath)}`);
    }
}

async function readDirectory(dirPath, options = {}) {
    console.log(`\n${'='.repeat(80)}`);
    console.log(`DIRECTORY DOCUMENT SCANNER`);
    console.log(`${'='.repeat(80)}`);
    console.log(`Directory: ${dirPath}`);
    console.log(`Recursive: ${options.recursive ? 'Yes' : 'No'}`);
    console.log(`${'='.repeat(80)}\n`);

    const allExtensions = Object.values(FILE_TYPES).flat();
    const results = {
        directory: dirPath,
        scanDate: new Date().toISOString(),
        files: [],
        summary: {
            total: 0,
            byType: {},
            successful: 0,
            failed: 0
        }
    };

    function findFiles(dir, recursive = true) {
        const files = [];
        const items = fs.readdirSync(dir, { withFileTypes: true });

        for (const item of items) {
            const fullPath = path.join(dir, item.name);
            if (item.isDirectory() && recursive) {
                files.push(...findFiles(fullPath, recursive));
            } else if (item.isFile()) {
                const ext = path.extname(item.name).toLowerCase();
                if (allExtensions.includes(ext)) {
                    files.push({
                        path: fullPath,
                        name: item.name,
                        ext: ext,
                        type: getFileType(fullPath)
                    });
                }
            }
        }
        return files;
    }

    const files = findFiles(dirPath, options.recursive !== false);
    results.summary.total = files.length;

    // Count by type
    files.forEach(f => {
        results.summary.byType[f.type] = (results.summary.byType[f.type] || 0) + 1;
    });

    console.log(`Found ${files.length} supported documents:`);
    Object.entries(results.summary.byType).forEach(([type, count]) => {
        console.log(`  ${type}: ${count} files`);
    });
    console.log('');

    // Process each file
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        console.log(`\n[${i + 1}/${files.length}] Processing: ${file.name}`);

        try {
            let fileResult;

            if (options.summary) {
                // Quick summary mode - just metadata
                fileResult = {
                    name: file.name,
                    path: file.path,
                    type: file.type,
                    status: 'scanned',
                    size: fs.statSync(file.path).size
                };
            } else {
                // Full extraction
                const extracted = await readDocument(file.path, {
                    ...options,
                    json: false // We'll format at the end
                });

                fileResult = {
                    name: file.name,
                    path: file.path,
                    type: file.type,
                    status: 'extracted',
                    size: fs.statSync(file.path).size,
                    textLength: extracted.fullText?.length || extracted.text?.length || 0,
                    preview: (extracted.fullText || extracted.text || '').substring(0, 500)
                };

                // Type-specific data
                if (file.type === 'excel') {
                    fileResult.sheets = extracted.sheets?.map(s => ({
                        name: s.name,
                        rows: s.rowCount,
                        columns: s.columnCount
                    }));
                } else if (file.type === 'pdf') {
                    fileResult.pages = extracted.pageCount;
                    fileResult.method = extracted.method;
                }
            }

            results.files.push(fileResult);
            results.summary.successful++;

        } catch (error) {
            console.error(`  Error: ${error.message}`);
            results.files.push({
                name: file.name,
                path: file.path,
                type: file.type,
                status: 'error',
                error: error.message
            });
            results.summary.failed++;
        }
    }

    // Output results
    console.log(`\n${'='.repeat(80)}`);
    console.log(`SCAN COMPLETE`);
    console.log(`${'='.repeat(80)}`);
    console.log(`Total files: ${results.summary.total}`);
    console.log(`Successful: ${results.summary.successful}`);
    console.log(`Failed: ${results.summary.failed}`);
    console.log(`\nBy type:`);
    Object.entries(results.summary.byType).forEach(([type, count]) => {
        console.log(`  ${type}: ${count}`);
    });

    if (options.output) {
        fs.writeFileSync(options.output, JSON.stringify(results, null, 2));
        console.log(`\nResults saved to: ${options.output}`);
    }

    if (options.json && !options.output) {
        console.log('\nJSON OUTPUT:');
        console.log(JSON.stringify(results, null, 2));
    }

    return results;
}

// Generate inventory report of all documents
async function generateInventory(dirPath, outputPath) {
    console.log(`\n${'='.repeat(80)}`);
    console.log(`DOCUMENT INVENTORY GENERATOR`);
    console.log(`${'='.repeat(80)}`);
    console.log(`Directory: ${dirPath}`);
    console.log(`Output: ${outputPath}`);
    console.log(`${'='.repeat(80)}\n`);

    const allExtensions = Object.values(FILE_TYPES).flat();

    function scanDirectory(dir, basePath = dir) {
        const inventory = [];
        const items = fs.readdirSync(dir, { withFileTypes: true });

        for (const item of items) {
            const fullPath = path.join(dir, item.name);
            const relativePath = path.relative(basePath, fullPath);

            if (item.isDirectory()) {
                inventory.push(...scanDirectory(fullPath, basePath));
            } else if (item.isFile()) {
                const ext = path.extname(item.name).toLowerCase();
                const stats = fs.statSync(fullPath);

                inventory.push({
                    name: item.name,
                    relativePath: relativePath,
                    folder: path.dirname(relativePath) || '.',
                    extension: ext,
                    type: getFileType(fullPath),
                    supported: allExtensions.includes(ext),
                    size: stats.size,
                    sizeFormatted: formatBytes(stats.size),
                    modified: stats.mtime.toISOString()
                });
            }
        }
        return inventory;
    }

    const inventory = scanDirectory(dirPath);

    // Create summary
    const summary = {
        directory: dirPath,
        scanDate: new Date().toISOString(),
        totalFiles: inventory.length,
        supportedFiles: inventory.filter(f => f.supported).length,
        totalSize: inventory.reduce((sum, f) => sum + f.size, 0),
        byType: {},
        byExtension: {},
        byFolder: {}
    };

    inventory.forEach(f => {
        summary.byType[f.type] = (summary.byType[f.type] || 0) + 1;
        summary.byExtension[f.extension] = (summary.byExtension[f.extension] || 0) + 1;
        summary.byFolder[f.folder] = (summary.byFolder[f.folder] || 0) + 1;
    });

    const report = { summary, inventory };

    // Save
    fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));

    // Print summary
    console.log(`\nInventory Summary:`);
    console.log(`  Total files: ${summary.totalFiles}`);
    console.log(`  Supported for reading: ${summary.supportedFiles}`);
    console.log(`  Total size: ${formatBytes(summary.totalSize)}`);
    console.log(`\nBy type:`);
    Object.entries(summary.byType).forEach(([type, count]) => {
        console.log(`  ${type}: ${count}`);
    });
    console.log(`\nBy extension:`);
    Object.entries(summary.byExtension).forEach(([ext, count]) => {
        console.log(`  ${ext}: ${count}`);
    });
    console.log(`\nInventory saved to: ${outputPath}`);

    return report;
}

function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// CLI execution
if (require.main === module) {
    const args = process.argv.slice(2);

    if (args.length === 0) {
        console.log(`
Universal Document Reader
=========================
Automatically detects file type and extracts content.

Supported formats:
  Excel: .xlsx, .xlsm, .xlsb, .xls
  PDF:   .pdf (text and scanned with OCR)
  Word:  .docx
  Image: .png, .jpg, .jpeg, .tiff, .bmp, .gif, .webp

Usage:
  node scripts/read_document.js <file_path> [options]
  node scripts/read_document.js <directory> --dir [options]
  node scripts/read_document.js <directory> --inventory --output inventory.json

Options:
  --dir              Process directory instead of single file
  --recursive        Process directories recursively (default: true)
  --ocr              Force OCR for PDFs
  --lang <lang>      OCR language (default: eng+ara)
  --json             Output as JSON format
  --output <path>    Save output to file
  --summary          Summary mode (metadata only, faster)
  --inventory        Generate document inventory (no content extraction)

Examples:
  node scripts/read_document.js document.pdf
  node scripts/read_document.js ./data --dir --summary
  node scripts/read_document.js ./data --inventory --output inventory.json
  node scripts/read_document.js scan.pdf --ocr --lang ara
        `);
        process.exit(0);
    }

    const inputPath = args[0];
    const options = {
        dir: args.includes('--dir'),
        recursive: !args.includes('--no-recursive'),
        ocr: args.includes('--ocr'),
        lang: args.includes('--lang') ? args[args.indexOf('--lang') + 1] : 'eng+ara',
        json: args.includes('--json'),
        output: args.includes('--output') ? args[args.indexOf('--output') + 1] : null,
        summary: args.includes('--summary'),
        inventory: args.includes('--inventory')
    };

    (async () => {
        try {
            const isDirectory = fs.statSync(inputPath).isDirectory();

            if (options.inventory) {
                const outputPath = options.output || 'document_inventory.json';
                await generateInventory(inputPath, outputPath);
            } else if (isDirectory || options.dir) {
                await readDirectory(inputPath, options);
            } else {
                const result = await readDocument(inputPath, options);
                if (options.json) {
                    const jsonOutput = JSON.stringify(result, null, 2);
                    if (options.output) {
                        fs.writeFileSync(options.output, jsonOutput);
                        console.log(`\nJSON output saved to: ${options.output}`);
                    } else {
                        console.log('\nJSON OUTPUT:');
                        console.log(jsonOutput);
                    }
                } else if (options.output) {
                    const text = result.fullText || result.text || '';
                    fs.writeFileSync(options.output, text);
                    console.log(`\nText output saved to: ${options.output}`);
                }
            }
        } catch (error) {
            console.error('Error:', error.message);
            process.exit(1);
        }
    })();
}

module.exports = {
    readDocument,
    readDirectory,
    generateInventory,
    readExcelFile,
    readPdfFile,
    readDocxFile,
    readImageFile,
    getFileType
};
