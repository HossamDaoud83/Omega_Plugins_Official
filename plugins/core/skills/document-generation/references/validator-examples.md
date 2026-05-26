# Document Validator Examples

## Omega Brand Compliance Validator

```javascript
const fs = require("fs");
const path = require("path");

// Omega Brand Standards
const Omega_STANDARDS = {
    colors: {
        primary: "#1B4F72",
        tableHeader: "#1B4F72",
        tableBorder: "#1B4F72",
        headerText: "#FFFFFF"
    },
    fonts: {
        heading: ["Arial Black", "Arial"],
        body: ["Arial", "Helvetica"]
    },
    logo: {
        path: "assets/logos/omega-logo-full.png",
        maxHeight: 50
    },
    document: {
        margins: 1, // inch
        footer: "Confidential - Omega Consulting"
    }
};

/**
 * Validate a document against Omega brand standards
 */
function validateDocument(filePath, options = {}) {
    const ext = path.extname(filePath).toLowerCase();
    const validators = {
        ".md": validateMarkdown,
        ".html": validateHtml,
        ".css": validateCss,
        ".json": validateJson
    };
    
    const validator = validators[ext];
    if (!validator) {
        return {
            valid: false,
            file: filePath,
            error: `Unsupported file type: ${ext}`
        };
    }
    
    return validator(filePath, options);
}

/**
 * Validate Markdown file
 */
function validateMarkdown(filePath) {
    const content = fs.readFileSync(filePath, "utf8");
    const issues = [];
    
    // Check for required frontmatter
    if (!content.startsWith("---")) {
        issues.push({
            type: "warning",
            message: "Missing YAML frontmatter",
            suggestion: "Add ---\ntitle: [title]\nauthor: Omega Consulting\n---"
        });
    }
    
    // Check for proper heading hierarchy
    const headings = content.match(/^#+\s/gm) || [];
    if (headings.length > 0 && !headings[0].startsWith("# ")) {
        issues.push({
            type: "warning",
            message: "Document should start with H1 heading",
            suggestion: "Use single # for document title"
        });
    }
    
    // Check for Omega confidentiality footer
    if (!content.includes("Confidential") && !content.includes("Omega Consulting")) {
        issues.push({
            type: "info",
            message: "Consider adding confidentiality notice",
            suggestion: "Add footer: 'Confidential - Omega Consulting'"
        });
    }
    
    return {
        valid: issues.filter(i => i.type === "error").length === 0,
        file: filePath,
        issues: issues,
        summary: `${issues.length} issues found`
    };
}

/**
 * Validate HTML file for Omega styles
 */
function validateHtml(filePath) {
    const content = fs.readFileSync(filePath, "utf8");
    const issues = [];
    
    // Check for Omega stylesheet
    if (!content.includes("omega-style.css")) {
        issues.push({
            type: "warning",
            message: "Omega stylesheet not linked",
            suggestion: 'Add <link rel="stylesheet" href="assets/omega-style.css">'
        });
    }
    
    // Check for inline styles with wrong colors
    const colorRegex = /#[0-9a-fA-F]{6}/g;
    const colors = content.match(colorRegex) || [];
    const nonOmegaColors = colors.filter(c => 
        c.toUpperCase() !== "#1B4F72" && 
        c.toUpperCase() !== "#FFFFFF" &&
        c.toUpperCase() !== "#000000" &&
        c.toUpperCase() !== "#F8FBFD"
    );
    
    if (nonOmegaColors.length > 0) {
        issues.push({
            type: "warning",
            message: `Found non-Omega colors: ${[...new Set(nonOmegaColors)].join(", ")}`,
            suggestion: "Use CSS variables from omega-style.css"
        });
    }
    
    // Check for logo
    if (!content.includes("omega-logo")) {
        issues.push({
            type: "info",
            message: "Omega logo not found",
            suggestion: "Add logo in header area"
        });
    }
    
    return {
        valid: issues.filter(i => i.type === "error").length === 0,
        file: filePath,
        issues: issues,
        summary: `${issues.length} issues found`
    };
}

/**
 * Validate CSS file for Omega variables
 */
function validateCss(filePath) {
    const content = fs.readFileSync(filePath, "utf8");
    const issues = [];
    
    // Check for Omega CSS variables
    if (!content.includes("--omega-primary")) {
        issues.push({
            type: "warning",
            message: "Omega CSS variables not defined",
            suggestion: "Include :root { --omega-primary: #1B4F72; ... }"
        });
    }
    
    return {
        valid: issues.filter(i => i.type === "error").length === 0,
        file: filePath,
        issues: issues,
        summary: `${issues.length} issues found`
    };
}

/**
 * Validate JSON branding file
 */
function validateJson(filePath) {
    const issues = [];
    
    try {
        const content = JSON.parse(fs.readFileSync(filePath, "utf8"));
        
        // Check for required fields
        const required = ["brand", "colors", "fonts"];
        required.forEach(field => {
            if (!content[field]) {
                issues.push({
                    type: "error",
                    message: `Missing required field: ${field}`,
                    suggestion: `Add "${field}" section to branding config`
                });
            }
        });
        
        // Validate primary color
        if (content.colors?.primary !== "#1B4F72") {
            issues.push({
                type: "warning",
                message: `Primary color should be #1B4F72, found: ${content.colors?.primary}`,
                suggestion: "Update to Omega primary blue"
            });
        }
        
    } catch (e) {
        issues.push({
            type: "error",
            message: `Invalid JSON: ${e.message}`,
            suggestion: "Fix JSON syntax errors"
        });
    }
    
    return {
        valid: issues.filter(i => i.type === "error").length === 0,
        file: filePath,
        issues: issues,
        summary: `${issues.length} issues found`
    };
}

// ============================================
// BATCH VALIDATION
// ============================================

/**
 * Validate all files in a directory
 */
function validateDirectory(dirPath, options = {}) {
    const { recursive = true, extensions = [".md", ".html", ".css", ".json"] } = options;
    const results = [];
    
    function scanDir(dir) {
        const items = fs.readdirSync(dir);
        
        items.forEach(item => {
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory() && recursive) {
                scanDir(fullPath);
            } else if (stat.isFile()) {
                const ext = path.extname(item).toLowerCase();
                if (extensions.includes(ext)) {
                    results.push(validateDocument(fullPath));
                }
            }
        });
    }
    
    scanDir(dirPath);
    
    // Summary
    const valid = results.filter(r => r.valid).length;
    const invalid = results.filter(r => !r.valid).length;
    const allIssues = results.flatMap(r => r.issues || []);
    
    return {
        summary: {
            total: results.length,
            valid: valid,
            invalid: invalid,
            errors: allIssues.filter(i => i.type === "error").length,
            warnings: allIssues.filter(i => i.type === "warning").length,
            info: allIssues.filter(i => i.type === "info").length
        },
        results: results
    };
}

/**
 * Generate validation report
 */
function generateReport(validationResults) {
    const { summary, results } = validationResults;
    
    let report = `
═══════════════════════════════════════════════════════════════
Omega BRAND VALIDATION REPORT
═══════════════════════════════════════════════════════════════

SUMMARY
├── Files Checked: ${summary.total}
├── Valid: ${summary.valid}
├── Invalid: ${summary.invalid}
├── Errors: ${summary.errors}
├── Warnings: ${summary.warnings}
└── Info: ${summary.info}

`;
    
    // Details for files with issues
    results.filter(r => r.issues?.length > 0).forEach(r => {
        report += `\n${r.valid ? "✓" : "✗"} ${r.file}\n`;
        r.issues.forEach(issue => {
            const icon = issue.type === "error" ? "❌" : issue.type === "warning" ? "⚠️" : "ℹ️";
            report += `  ${icon} ${issue.message}\n`;
            if (issue.suggestion) {
                report += `     → ${issue.suggestion}\n`;
            }
        });
    });
    
    report += `
═══════════════════════════════════════════════════════════════
`;
    
    return report;
}

// ============================================
// USAGE
// ============================================

// Validate single file
const result = validateDocument("05_Deliverables_Final/report.md");
console.log(result);

// Validate entire directory
const dirResults = validateDirectory("05_Deliverables_Final/");
console.log(generateReport(dirResults));
```

---

## Quick Validation Checklist

| Check | Standard |
|-------|----------|
| Primary Color | `#1B4F72` |
| Heading Font | Arial Black |
| Body Font | Arial |
| Table Header BG | `#1B4F72` |
| Table Header Text | White |
| Logo Present | Yes |
| Footer | "Confidential - Omega Consulting" |
