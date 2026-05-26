# Excel Generation Examples

## Complete Excel Workbook with Omega Branding

```javascript
const ExcelJS = require("exceljs");

// Omega Brand Colors (ARGB format for ExcelJS)
const Omega = {
    primary: "FF1B4F72",      // Dark blue with alpha
    tableHeader: "FF1B4F72",  // Dark blue with alpha
    white: "FFFFFFFF",
    black: "FF000000",
    altRow: "FFF8FBFD"        // Very light blue for alternating rows
};

/**
 * Create a complete Excel workbook with Omega styling
 */
async function createOmegaWorkbook(config) {
    const { title, author, sheets } = config;
    
    const workbook = new ExcelJS.Workbook();
    workbook.creator = author || "Omega Consulting";
    workbook.lastModifiedBy = "Omega Document Generator";
    workbook.created = new Date();
    workbook.modified = new Date();
    workbook.properties.title = title;
    workbook.properties.company = "Omega Consulting";
    
    sheets.forEach(sheetConfig => {
        addOmegaSheet(workbook, sheetConfig);
    });
    
    return workbook;
}

/**
 * Add a sheet with full Omega styling
 */
function addOmegaSheet(workbook, config) {
    const { name, headers, rows, columnWidths, freezeHeader } = config;
    
    const sheet = workbook.addWorksheet(name, {
        properties: { tabColor: { argb: Omega.primary } },
        pageSetup: {
            paperSize: 9, // A4
            orientation: "landscape",
            fitToPage: true
        },
        headerFooter: {
            oddHeader: `&C&"Arial,Bold"&14&K1B4F72${name}`,
            oddFooter: `&L&"Arial"&10Omega Consulting - Confidential&R&"Arial"&10&K1B4F72Page &P of &N`
        }
    });
    
    // Set column widths
    if (columnWidths) {
        columnWidths.forEach((width, index) => {
            sheet.getColumn(index + 1).width = width;
        });
    } else {
        // Auto width
        headers.forEach((_, index) => {
            sheet.getColumn(index + 1).width = 20;
        });
    }
    
    // Add header row with Omega styling
    const headerRow = sheet.addRow(headers);
    headerRow.height = 25;
    
    headerRow.eachCell((cell, colNumber) => {
        cell.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: Omega.tableHeader }
        };
        cell.font = {
            name: "Arial",
            bold: true,
            size: 11,
            color: { argb: Omega.white }
        };
        cell.border = {
            top: { style: "medium", color: { argb: Omega.primary } },
            left: { style: "thin", color: { argb: Omega.primary } },
            bottom: { style: "medium", color: { argb: Omega.primary } },
            right: { style: "thin", color: { argb: Omega.primary } }
        };
        cell.alignment = {
            vertical: "middle",
            horizontal: "center",
            wrapText: true
        };
    });
    
    // Add data rows with alternating colors
    rows.forEach((rowData, index) => {
        const dataRow = sheet.addRow(rowData);
        dataRow.height = 20;
        
        dataRow.eachCell((cell, colNumber) => {
            // Alternating row colors
            if (index % 2 === 1) {
                cell.fill = {
                    type: "pattern",
                    pattern: "solid",
                    fgColor: { argb: Omega.altRow }
                };
            }
            
            cell.font = {
                name: "Arial",
                size: 10,
                color: { argb: Omega.black }
            };
            cell.border = {
                top: { style: "thin", color: { argb: Omega.primary } },
                left: { style: "thin", color: { argb: Omega.primary } },
                bottom: { style: "thin", color: { argb: Omega.primary } },
                right: { style: "thin", color: { argb: Omega.primary } }
            };
            cell.alignment = {
                vertical: "middle",
                wrapText: true
            };
        });
    });
    
    // Freeze header row
    if (freezeHeader !== false) {
        sheet.views = [
            { state: "frozen", xSplit: 0, ySplit: 1, activeCell: "A2" }
        ];
    }
    
    // Add autofilter
    sheet.autoFilter = {
        from: { row: 1, column: 1 },
        to: { row: 1, column: headers.length }
    };
    
    return sheet;
}

/**
 * Add a summary/dashboard sheet
 */
function addSummarySheet(workbook, config) {
    const { title, metrics } = config;
    
    const sheet = workbook.addWorksheet("Summary", {
        properties: { tabColor: { argb: Omega.primary } }
    });
    
    // Title
    sheet.mergeCells("A1:D1");
    const titleCell = sheet.getCell("A1");
    titleCell.value = title;
    titleCell.font = {
        name: "Arial Black",
        size: 20,
        bold: true,
        color: { argb: Omega.primary }
    };
    titleCell.alignment = { horizontal: "center" };
    sheet.getRow(1).height = 35;
    
    // Metrics table
    let rowNum = 3;
    metrics.forEach(metric => {
        const row = sheet.getRow(rowNum);
        
        // Metric name
        const nameCell = sheet.getCell(`A${rowNum}`);
        nameCell.value = metric.name;
        nameCell.font = {
            name: "Arial",
            bold: true,
            size: 12,
            color: { argb: Omega.primary }
        };
        
        // Metric value
        const valueCell = sheet.getCell(`B${rowNum}`);
        valueCell.value = metric.value;
        valueCell.font = {
            name: "Arial",
            size: 14,
            bold: true
        };
        valueCell.alignment = { horizontal: "right" };
        
        // Status indicator
        const statusCell = sheet.getCell(`C${rowNum}`);
        statusCell.value = metric.status;
        statusCell.font = {
            name: "Arial",
            size: 12,
            color: { argb: getStatusColor(metric.status) }
        };
        
        rowNum++;
    });
    
    sheet.getColumn(1).width = 30;
    sheet.getColumn(2).width = 20;
    sheet.getColumn(3).width = 15;
    
    return sheet;
}

function getStatusColor(status) {
    const colors = {
        "Green": "FF28A745",
        "Yellow": "FFFFC107",
        "Red": "FFDC3545",
        "Complete": "FF28A745",
        "In Progress": "FFFFC107",
        "Not Started": "FF6C757D"
    };
    return colors[status] || Omega.black;
}

// ============================================
// USAGE EXAMPLES
// ============================================

/**
 * Create Deliverables Tracker Workbook
 */
async function createDeliverablesTracker() {
    const workbook = await createOmegaWorkbook({
        title: "Project Deliverables Tracker",
        author: "Omega Consulting",
        sheets: [
            {
                name: "Deliverables",
                headers: ["ID", "Deliverable", "Owner", "Due Date", "Status", "% Complete", "Notes"],
                columnWidths: [8, 40, 15, 12, 12, 12, 35],
                rows: [
                    ["D001", "Current State Assessment", "John Smith", "2024-12-25", "In Progress", "75%", "On track"],
                    ["D002", "Gap Analysis Report", "Jane Doe", "2024-12-30", "Not Started", "0%", "Waiting for D001"],
                    ["D003", "Recommendations Document", "John Smith", "2025-01-05", "Not Started", "0%", ""],
                    ["D004", "Implementation Roadmap", "Jane Doe", "2025-01-10", "Not Started", "0%", ""],
                    ["D005", "Executive Presentation", "Lead Consultant", "2025-01-15", "Not Started", "0%", "Final deliverable"]
                ]
            },
            {
                name: "Risk Register",
                headers: ["ID", "Risk Description", "Probability", "Impact", "Score", "Mitigation", "Owner", "Status"],
                columnWidths: [8, 35, 12, 10, 8, 30, 15, 12],
                rows: [
                    ["R001", "Resource availability", "Medium", "High", "6", "Cross-train team members", "PM", "Open"],
                    ["R002", "Data quality issues", "High", "Medium", "6", "Conduct data validation", "Data Lead", "Mitigating"],
                    ["R003", "Scope creep", "Low", "High", "3", "Weekly scope reviews", "PM", "Monitoring"]
                ]
            }
        ]
    });
    
    // Add summary sheet
    addSummarySheet(workbook, {
        title: "Project Dashboard",
        metrics: [
            { name: "Total Deliverables", value: 5, status: "" },
            { name: "Completed", value: 0, status: "Not Started" },
            { name: "In Progress", value: 1, status: "In Progress" },
            { name: "Not Started", value: 4, status: "Not Started" },
            { name: "Overall Progress", value: "15%", status: "Yellow" },
            { name: "Open Risks", value: 3, status: "Yellow" }
        ]
    });
    
    await workbook.xlsx.writeFile("Project_Tracker_2024-12-23.xlsx");
    console.log("Excel workbook created successfully!");
}

/**
 * Create Financial Analysis Workbook
 */
async function createFinancialAnalysis() {
    const workbook = await createOmegaWorkbook({
        title: "Financial Analysis",
        sheets: [
            {
                name: "Cost Analysis",
                headers: ["Category", "Year 1", "Year 2", "Year 3", "Total", "% of Total"],
                columnWidths: [25, 15, 15, 15, 15, 12],
                rows: [
                    ["Software Licenses", "$50,000", "$52,500", "$55,125", "$157,625", "35%"],
                    ["Implementation", "$75,000", "$25,000", "$0", "$100,000", "22%"],
                    ["Training", "$20,000", "$10,000", "$5,000", "$35,000", "8%"],
                    ["Support", "$30,000", "$31,500", "$33,075", "$94,575", "21%"],
                    ["Contingency", "$17,500", "$11,900", "$9,320", "$38,720", "9%"],
                    ["Change Management", "$10,000", "$5,000", "$2,500", "$17,500", "4%"],
                    ["TOTAL", "$202,500", "$135,900", "$105,020", "$443,420", "100%"]
                ]
            },
            {
                name: "Benefits Analysis",
                headers: ["Benefit Category", "Year 1", "Year 2", "Year 3", "Total"],
                columnWidths: [30, 15, 15, 15, 15],
                rows: [
                    ["Productivity Gains", "$0", "$100,000", "$150,000", "$250,000"],
                    ["Cost Avoidance", "$25,000", "$50,000", "$75,000", "$150,000"],
                    ["Revenue Increase", "$0", "$75,000", "$125,000", "$200,000"],
                    ["Risk Reduction", "$10,000", "$20,000", "$30,000", "$60,000"],
                    ["TOTAL BENEFITS", "$35,000", "$245,000", "$380,000", "$660,000"]
                ]
            }
        ]
    });
    
    await workbook.xlsx.writeFile("Financial_Analysis_2024-12-23.xlsx");
    console.log("Financial analysis workbook created!");
}

// Run examples
createDeliverablesTracker();
createFinancialAnalysis();
```

---

## Data Export Functions

```javascript
/**
 * Export JSON data to Excel with Omega formatting
 */
async function jsonToExcel(jsonData, outputPath, sheetName = "Data") {
    const workbook = new ExcelJS.Workbook();
    
    if (Array.isArray(jsonData) && jsonData.length > 0) {
        const headers = Object.keys(jsonData[0]);
        const rows = jsonData.map(item => headers.map(h => item[h]));
        
        addOmegaSheet(workbook, {
            name: sheetName,
            headers: headers,
            rows: rows
        });
    }
    
    await workbook.xlsx.writeFile(outputPath);
    return outputPath;
}

/**
 * Read Excel file and convert to JSON
 */
async function excelToJson(filePath, sheetName) {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    
    const sheet = sheetName 
        ? workbook.getWorksheet(sheetName) 
        : workbook.worksheets[0];
    
    const headers = [];
    const data = [];
    
    sheet.eachRow((row, rowNumber) => {
        if (rowNumber === 1) {
            row.eachCell(cell => headers.push(cell.value));
        } else {
            const rowData = {};
            row.eachCell((cell, colNumber) => {
                rowData[headers[colNumber - 1]] = cell.value;
            });
            data.push(rowData);
        }
    });
    
    return data;
}
```
