/**
 * PDF to Image Converter (using pdfjs-dist + canvas)
 * Converts PDF pages to images for visual analysis by Claude
 * No external dependencies required (GraphicsMagick/ImageMagick not needed)
 *
 * Usage: node scripts/pdf_to_images.js <pdf_path> [options]
 * Options:
 *   --pages <range>    Convert specific pages (e.g., "1-5" or "1,3,5")
 *   --output <dir>     Output directory for images
 *   --scale <number>   Scale factor (default: 2.0 for good quality)
 */

const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// pdfjs-dist setup - use dynamic import for ESM module
let pdfjsLib = null;

async function initPdfjs() {
    if (!pdfjsLib) {
        pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
    }
    return pdfjsLib;
}

async function convertPdfToImages(pdfPath, options = {}) {
    const scale = options.scale || 2.0;

    console.log(`\n${'='.repeat(80)}`);
    console.log(`PDF TO IMAGE CONVERTER`);
    console.log(`${'='.repeat(80)}`);
    console.log(`File: ${path.basename(pdfPath)}`);
    console.log(`Scale: ${scale}x`);
    console.log(`${'='.repeat(80)}\n`);

    // Initialize pdfjs
    const pdfjs = await initPdfjs();

    // Create output directory
    const baseName = path.basename(pdfPath, '.pdf').replace(/[<>:"/\\|?*]/g, '_');
    const outputDir = options.output || path.join(path.dirname(pdfPath), `${baseName}_images`);

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    console.log(`Output directory: ${outputDir}\n`);

    // Load PDF
    const data = new Uint8Array(fs.readFileSync(pdfPath));
    const loadingTask = pdfjs.getDocument({
        data: data,
        useSystemFonts: true,
        disableFontFace: true
    });

    const pdfDoc = await loadingTask.promise;
    const totalPages = pdfDoc.numPages;
    console.log(`Total pages: ${totalPages}`);

    // Parse page range
    const pagesToConvert = parsePageRange(options.pages, totalPages);
    console.log(`Pages to convert: ${pagesToConvert.length}\n`);

    const results = [];
    let successCount = 0;
    let errorCount = 0;

    console.log(`Converting pages...`);

    for (const pageNum of pagesToConvert) {
        process.stdout.write(`  Page ${pageNum}/${totalPages}...`);

        try {
            const page = await pdfDoc.getPage(pageNum);
            const viewport = page.getViewport({ scale: scale });

            // Create canvas
            const canvas = createCanvas(viewport.width, viewport.height);
            const context = canvas.getContext('2d');

            // White background
            context.fillStyle = 'white';
            context.fillRect(0, 0, viewport.width, viewport.height);

            // Render PDF page to canvas
            const renderContext = {
                canvasContext: context,
                viewport: viewport
            };

            await page.render(renderContext).promise;

            // Save as PNG
            const outputFilename = `page_${String(pageNum).padStart(3, '0')}.png`;
            const outputPath = path.join(outputDir, outputFilename);

            const buffer = canvas.toBuffer('image/png');
            fs.writeFileSync(outputPath, buffer);

            const stats = fs.statSync(outputPath);
            results.push({
                page: pageNum,
                filename: outputFilename,
                path: outputPath,
                width: Math.round(viewport.width),
                height: Math.round(viewport.height),
                size: stats.size,
                sizeFormatted: formatBytes(stats.size)
            });

            console.log(` OK (${Math.round(viewport.width)}x${Math.round(viewport.height)}, ${formatBytes(stats.size)})`);
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
    const outputFiles = results.filter(r => !r.error);
    console.log(`\nOutput files:`);
    outputFiles.forEach(f => {
        console.log(`  ${f.filename} (${f.width}x${f.height}, ${f.sizeFormatted})`);
    });

    // Create manifest for Claude analysis
    const manifest = {
        source: pdfPath,
        sourceName: path.basename(pdfPath),
        outputDir: outputDir,
        scale: scale,
        totalPages: totalPages,
        convertedPages: successCount,
        images: outputFiles,
        errors: results.filter(r => r.error),
        createdAt: new Date().toISOString(),
        instructions: "Use Claude's Read tool on the image paths to analyze the drawings visually"
    };

    const manifestPath = path.join(outputDir, 'manifest.json');
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
    console.log(`\nManifest: ${manifestPath}`);

    console.log(`\n${'─'.repeat(60)}`);
    console.log(`READY FOR CLAUDE VISUAL ANALYSIS`);
    console.log(`${'─'.repeat(60)}`);
    console.log(`To analyze drawings, ask Claude to read the image files:`);
    outputFiles.slice(0, 3).forEach(f => {
        console.log(`  ${f.path}`);
    });
    if (outputFiles.length > 3) {
        console.log(`  ... and ${outputFiles.length - 3} more`);
    }
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

// CLI execution
if (require.main === module) {
    const args = process.argv.slice(2);

    if (args.length === 0) {
        console.log(`
PDF to Image Converter
======================
Converts PDF pages to PNG images for Claude visual analysis.
No external dependencies required.

Usage: node scripts/pdf_to_images.js <pdf_path> [options]

Options:
  --pages <range>    Convert specific pages (e.g., "1-5" or "1,3,5")
  --output <dir>     Output directory for images
  --scale <number>   Scale factor (default: 2.0)
                     - 1.0 = 72 DPI (low quality)
                     - 2.0 = 144 DPI (good quality, recommended)
                     - 3.0 = 216 DPI (high quality, larger files)

Examples:
  node scripts/pdf_to_images.js drawing.pdf
  node scripts/pdf_to_images.js drawing.pdf --pages "1-5"
  node scripts/pdf_to_images.js drawing.pdf --pages "1" --scale 3.0

After conversion, use Claude's Read tool on the output images
for visual analysis of engineering drawings.
        `);
        process.exit(0);
    }

    const inputPath = args[0];
    const options = {
        pages: args.includes('--pages') ? args[args.indexOf('--pages') + 1] : null,
        output: args.includes('--output') ? args[args.indexOf('--output') + 1] : null,
        scale: args.includes('--scale') ? parseFloat(args[args.indexOf('--scale') + 1]) : 2.0
    };

    (async () => {
        try {
            await convertPdfToImages(inputPath, options);
        } catch (error) {
            console.error('Error:', error.message);
            process.exit(1);
        }
    })();
}

module.exports = { convertPdfToImages };
