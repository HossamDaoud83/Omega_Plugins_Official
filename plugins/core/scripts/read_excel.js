/**
 * Excel File Reader Script
 * Reads .xlsx, .xlsm, and .xlsb files and extracts content
 *
 * Usage: node scripts/read_excel.js <file_path> [options]
 * Options:
 *   --sheet <name>     Read specific sheet by name
 *   --all              Read all sheets (default)
 *   --summary          Output summary only (sheet names, row counts)
 *   --json             Output as JSON format
 *   --output <path>    Save output to file
 */

const ExcelJS = require('exceljs');
const path = require('path');
const fs = require('fs');

async function readExcelFile(filePath, options = {}) {
    const workbook = new ExcelJS.Workbook();
    const ext = path.extname(filePath).toLowerCase();

    console.log(`\n${'='.repeat(80)}`);
    console.log(`EXCEL FILE READER`);
    console.log(`${'='.repeat(80)}`);
    console.log(`File: ${path.basename(filePath)}`);
    console.log(`Path: ${filePath}`);
    console.log(`Type: ${ext}`);
    console.log(`${'='.repeat(80)}\n`);

    try {
        // Load workbook based on file type
        if (ext === '.xlsb') {
            // ExcelJS doesn't fully support xlsb, try basic read
            console.log('Warning: .xlsb files have limited support. Some data may not be extracted.');
            await workbook.xlsx.readFile(filePath);
        } else {
            await workbook.xlsx.readFile(filePath);
        }

        const result = {
            fileName: path.basename(filePath),
            filePath: filePath,
            fileType: ext,
            sheetCount: workbook.worksheets.length,
            sheets: []
        };

        // Get sheet names
        const sheetNames = workbook.worksheets.map(ws => ws.name);
        console.log(`Sheets Found: ${sheetNames.length}`);
        sheetNames.forEach((name, i) => console.log(`  ${i + 1}. ${name}`));
        console.log('');

        // Process each sheet
        for (const worksheet of workbook.worksheets) {
            // Skip if specific sheet requested and this isn't it
            if (options.sheet && worksheet.name !== options.sheet) {
                continue;
            }

            const sheetData = {
                name: worksheet.name,
                rowCount: worksheet.rowCount,
                columnCount: worksheet.columnCount,
                headers: [],
                data: [],
                summary: {}
            };

            console.log(`\n${'─'.repeat(60)}`);
            console.log(`SHEET: ${worksheet.name}`);
            console.log(`Rows: ${worksheet.rowCount} | Columns: ${worksheet.columnCount}`);
            console.log(`${'─'.repeat(60)}`);

            if (options.summary) {
                // Summary mode - just count and basic info
                let nonEmptyRows = 0;
                worksheet.eachRow((row, rowNumber) => {
                    nonEmptyRows++;
                });
                sheetData.summary = {
                    nonEmptyRows: nonEmptyRows,
                    estimatedDataRows: nonEmptyRows - 1 // Assuming header
                };
                console.log(`Non-empty rows: ${nonEmptyRows}`);
            } else {
                // Full data extraction
                let rowIndex = 0;
                worksheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
                    const rowData = [];
                    row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
                        let value = cell.value;

                        // Handle different cell types
                        if (cell.type === ExcelJS.ValueType.Formula) {
                            value = cell.result || cell.value;
                        } else if (cell.type === ExcelJS.ValueType.RichText) {
                            value = cell.text;
                        } else if (cell.type === ExcelJS.ValueType.Hyperlink) {
                            value = cell.text || cell.value?.text;
                        } else if (cell.type === ExcelJS.ValueType.Date) {
                            value = cell.value?.toISOString?.() || cell.value;
                        }

                        rowData.push(value);
                    });

                    if (rowIndex === 0) {
                        sheetData.headers = rowData;
                        console.log(`\nHeaders: ${rowData.slice(0, 5).join(' | ')}${rowData.length > 5 ? ' ...' : ''}`);
                    } else {
                        sheetData.data.push(rowData);
                    }
                    rowIndex++;
                });

                // Print sample data (first 10 rows)
                if (!options.json) {
                    console.log(`\nSample Data (first 10 rows):`);
                    sheetData.data.slice(0, 10).forEach((row, i) => {
                        const preview = row.slice(0, 4).map(v =>
                            v === null ? '' : String(v).substring(0, 20)
                        ).join(' | ');
                        console.log(`  Row ${i + 2}: ${preview}${row.length > 4 ? ' ...' : ''}`);
                    });
                    if (sheetData.data.length > 10) {
                        console.log(`  ... and ${sheetData.data.length - 10} more rows`);
                    }
                }

                // Calculate summary statistics for numeric columns
                if (sheetData.headers.length > 0) {
                    sheetData.summary.numericColumns = [];
                    sheetData.headers.forEach((header, colIndex) => {
                        const values = sheetData.data
                            .map(row => row[colIndex])
                            .filter(v => typeof v === 'number' && !isNaN(v));

                        if (values.length > 0) {
                            const sum = values.reduce((a, b) => a + b, 0);
                            sheetData.summary.numericColumns.push({
                                column: header,
                                count: values.length,
                                sum: sum,
                                min: Math.min(...values),
                                max: Math.max(...values),
                                avg: sum / values.length
                            });
                        }
                    });

                    if (sheetData.summary.numericColumns.length > 0 && !options.json) {
                        console.log(`\nNumeric Column Summary:`);
                        sheetData.summary.numericColumns.slice(0, 5).forEach(col => {
                            console.log(`  ${col.column}: Sum=${col.sum.toLocaleString()}, Avg=${col.avg.toFixed(2)}, Range=[${col.min}, ${col.max}]`);
                        });
                    }
                }
            }

            result.sheets.push(sheetData);
        }

        // Output
        if (options.json) {
            const jsonOutput = JSON.stringify(result, null, 2);
            if (options.output) {
                fs.writeFileSync(options.output, jsonOutput);
                console.log(`\nJSON output saved to: ${options.output}`);
            } else {
                console.log('\nJSON OUTPUT:');
                console.log(jsonOutput);
            }
        }

        console.log(`\n${'='.repeat(80)}`);
        console.log(`EXTRACTION COMPLETE`);
        console.log(`Total Sheets: ${result.sheetCount}`);
        console.log(`Total Data Rows: ${result.sheets.reduce((sum, s) => sum + (s.data?.length || 0), 0)}`);
        console.log(`${'='.repeat(80)}\n`);

        return result;

    } catch (error) {
        console.error(`\nERROR reading Excel file: ${error.message}`);
        if (ext === '.xlsb') {
            console.error('Note: .xlsb (Excel Binary) format has limited support.');
            console.error('Consider converting to .xlsx format for better compatibility.');
        }
        throw error;
    }
}

// Batch read multiple Excel files
async function readExcelDirectory(dirPath, options = {}) {
    const results = [];
    const excelExtensions = ['.xlsx', '.xlsm', '.xlsb', '.xls'];

    function findExcelFiles(dir) {
        const files = [];
        const items = fs.readdirSync(dir, { withFileTypes: true });

        for (const item of items) {
            const fullPath = path.join(dir, item.name);
            if (item.isDirectory()) {
                files.push(...findExcelFiles(fullPath));
            } else if (excelExtensions.includes(path.extname(item.name).toLowerCase())) {
                files.push(fullPath);
            }
        }
        return files;
    }

    const excelFiles = findExcelFiles(dirPath);
    console.log(`Found ${excelFiles.length} Excel files in ${dirPath}\n`);

    for (const file of excelFiles) {
        try {
            const result = await readExcelFile(file, { ...options, summary: true });
            results.push(result);
        } catch (error) {
            console.error(`Failed to read ${file}: ${error.message}`);
            results.push({
                fileName: path.basename(file),
                filePath: file,
                error: error.message
            });
        }
    }

    return results;
}

// CLI execution
if (require.main === module) {
    const args = process.argv.slice(2);

    if (args.length === 0) {
        console.log(`
Excel File Reader
=================
Usage: node scripts/read_excel.js <file_path> [options]

Options:
  --sheet <name>     Read specific sheet by name
  --all              Read all sheets (default)
  --summary          Output summary only (sheet names, row counts)
  --json             Output as JSON format
  --output <path>    Save output to file
  --dir              Treat path as directory, read all Excel files

Examples:
  node scripts/read_excel.js data.xlsx
  node scripts/read_excel.js data.xlsx --sheet "Sheet1" --json
  node scripts/read_excel.js ./data --dir --summary
        `);
        process.exit(0);
    }

    const filePath = args[0];
    const options = {
        sheet: args.includes('--sheet') ? args[args.indexOf('--sheet') + 1] : null,
        summary: args.includes('--summary'),
        json: args.includes('--json'),
        output: args.includes('--output') ? args[args.indexOf('--output') + 1] : null,
        dir: args.includes('--dir')
    };

    (async () => {
        try {
            if (options.dir) {
                await readExcelDirectory(filePath, options);
            } else {
                await readExcelFile(filePath, options);
            }
        } catch (error) {
            console.error('Error:', error.message);
            process.exit(1);
        }
    })();
}

module.exports = { readExcelFile, readExcelDirectory };
