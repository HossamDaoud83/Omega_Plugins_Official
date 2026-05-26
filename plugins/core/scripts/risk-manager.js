#!/usr/bin/env node
/**
 * Omega Consulting Template - Risk Manager
 *
 * Automates risk register management
 *
 * Usage:
 *   node risk-manager.js list              # List all risks
 *   node risk-manager.js add <title> <category> <priority>  # Add risk
 *   node risk-manager.js update <id> <status>  # Update risk status
 *   node risk-manager.js summary            # Show risk summary
 */

const fs = require('fs');
const path = require('path');

const RISK_PATH = path.join(__dirname, '..', '00_Engagement_Management', 'risk_register.md');
const STATE_PATH = path.join(__dirname, '..', 'session_state.json');

const CATEGORIES = ['Schedule', 'Scope', 'Resource', 'Technical', 'Client', 'External'];
const PRIORITIES = ['Critical', 'High', 'Medium', 'Low'];
const STATUSES = ['Open', 'Mitigating', 'Mitigated', 'Closed'];

function readJSON(filepath) {
    try {
        return JSON.parse(fs.readFileSync(filepath, 'utf8'));
    } catch (e) {
        return null;
    }
}

function writeJSON(filepath, data) {
    fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
}

function generateRiskId() {
    return `RISK-${String(Date.now()).slice(-6)}`;
}

function addRisk(title, category, priority, description, mitigation) {
    const riskId = generateRiskId();
    const timestamp = new Date().toISOString().split('T')[0];

    // Validate inputs
    if (!CATEGORIES.includes(category)) {
        console.error(`Invalid category. Use: ${CATEGORIES.join(', ')}`);
        return;
    }
    if (!PRIORITIES.includes(priority)) {
        console.error(`Invalid priority. Use: ${PRIORITIES.join(', ')}`);
        return;
    }

    const riskEntry = `
### [${riskId}] ${title}
**Category:** ${category}
**Status:** Open
**Priority:** ${priority}
**Owner:** [Assign Owner]
**Identified:** ${timestamp}

**Description:**
${description || title}

**Impact if Realized:**
- [Define impact]

**Probability:** Medium
**Impact Severity:** ${priority === 'Critical' || priority === 'High' ? 'High' : 'Medium'}

**Mitigation Strategy:**
1. ${mitigation || '[Define mitigation steps]'}

**Contingency Plan:**
[Define contingency if risk is realized]

**Updates:**
| Date | Update | By |
|------|--------|-----|
| ${timestamp} | Risk identified | System |

---
`;

    // Append to risk register
    let content = fs.readFileSync(RISK_PATH, 'utf8');

    // Find the "High Priority" section and add after it
    const highPriorityMarker = '### High Priority';
    const mediumPriorityMarker = '### Medium Priority';
    const lowPriorityMarker = '### Low Priority';

    let insertMarker;
    if (priority === 'Critical' || priority === 'High') {
        insertMarker = highPriorityMarker;
    } else if (priority === 'Medium') {
        insertMarker = mediumPriorityMarker;
    } else {
        insertMarker = lowPriorityMarker;
    }

    // Find and replace the "No risks identified" placeholder
    const noRisksPattern = new RegExp(`(${insertMarker.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\S]*?)\\*No [a-z]+ priority risks identified\\*`, 'i');

    if (content.match(noRisksPattern)) {
        content = content.replace(noRisksPattern, `$1${riskEntry}`);
    } else {
        // Append after the marker
        const markerIndex = content.indexOf(insertMarker);
        if (markerIndex !== -1) {
            const insertPoint = content.indexOf('\n', markerIndex) + 1;
            content = content.slice(0, insertPoint) + riskEntry + content.slice(insertPoint);
        } else {
            // Fallback: append at end
            content += riskEntry;
        }
    }

    fs.writeFileSync(RISK_PATH, content);

    // Update state
    const state = readJSON(STATE_PATH);
    if (state) {
        if (!state.risk_summary) {
            state.risk_summary = { critical: 0, high: 0, medium: 0, low: 0, total_open: 0 };
        }
        state.risk_summary[priority.toLowerCase()] = (state.risk_summary[priority.toLowerCase()] || 0) + 1;
        state.risk_summary.total_open = (state.risk_summary.total_open || 0) + 1;
        state.last_updated = new Date().toISOString();
        writeJSON(STATE_PATH, state);
    }

    console.log(`\n[OK] Risk created: ${riskId}`);
    console.log(`     Title: ${title}`);
    console.log(`     Category: ${category}`);
    console.log(`     Priority: ${priority}\n`);
}

function showSummary() {
    const state = readJSON(STATE_PATH);

    console.log('\n' + '='.repeat(50));
    console.log('RISK SUMMARY');
    console.log('='.repeat(50));

    if (state && state.risk_summary) {
        console.log(`\n  Critical: ${state.risk_summary.critical || 0}`);
        console.log(`  High:     ${state.risk_summary.high || 0}`);
        console.log(`  Medium:   ${state.risk_summary.medium || 0}`);
        console.log(`  Low:      ${state.risk_summary.low || 0}`);
        console.log(`  ─────────────`);
        console.log(`  Total:    ${state.risk_summary.total_open || 0}`);
    } else {
        console.log('\n  No risks tracked in session state.');
    }

    console.log('\n' + '='.repeat(50) + '\n');
}

function listRisks() {
    const content = fs.readFileSync(RISK_PATH, 'utf8');

    console.log('\n' + '='.repeat(60));
    console.log('RISK REGISTER');
    console.log('='.repeat(60));

    // Extract risks using regex
    const riskPattern = /### \[([^\]]+)\] ([^\n]+)\n\*\*Category:\*\* ([^\n]+)\n\*\*Status:\*\* ([^\n]+)\n\*\*Priority:\*\* ([^\n]+)/g;

    let match;
    let count = 0;

    while ((match = riskPattern.exec(content)) !== null) {
        count++;
        const [, id, title, category, status, priority] = match;
        const statusIcon = status === 'Open' ? '[!]' : status === 'Closed' ? '[OK]' : '[~]';

        console.log(`\n${statusIcon} ${id}: ${title}`);
        console.log(`    Category: ${category} | Priority: ${priority} | Status: ${status}`);
    }

    if (count === 0) {
        console.log('\nNo risks currently registered.');
    } else {
        console.log(`\nTotal risks: ${count}`);
    }

    console.log('\n' + '='.repeat(60) + '\n');
}

// Parse command
const command = process.argv[2];
const args = process.argv.slice(3);

switch (command) {
    case 'list':
        listRisks();
        break;
    case 'add':
        if (args.length < 3) {
            console.log('Usage: node risk-manager.js add <title> <category> <priority> [description] [mitigation]');
            console.log('\nCategories:', CATEGORIES.join(', '));
            console.log('Priorities:', PRIORITIES.join(', '));
            console.log('\nExample:');
            console.log('  node risk-manager.js add "Stakeholder availability" Schedule High');
        } else {
            addRisk(args[0], args[1], args[2], args[3], args[4]);
        }
        break;
    case 'summary':
        showSummary();
        break;
    default:
        console.log('Usage:');
        console.log('  node risk-manager.js list                              # List all risks');
        console.log('  node risk-manager.js add <title> <category> <priority> # Add new risk');
        console.log('  node risk-manager.js summary                           # Show risk summary');
        console.log('\nCategories:', CATEGORIES.join(', '));
        console.log('Priorities:', PRIORITIES.join(', '));
}
