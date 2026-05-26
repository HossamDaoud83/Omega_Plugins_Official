#!/usr/bin/env node
/**
 * Omega Consulting Template - New Engagement Setup Script
 *
 * Usage: node setup-new-engagement.js <engagement-name> <client-name> <service-line>
 *
 * Example: node setup-new-engagement.js "Digital Transformation" "Acme Corp" "DIG"
 */

const fs = require('fs');
const path = require('path');

// Service line codes
const SERVICE_LINES = {
    'DIG': 'Digital Transformation & Strategy',
    'AIG': 'AI Governance & Management',
    'AAI': 'Agentic AI & Intelligent Automation',
    'COE': 'Competency Center Solutions',
    'ESI': 'Enterprise Systems Integration',
    'EDU': 'Education Solutions',
    'HLT': 'Healthcare Digital Solutions',
    'GOV': 'Government & Public Sector',
    'STR': 'Corporate Business Advisory',
    'MAR': 'Maritime Industry Solutions',
    'ISO': 'ISO Certification Preparation'
};

function generateReference() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `Omega-${year}${month}-${random}`;
}

function setupEngagement(engagementName, clientName, serviceLine) {
    const timestamp = new Date().toISOString();
    const reference = generateReference();

    console.log('\n========================================');
    console.log('Omega ENGAGEMENT SETUP');
    console.log('========================================\n');

    // Validate service line
    if (!SERVICE_LINES[serviceLine]) {
        console.error(`Invalid service line: ${serviceLine}`);
        console.log('Valid options:', Object.keys(SERVICE_LINES).join(', '));
        process.exit(1);
    }

    console.log(`Engagement: ${engagementName}`);
    console.log(`Client: ${clientName}`);
    console.log(`Service Line: ${serviceLine} - ${SERVICE_LINES[serviceLine]}`);
    console.log(`Reference: ${reference}`);
    console.log(`Timestamp: ${timestamp}\n`);

    // Update project.json
    const projectPath = path.join(__dirname, '..', 'project.json');
    const project = JSON.parse(fs.readFileSync(projectPath, 'utf8'));
    project.engagement_name = engagementName;
    project.client = clientName;
    project.service_line = serviceLine;
    project.reference = reference;
    project.created_at = timestamp;
    project.last_updated = timestamp;
    fs.writeFileSync(projectPath, JSON.stringify(project, null, 2));
    console.log('[OK] Updated project.json');

    // Update session_state.json
    const statePath = path.join(__dirname, '..', 'session_state.json');
    const state = JSON.parse(fs.readFileSync(statePath, 'utf8'));
    state.engagement_name = engagementName;
    state.engagement_reference = reference;
    state.client = clientName;
    state.service_line = serviceLine;
    state.current_phase = 'Discovery';
    state.handoff_notes = `Engagement initialized. Service line: ${SERVICE_LINES[serviceLine]}. Ready for /project:session-start`;
    state.last_updated = timestamp;
    fs.writeFileSync(statePath, JSON.stringify(state, null, 2));
    console.log('[OK] Updated session_state.json');

    // Update deliverables_tracker.json
    const trackerPath = path.join(__dirname, '..', '00_Engagement_Management', 'deliverables_tracker.json');
    const tracker = JSON.parse(fs.readFileSync(trackerPath, 'utf8'));
    tracker.engagement_name = engagementName;
    tracker.client = clientName;
    tracker.service_line = serviceLine;
    tracker.created_at = timestamp;
    tracker.last_updated = timestamp;
    fs.writeFileSync(trackerPath, JSON.stringify(tracker, null, 2));
    console.log('[OK] Updated deliverables_tracker.json');

    // Update engagement_progress.md
    const progressPath = path.join(__dirname, '..', '00_Engagement_Management', 'engagement_progress.md');
    let progress = fs.readFileSync(progressPath, 'utf8');
    progress = progress.replace('[ENGAGEMENT_NAME]', engagementName);
    progress = progress.replace('[REFERENCE_NUMBER]', reference);
    progress = progress.replace('[CLIENT_NAME]', clientName);
    progress = progress.replace('[SERVICE_LINE_CODE]', serviceLine);
    progress = progress.replace('[SERVICE_LINE_NAME]', SERVICE_LINES[serviceLine]);
    progress = progress.replace('[DATE]', timestamp.split('T')[0]);
    fs.writeFileSync(progressPath, progress);
    console.log('[OK] Updated engagement_progress.md');

    // Update risk_register.md
    const riskPath = path.join(__dirname, '..', '00_Engagement_Management', 'risk_register.md');
    let risk = fs.readFileSync(riskPath, 'utf8');
    risk = risk.replace('[ENGAGEMENT_NAME]', engagementName);
    risk = risk.replace('[ISO_TIMESTAMP]', timestamp);
    fs.writeFileSync(riskPath, risk);
    console.log('[OK] Updated risk_register.md');

    console.log('\n========================================');
    console.log('SETUP COMPLETE');
    console.log('========================================');
    console.log('\nNext steps:');
    console.log('1. Open Claude Code in this directory');
    console.log('2. Run: /project:session-start');
    console.log('3. Begin working on deliverables\n');
}

// Parse command line arguments
const args = process.argv.slice(2);

if (args.length < 3) {
    console.log('Usage: node setup-new-engagement.js <engagement-name> <client-name> <service-line>');
    console.log('\nService Lines:');
    Object.entries(SERVICE_LINES).forEach(([code, name]) => {
        console.log(`  ${code} - ${name}`);
    });
    console.log('\nExample:');
    console.log('  node setup-new-engagement.js "Digital Transformation" "Acme Corp" "DIG"');
    process.exit(1);
}

setupEngagement(args[0], args[1], args[2].toUpperCase());
