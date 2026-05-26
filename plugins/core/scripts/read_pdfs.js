const fs = require("fs");
const path = require("path");
const pdfParse = require("pdf-parse/lib/pdf-parse");

const dataDir = path.join(__dirname, "..", "01_Discovery", "data_collected");

async function readPdf(filePath) {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const data = await pdfParse(dataBuffer);
        return data.text;
    } catch (error) {
        return `Error reading ${filePath}: ${error.message}`;
    }
}

async function readAllPdfs() {
    const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.pdf'));

    for (const file of files) {
        console.log("\n" + "=".repeat(80));
        console.log(`FILE: ${file}`);
        console.log("=".repeat(80) + "\n");

        const content = await readPdf(path.join(dataDir, file));
        console.log(content);
    }
}

readAllPdfs().catch(console.error);
