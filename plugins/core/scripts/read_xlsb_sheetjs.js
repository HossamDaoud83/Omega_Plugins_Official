/**
 * XLSB File Reader using SheetJS (xlsx package)
 * Better support for Excel Binary files
 */

const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

function readXLSBFile(filePath) {
    console.log('='.repeat(80));
    console.log('XLSB FILE READER (SheetJS)');
    console.log('='.repeat(80));
    console.log(`File: ${path.basename(filePath)}`);
    console.log('='.repeat(80));
    console.log('');

    try {
        // Read the workbook
        const workbook = XLSX.readFile(filePath, { type: 'binary' });

        console.log(`Sheets found: ${workbook.SheetNames.join(', ')}`);
        console.log('');

        // Process each sheet
        for (const sheetName of workbook.SheetNames) {
            console.log('-'.repeat(60));
            console.log(`SHEET: ${sheetName}`);
            console.log('-'.repeat(60));

            const worksheet = workbook.Sheets[sheetName];

            // Get the range
            const range = XLSX.utils.decode_range(worksheet['!ref'] || 'A1');
            const rowCount = range.e.r - range.s.r + 1;
            const colCount = range.e.c - range.s.c + 1;

            console.log(`Rows: ${rowCount}, Columns: ${colCount}`);
            console.log('');

            // Convert to JSON for easier processing
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: '' });

            if (jsonData.length > 0) {
                // Print headers
                const headers = jsonData[0];
                console.log('HEADERS:');
                headers.forEach((h, i) => {
                    if (h && String(h).trim()) {
                        console.log(`  [${i}] ${h}`);
                    }
                });
                console.log('');

                // Print all data (up to 100 rows for detailed analysis)
                console.log('DATA ROWS:');
                const maxRows = Math.min(jsonData.length, 100);
                for (let i = 1; i < maxRows; i++) {
                    const row = jsonData[i];
                    // Only print non-empty rows
                    const hasData = row.some(cell => cell !== '' && cell !== null && cell !== undefined);
                    if (hasData) {
                        console.log(`Row ${i}: ${JSON.stringify(row)}`);
                    }
                }

                if (jsonData.length > 100) {
                    console.log(`... and ${jsonData.length - 100} more rows`);
                }

                // Calculate numeric summaries
                console.log('');
                console.log('NUMERIC COLUMN ANALYSIS:');
                for (let col = 0; col < headers.length; col++) {
                    const header = headers[col];
                    if (!header) continue;

                    const values = [];
                    for (let row = 1; row < jsonData.length; row++) {
                        const val = jsonData[row][col];
                        if (typeof val === 'number' && !isNaN(val)) {
                            values.push(val);
                        }
                    }

                    if (values.length > 0) {
                        const sum = values.reduce((a, b) => a + b, 0);
                        const max = Math.max(...values);
                        const min = Math.min(...values);
                        const avg = sum / values.length;

                        console.log(`  ${header}:`);
                        console.log(`    Count: ${values.length}`);
                        console.log(`    Sum: ${sum.toLocaleString('en-US', { maximumFractionDigits: 2 })}`);
                        console.log(`    Min: ${min.toLocaleString('en-US', { maximumFractionDigits: 2 })}`);
                        console.log(`    Max: ${max.toLocaleString('en-US', { maximumFractionDigits: 2 })}`);
                        console.log(`    Avg: ${avg.toLocaleString('en-US', { maximumFractionDigits: 2 })}`);
                    }
                }
            } else {
                console.log('(empty sheet)');
            }
            console.log('');
        }

        console.log('='.repeat(80));
        console.log('EXTRACTION COMPLETE');
        console.log('='.repeat(80));

    } catch (error) {
        console.error(`ERROR: ${error.message}`);
        console.error(error.stack);
        process.exit(1);
    }
}

// Main execution
if (require.main === module) {
    const args = process.argv.slice(2);
    if (args.length === 0) {
        console.log('Usage: node read_xlsb_sheetjs.js <file_path>');
        process.exit(1);
    }

    const filePath = args[0];
    if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${filePath}`);
        process.exit(1);
    }

    readXLSBFile(filePath);
}
