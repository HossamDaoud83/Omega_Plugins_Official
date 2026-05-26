/**
 * ═══════════════════════════════════════════════════════════════════
 * Omega METHODOLOGY - Universal Document Generation Framework
 * ═══════════════════════════════════════════════════════════════════
 *
 * Version: 1.0.0
 * Created: 2026-02-04
 *
 * PURPOSE:
 * Enforces unified Omega branding and Big 3 consulting quality standards
 * across ALL document generation (DOCX, XLSX, PDF, PPTX).
 *
 * MANDATORY USAGE:
 * Every document generation script MUST call validateOmegaMethodology()
 * before generating any files. This ensures:
 * - Consistent branding across all deliverables
 * - Big 3 caliber quality (McKinsey, BCG, Bain standards)
 * - Template compliance and asset availability
 * - Professional formatting and structure
 *
 * ═══════════════════════════════════════════════════════════════════
 */

const fs = require('fs');
const path = require('path');

// ═══════════════════════════════════════════════════════════════════
// CONSTANTS
// ═══════════════════════════════════════════════════════════════════

const METHODOLOGY_VERSION = '1.0.0';
const ASSETS_FOLDER = path.join(__dirname, '../assets');

const REQUIRED_ASSETS = {
    core: [
        'omega-branding.json',
        'Omega_DOCX_Template_Standards_v1.0.json',
        'Omega_EXCEL_Template_Standards_v1.0.json'
    ],
    big3: [
        'BIG3_VISUALIZATION_LIBRARY.json',
        'BIG3_CONSULTING_FRAMEWORKS.json',
        'BIG3_DOCUMENT_PATTERNS.json',
        'BIG3_CHART_GENERATION_GUIDE.md'
    ],
    logos: [
        'logos/omega-logo-full.png'
    ]
};

const DOCUMENT_TYPES = {
    DOCX: 'Microsoft Word Document',
    XLSX: 'Microsoft Excel Workbook',
    PDF: 'Adobe PDF Document',
    PPTX: 'Microsoft PowerPoint Presentation'
};

// ═══════════════════════════════════════════════════════════════════
// VALIDATION FUNCTIONS
// ═══════════════════════════════════════════════════════════════════

/**
 * Validates that all required Omega assets exist
 * @throws {Error} If any required asset is missing
 */
function validateAssetFiles() {
    const allAssets = [
        ...REQUIRED_ASSETS.core,
        ...REQUIRED_ASSETS.big3,
        ...REQUIRED_ASSETS.logos
    ];

    const missingAssets = [];

    for (const asset of allAssets) {
        const assetPath = path.join(ASSETS_FOLDER, asset);
        if (!fs.existsSync(assetPath)) {
            missingAssets.push(asset);
        }
    }

    if (missingAssets.length > 0) {
        throw new Error(
            `❌ Omega METHODOLOGY VALIDATION FAILED\n\n` +
            `Missing required assets:\n${missingAssets.map(a => `  - ${a}`).join('\n')}\n\n` +
            `All document generation must use the assets folder for consistency.`
        );
    }
}

/**
 * Loads and validates Omega branding configuration
 * @returns {Object} Validated branding configuration
 */
function loadBranding() {
    const brandingPath = path.join(ASSETS_FOLDER, 'omega-branding.json');
    const branding = JSON.parse(fs.readFileSync(brandingPath, 'utf8'));

    // Validate essential branding elements
    if (!branding.colors || !branding.colors.primary) {
        throw new Error('❌ Invalid branding: Missing color palette');
    }
    if (!branding.typography || !branding.typography.fonts) {
        throw new Error('❌ Invalid branding: Missing typography standards');
    }
    if (!branding.assets || !branding.assets.logos) {
        throw new Error('❌ Invalid branding: Missing logo configuration');
    }

    return branding;
}

/**
 * Loads document template standards based on type
 * @param {string} docType - Document type (DOCX, XLSX, PDF, PPTX)
 * @returns {Object} Template standards
 */
function loadTemplateStandards(docType) {
    const templateFiles = {
        DOCX: 'Omega_DOCX_Template_Standards_v1.0.json',
        XLSX: 'Omega_EXCEL_Template_Standards_v1.0.json',
        PDF: 'Omega_DOCX_Template_Standards_v1.0.json', // PDF uses DOCX structure
        PPTX: 'Omega_DOCX_Template_Standards_v1.0.json' // PPTX uses similar structure
    };

    const templateFile = templateFiles[docType];
    if (!templateFile) {
        throw new Error(`❌ Unknown document type: ${docType}`);
    }

    const templatePath = path.join(ASSETS_FOLDER, templateFile);
    return JSON.parse(fs.readFileSync(templatePath, 'utf8'));
}

/**
 * Loads Big 3 consulting frameworks and patterns
 * @returns {Object} Big 3 libraries
 */
function loadBig3Libraries() {
    const vizLibPath = path.join(ASSETS_FOLDER, 'BIG3_VISUALIZATION_LIBRARY.json');
    const frameworksPath = path.join(ASSETS_FOLDER, 'BIG3_CONSULTING_FRAMEWORKS.json');
    const patternsPath = path.join(ASSETS_FOLDER, 'BIG3_DOCUMENT_PATTERNS.json');

    return {
        visualization: JSON.parse(fs.readFileSync(vizLibPath, 'utf8')),
        frameworks: JSON.parse(fs.readFileSync(frameworksPath, 'utf8')),
        patterns: JSON.parse(fs.readFileSync(patternsPath, 'utf8'))
    };
}

// ═══════════════════════════════════════════════════════════════════
// MAIN VALIDATION FUNCTION
// ═══════════════════════════════════════════════════════════════════

/**
 * Omega METHODOLOGY - Primary Validation Entry Point
 *
 * MANDATORY: Call this function at the start of EVERY document generation script
 *
 * @param {string} docType - Document type being generated (DOCX, XLSX, PDF, PPTX)
 * @param {Object} options - Optional configuration
 * @returns {Object} Complete Omega methodology configuration
 *
 * @example
 * const { branding, template, big3 } = validateOmegaMethodology('DOCX');
 * // Now proceed with document generation using loaded assets
 */
function validateOmegaMethodology(docType, options = {}) {
    console.log('\n═══════════════════════════════════════════════════════════════════');
    console.log('  Omega METHODOLOGY - Document Generation Validation');
    console.log('═══════════════════════════════════════════════════════════════════\n');

    // Validate document type
    if (!DOCUMENT_TYPES[docType]) {
        throw new Error(`❌ Invalid document type: ${docType}. Must be one of: ${Object.keys(DOCUMENT_TYPES).join(', ')}`);
    }

    console.log(`📄 Document Type: ${DOCUMENT_TYPES[docType]} (${docType})`);
    console.log(`🔧 Methodology Version: ${METHODOLOGY_VERSION}`);
    console.log(`📁 Assets Folder: ${ASSETS_FOLDER}\n`);

    // Step 1: Validate asset files
    console.log('🔍 Step 1/4: Validating required asset files...');
    validateAssetFiles();
    console.log('✅ All required assets found\n');

    // Step 2: Load Omega branding
    console.log('🎨 Step 2/4: Loading Omega branding configuration...');
    const branding = loadBranding();
    console.log(`✅ Branding loaded (v${branding.version})\n`);

    // Step 3: Load template standards
    console.log('📋 Step 3/4: Loading template standards...');
    const template = loadTemplateStandards(docType);
    console.log(`✅ Template standards loaded (v${template.version})\n`);

    // Step 4: Load Big 3 libraries
    console.log('🏆 Step 4/4: Loading Big 3 Caliber Libraries...');
    const big3 = loadBig3Libraries();
    console.log('✅ Big 3 frameworks and patterns loaded\n');

    console.log('═══════════════════════════════════════════════════════════════════');
    console.log('  ✅ Omega METHODOLOGY VALIDATION COMPLETE');
    console.log('  Ready to generate client-ready deliverables');
    console.log('═══════════════════════════════════════════════════════════════════\n');

    // Return complete configuration
    return {
        methodology: {
            version: METHODOLOGY_VERSION,
            validated: true,
            timestamp: new Date().toISOString()
        },
        branding,
        template,
        big3,
        options: {
            includeLogos: options.includeLogos !== false,
            includeBig3Frameworks: options.includeBig3Frameworks !== false,
            strictValidation: options.strictValidation !== false,
            ...options
        }
    };
}

// ═══════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════

/**
 * Get Omega color palette in various formats
 * @param {Object} branding - Branding configuration
 * @returns {Object} Color palette with hex, argb, rgb formats
 */
function getColorPalette(branding) {
    return {
        PRIMARY: branding.colors.primary.hexNoHash,
        DARK_TEAL: '#104E70',
        LIGHT_BLUE: '#9CC2E5',
        BODY_TEXT: branding.colors.bodyText.hexNoHash,
        CAPTION_GRAY: branding.colors.gray.hexNoHash,
        WHITE: branding.colors.white.hexNoHash,
        BLACK: branding.colors.black.hexNoHash,

        // Status colors
        CRITICAL: branding.colors.status.critical.hexNoHash,
        HIGH: branding.colors.status.high.hexNoHash,
        MEDIUM: branding.colors.status.medium.hexNoHash,
        LOW: branding.colors.status.low.hexNoHash,
        COMPLETE: branding.colors.status.complete.hexNoHash
    };
}

/**
 * Get typography standards
 * @param {Object} branding - Branding configuration
 * @returns {Object} Typography configuration
 */
function getTypography(branding) {
    return {
        fonts: branding.typography.fonts,
        sizes: branding.typography.sizes,
        lineSpacing: branding.typography.lineSpacing
    };
}

/**
 * Get logo file path
 * @param {Object} branding - Branding configuration
 * @returns {string} Absolute path to Omega logo
 */
function getLogoPath(branding) {
    return path.join(ASSETS_FOLDER, branding.assets.logos.full);
}

// ═══════════════════════════════════════════════════════════════════
// EXPORTS
// ═══════════════════════════════════════════════════════════════════

module.exports = {
    // Main validation function
    validateOmegaMethodology,

    // Helper functions
    getColorPalette,
    getTypography,
    getLogoPath,
    loadBranding,
    loadTemplateStandards,
    loadBig3Libraries,

    // Constants
    METHODOLOGY_VERSION,
    DOCUMENT_TYPES,
    REQUIRED_ASSETS,
    ASSETS_FOLDER
};
