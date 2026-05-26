const mammoth = require("mammoth");
const fs = require("fs");
const path = require("path");

const dataDir = path.join(__dirname, "..", "01_Discovery", "data_collected");

async function readDocx(filePath) {
    try {
        const result = await mammoth.extractRawText({ path: filePath });
        return result.value;
    } catch (error) {
        return `Error reading ${filePath}: ${error.message}`;
    }
}

async function readAllDocuments() {
    const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.docx'));

    for (const file of files) {
        console.log("\n" + "=".repeat(80));
        console.log(`FILE: ${file}`);
        console.log("=".repeat(80) + "\n");

        const content = await readDocx(path.join(dataDir, file));
        console.log(content);
    }
}

readAllDocuments().catch(console.error);
