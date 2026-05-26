/**
 * PDF to Image Converter Script
 * Converts PDF pages to images for visual analysis by Claude
 *
 * Usage: node scripts/convert_pdf_to_images.js <pdf_path> [options]
 * Options:
 *   --pages <range>    Convert specific pages (e.g., "1-5" or "1,3,5")
 *   --output <dir>     Output directory for images
 *   --format <fmt>     Output format: png (default), jpg, webp
 *   --dpi <number>     Resolution (default: 150, use 200-300 for drawings)
 *   --quality <number> Image quality 1-100 (default: 90)
 */

const fs = require('fs');
const path = require('path');
const { fromPath } = require('pdf2pic');
const sharp = require('sharp');
const { PDFDocument } = require('pdf-lib');

async function convertPdfToImages(pdfPath, options = {}) {
    const format = options.format || 'png';
    const dpi = options.dpi || 150;
    const quality = options.quality || 90;

    console.log(`\n${'='.repeat(80)}`);
    console.log(`PDF TO IMAGE CONVERTER`);
    console.log(`${'='.repeat(80)}`);
    console.log(`File: ${path.basename(pdfPath)}`);
    console.log(`Format: ${format} | DPI: ${dpi} | Quality: ${quality}`);
    console.log(`${'='.repeat(80)}\n`);

    // Create output directory
    const baseName = path.basename(pdfPath, '.pdf');
    const outputDir = options.output || path.join(path.dirname(pdfPath), `${baseName}_images`);

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    console.log(`Output directory: ${outputDir}\n`);

    // Get page count
    const dataBuffer = fs.readFileSync(pdfPath);
    const pdfDoc = await PDFDocument.load(dataBuffer, { ignoreEncryption: true });
    const totalPages = pdfDoc.getPageCount();
    console.log(`Total pages: ${totalPages}`);

    // Parse page range
    const pagesToConvert = parsePageRange(options.pages, totalPages);
    console.log(`Pages to convert: ${pagesToConvert.length}`);

    // Configure pdf2pic
    const convertOptions = {
        density: dpi,
        saveFilename: baseName,
        savePath: outputDir,
        format: format,
        width: Math.round(dpi * 8.5),  // Approximate A4 width at given DPI
        height: Math.round(dpi * 11),   // Approximate A4 height at given DPI
    };

    const convert = fromPath(pdfPath, convertOptions);

    const results = [];
    let successCount = 0;
    let errorCount = 0;

    console.log(`\nConverting pages...`);

    for (const pageNum of pagesToConvert) {
        process.stdout.write(`  Page ${pageNum}/${totalPages}...`);

        try {
            const result = await convert(pageNum, { responseType: 'image' });

            // Get the output path
            const outputPath = result.path;

            // Optimize image if needed
            if (format === 'jpg' || format === 'jpeg') {
                const optimizedPath = outputPath.replace(/\.\w+$/, `.${format}`);
                await sharp(outputPath)
                    .jpeg({ quality: quality })
                    .toFile(optimizedPath + '.tmp');
                fs.renameSync(optimizedPath + '.tmp', optimizedPath);
            } else if (format === 'webp') {
                const optimizedPath = outputPath.replace(/\.\w+$/, '.webp');
                await sharp(outputPath)
                    .webp({ quality: quality })
                    .toFile(optimizedPath + '.tmp');
                fs.renameSync(optimizedPath + '.tmp', optimizedPath);
            }

            const stats = fs.statSync(result.path);
            results.push({
                page: pageNum,
                path: result.path,
                size: stats.size,
                sizeFormatted: formatBytes(stats.size)
            });

            console.log(` OK (${formatBytes(stats.size)})`);
            successCount++;

        } catch (error) {
            console.log(` ERROR: ${error.message}`);
            results.push({
                page: pageNum,
                error: error.message
            });
            errorCount++;
        }
    }

    // Summary
    console.log(`\n${'='.repeat(80)}`);
    console.log(`CONVERSION COMPLETE`);
    console.log(`${'='.repeat(80)}`);
    console.log(`Successful: ${successCount}`);
    console.log(`Failed: ${errorCount}`);
    console.log(`Output: ${outputDir}`);

    // List output files
    const outputFiles = fs.readdirSync(outputDir)
        .filter(f => f.endsWith(`.${format}`) || f.endsWith('.png'))
        .sort();
    console.log(`\nOutput files:`);
    outputFiles.forEach(f => {
        const stats = fs.statSync(path.join(outputDir, f));
        console.log(`  ${f} (${formatBytes(stats.size)})`);
    });

    // Create manifest for Claude analysis
    const manifest = {
        source: pdfPath,
        sourceName: path.basename(pdfPath),
        outputDir: outputDir,
        format: format,
        dpi: dpi,
        totalPages: totalPages,
        convertedPages: successCount,
        images: results.filter(r => !r.error).map(r => ({
            page: r.page,
            filename: path.basename(r.path),
            path: r.path,
            size: r.sizeFormatted
        })),
        errors: results.filter(r => r.error),
        createdAt: new Date().toISOString()
    };

    const manifestPath = path.join(outputDir, 'manifest.json');
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
    console.log(`\nManifest: ${manifestPath}`);

    console.log(`\n${'─'.repeat(60)}`);
    console.log(`To analyze with Claude, use:`);
    console.log(`  Read the image file paths from ${manifestPath}`);
    console.log(`  Then use Claude's Read tool on the image files`);
    console.log(`${'─'.repeat(60)}\n`);

    return manifest;
}

function parsePageRange(range, totalPages) {
    if (!range) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages = new Set();

    range.split(',').forEach(part => {
        part = part.trim();
        if (part.includes('-')) {
            const [start, end] = part.split('-').map(n => parseInt(n.trim()));
            for (let i = start; i <= Math.min(end, totalPages); i++) {
                pages.add(i);
            }
        } else {
            const pageNum = parseInt(part);
            if (pageNum <= totalPages) {
                pages.add(pageNum);
            }
        }
    });

    return Array.from(pages).sort((a, b) => a - b);
}

function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Batch convert multiple PDFs
async function convertDirectory(dirPath, options = {}) {
    console.log(`\n${'='.repeat(80)}`);
    console.log(`BATCH PDF TO IMAGE CONVERTER`);
    console.log(`${'='.repeat(80)}`);
    console.log(`Directory: ${dirPath}`);
    console.log(`${'='.repeat(80)}\n`);

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
    console.log(`Found ${pdfFiles.length} PDF files\n`);

    const results = [];
    for (let i = 0; i < pdfFiles.length; i++) {
        console.log(`\n[${ i + 1}/${pdfFiles.length}] ${path.basename(pdfFiles[i])}`);
        try {
            const manifest = await convertPdfToImages(pdfFiles[i], options);
            results.push({
                file: pdfFiles[i],
                success: true,
                manifest: manifest
            });
        } catch (error) {
            console.error(`  Error: ${error.message}`);
            results.push({
                file: pdfFiles[i],
                success: false,
                error: error.message
            });
        }
    }

    // Summary
    console.log(`\n${'='.repeat(80)}`);
    console.log(`BATCH CONVERSION SUMMARY`);
    console.log(`${'='.repeat(80)}`);
    console.log(`Total: ${results.length}`);
    console.log(`Successful: ${results.filter(r => r.success).length}`);
    console.log(`Failed: ${results.filter(r => !r.success).length}`);

    return results;
}

// CLI execution
if (require.main === module) {
    const args = process.argv.slice(2);

    if (args.length === 0) {
        console.log(`
PDF to Image Converter
======================
Converts PDF pages to images for visual analysis by Claude.

Usage: node scripts/convert_pdf_to_images.js <pdf_path> [options]

Options:
  --pages <range>    Convert specific pages (e.g., "1-5" or "1,3,5")
  --output <dir>     Output directory for images
  --format <fmt>     Output format: png (default), jpg, webp
  --dpi <number>     Resolution (default: 150, use 200-300 for drawings)
  --quality <number> Image quality 1-100 (default: 90)
  --dir              Treat path as directory, convert all PDFs

Examples:
  node scripts/convert_pdf_to_images.js drawing.pdf
  node scripts/convert_pdf_to_images.js drawing.pdf --pages "1-5" --dpi 200
  node scripts/convert_pdf_to_images.js ./drawings --dir --dpi 150
        `);
        process.exit(0);
    }

    const inputPath = args[0];
    const options = {
        pages: args.includes('--pages') ? args[args.indexOf('--pages') + 1] : null,
        output: args.includes('--output') ? args[args.indexOf('--output') + 1] : null,
        format: args.includes('--format') ? args[args.indexOf('--format') + 1] : 'png',
        dpi: args.includes('--dpi') ? parseInt(args[args.indexOf('--dpi') + 1]) : 150,
        quality: args.includes('--quality') ? parseInt(args[args.indexOf('--quality') + 1]) : 90,
        dir: args.includes('--dir')
    };

    (async () => {
        try {
            if (options.dir) {
                await convertDirectory(inputPath, options);
            } else {
                await convertPdfToImages(inputPath, options);
            }
        } catch (error) {
            console.error('Error:', error.message);
            process.exit(1);
        }
    })();
}

module.exports = { convertPdfToImages, convertDirectory };
