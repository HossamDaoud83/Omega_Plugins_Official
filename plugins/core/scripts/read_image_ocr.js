/**
 * Image OCR Reader Script
 * Reads image files and extracts text using OCR
 * Supports: PNG, JPG, JPEG, TIFF, BMP, GIF, WEBP
 *
 * Usage: node scripts/read_image_ocr.js <file_path> [options]
 * Options:
 *   --lang <lang>      OCR language (default: eng+ara for English+Arabic)
 *   --json             Output as JSON format
 *   --output <path>    Save output to file
 *   --preprocess       Apply image preprocessing for better OCR
 */

const fs = require('fs');
const path = require('path');
const { createWorker } = require('tesseract.js');

// Try to load sharp for image preprocessing
let sharp;
try {
    sharp = require('sharp');
} catch (e) {
    console.log('Note: sharp not available, image preprocessing disabled');
}

const SUPPORTED_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.tiff', '.tif', '.bmp', '.gif', '.webp'];

async function readImageFile(filePath, options = {}) {
    const ext = path.extname(filePath).toLowerCase();

    console.log(`\n${'='.repeat(80)}`);
    console.log(`IMAGE OCR READER`);
    console.log(`${'='.repeat(80)}`);
    console.log(`File: ${path.basename(filePath)}`);
    console.log(`Path: ${filePath}`);
    console.log(`Type: ${ext}`);
    console.log(`${'='.repeat(80)}\n`);

    if (!SUPPORTED_EXTENSIONS.includes(ext)) {
        throw new Error(`Unsupported image format: ${ext}. Supported: ${SUPPORTED_EXTENSIONS.join(', ')}`);
    }

    const result = {
        fileName: path.basename(filePath),
        filePath: filePath,
        fileType: ext,
        dimensions: null,
        text: '',
        confidence: 0,
        words: [],
        blocks: []
    };

    try {
        // Get image info
        if (sharp) {
            const metadata = await sharp(filePath).metadata();
            result.dimensions = {
                width: metadata.width,
                height: metadata.height,
                format: metadata.format,
                space: metadata.space,
                channels: metadata.channels,
                density: metadata.density
            };
            console.log(`Dimensions: ${metadata.width}x${metadata.height}`);
            console.log(`Format: ${metadata.format}`);
            if (metadata.density) console.log(`DPI: ${metadata.density}`);
        }

        // Preprocess image if requested
        let processedPath = filePath;
        if (options.preprocess && sharp) {
            console.log('\nPreprocessing image for better OCR...');
            processedPath = path.join(
                path.dirname(filePath),
                `_temp_processed_${path.basename(filePath)}.png`
            );

            await sharp(filePath)
                // Convert to grayscale
                .grayscale()
                // Increase contrast
                .normalize()
                // Sharpen
                .sharpen()
                // Resize if too small (OCR works better on larger images)
                .resize({
                    width: Math.max(result.dimensions?.width || 1000, 2000),
                    fit: 'inside',
                    withoutEnlargement: false
                })
                .toFile(processedPath);

            console.log('Image preprocessed successfully');
        }

        // Perform OCR
        const lang = options.lang || 'eng+ara';
        console.log(`\nOCR Settings:`);
        console.log(`  Language: ${lang}`);
        console.log(`  Preprocessing: ${options.preprocess ? 'enabled' : 'disabled'}`);
        console.log('\nPerforming OCR...');

        const worker = await createWorker(lang, 1, {
            logger: m => {
                if (m.status === 'recognizing text') {
                    process.stdout.write(`\r  Progress: ${Math.round(m.progress * 100)}%`);
                }
            }
        });

        try {
            const { data } = await worker.recognize(processedPath);

            result.text = data.text.trim();
            result.confidence = data.confidence;
            result.words = data.words?.map(w => ({
                text: w.text,
                confidence: w.confidence,
                bbox: w.bbox
            })) || [];
            result.blocks = data.blocks?.map(b => ({
                text: b.text,
                confidence: b.confidence,
                paragraphs: b.paragraphs?.length || 0
            })) || [];

            console.log(`\n\nOCR completed!`);
            console.log(`Confidence: ${result.confidence.toFixed(1)}%`);
            console.log(`Characters extracted: ${result.text.length}`);
            console.log(`Words found: ${result.words.length}`);
            console.log(`Text blocks: ${result.blocks.length}`);

        } finally {
            await worker.terminate();

            // Clean up temp file
            if (processedPath !== filePath) {
                try {
                    fs.unlinkSync(processedPath);
                } catch (e) { }
            }
        }

        // Output results
        outputResults(result, options);

        return result;

    } catch (error) {
        console.error(`\nERROR reading image file: ${error.message}`);
        throw error;
    }
}

function outputResults(result, options) {
    console.log(`\n${'─'.repeat(60)}`);
    console.log(`EXTRACTION RESULTS`);
    console.log(`${'─'.repeat(60)}`);

    if (options.json) {
        const jsonOutput = JSON.stringify(result, null, 2);
        if (options.output) {
            fs.writeFileSync(options.output, jsonOutput);
            console.log(`JSON output saved to: ${options.output}`);
        } else {
            console.log('\nJSON OUTPUT:');
            console.log(jsonOutput);
        }
    } else {
        console.log(`\nEXTRACTED TEXT:`);
        console.log(`${'─'.repeat(60)}`);
        console.log(result.text || '(No text detected)');

        if (options.output) {
            fs.writeFileSync(options.output, result.text);
            console.log(`\nText saved to: ${options.output}`);
        }
    }

    console.log(`\n${'='.repeat(80)}`);
    console.log(`EXTRACTION COMPLETE`);
    console.log(`${'='.repeat(80)}\n`);
}

// Batch read multiple image files
async function readImageDirectory(dirPath, options = {}) {
    const results = [];

    function findImageFiles(dir) {
        const files = [];
        const items = fs.readdirSync(dir, { withFileTypes: true });

        for (const item of items) {
            const fullPath = path.join(dir, item.name);
            if (item.isDirectory()) {
                files.push(...findImageFiles(fullPath));
            } else if (SUPPORTED_EXTENSIONS.includes(path.extname(item.name).toLowerCase())) {
                // Skip temp files
                if (!item.name.startsWith('_temp_')) {
                    files.push(fullPath);
                }
            }
        }
        return files;
    }

    const imageFiles = findImageFiles(dirPath);
    console.log(`Found ${imageFiles.length} image files in ${dirPath}\n`);

    for (const file of imageFiles) {
        console.log(`\nProcessing: ${path.basename(file)}`);
        try {
            const result = await readImageFile(file, { ...options, json: false });
            results.push({
                file: path.basename(file),
                path: file,
                dimensions: result.dimensions,
                textLength: result.text.length,
                confidence: result.confidence,
                preview: result.text.substring(0, 300)
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
    console.log(`Average confidence: ${(results.filter(r => r.confidence).reduce((sum, r) => sum + r.confidence, 0) / results.filter(r => r.confidence).length || 0).toFixed(1)}%`);

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
Image OCR Reader
================
Usage: node scripts/read_image_ocr.js <file_path> [options]

Supported formats: ${SUPPORTED_EXTENSIONS.join(', ')}

Options:
  --lang <lang>      OCR language (default: eng+ara for English+Arabic)
  --json             Output as JSON format
  --output <path>    Save output to file
  --preprocess       Apply image preprocessing for better OCR
  --dir              Treat path as directory, read all image files

Examples:
  node scripts/read_image_ocr.js scan.png
  node scripts/read_image_ocr.js document.jpg --lang ara --preprocess
  node scripts/read_image_ocr.js photo.jpg --output extracted.txt
  node scripts/read_image_ocr.js ./images --dir --output summary.json
        `);
        process.exit(0);
    }

    const filePath = args[0];
    const options = {
        lang: args.includes('--lang') ? args[args.indexOf('--lang') + 1] : 'eng+ara',
        json: args.includes('--json'),
        output: args.includes('--output') ? args[args.indexOf('--output') + 1] : null,
        preprocess: args.includes('--preprocess'),
        dir: args.includes('--dir')
    };

    (async () => {
        try {
            if (options.dir) {
                await readImageDirectory(filePath, options);
            } else {
                await readImageFile(filePath, options);
            }
        } catch (error) {
            console.error('Error:', error.message);
            process.exit(1);
        }
    })();
}

module.exports = { readImageFile, readImageDirectory };
