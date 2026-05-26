#!/usr/bin/env node
// Omega @omega/core — PostToolUse hook (Edit/Write under 05_Deliverables_Final/)
// Validates Omega branding compliance for client-ready deliverables.
// Non-blocking warnings; quality gate enforces hard requirements.

const path = require('path');
const fs = require('fs');
const {
  PROJECT_ROOT, exists, readJSON, readHookInput, isHookDisabled, logToStderr,
} = require(path.join(__dirname, '..', 'lib', 'utils.js'));

if (isHookDisabled('branding-check')) process.exit(0);

const input = readHookInput();
const tool = input.tool || input.tool_name || '';
if (!['Edit', 'Write'].includes(tool)) process.exit(0);

const ti = input.tool_input || {};
const filePath = ti.file_path || ti.path;
if (!filePath) process.exit(0);

// Only enforce on files under 05_Deliverables_Final/ (or final/)
const abs = path.resolve(filePath);
const isFinalDeliverable = abs.includes(`${path.sep}05_Deliverables_Final${path.sep}`)
                        || abs.includes(`${path.sep}final${path.sep}`);
if (!isFinalDeliverable) process.exit(0);

// Markdown / docx generation source — check for branding tokens
const ext = path.extname(filePath).toLowerCase();
const checkable = ['.md', '.txt', '.html', '.tex'];
if (!checkable.includes(ext)) process.exit(0);

const content = ti.content || ti.file_text || ti.new_string || '';
if (!content) process.exit(0);

const findings = [];

// Heuristic checks
const hasOmegaReference = /Omega Consulting|omega|@omega/i.test(content);
const hasConfidentialMarker = /confidential|client-ready|draft/i.test(content);
const hasClientName = readJSON('project.json')?.client?.name;
const mentionsClient = hasClientName && content.toLowerCase().includes(String(hasClientName).toLowerCase());

if (!hasOmegaReference) {
  findings.push('No Omega / Omega Consulting attribution detected');
}
if (!hasConfidentialMarker) {
  findings.push('No CONFIDENTIAL / DRAFT marker — final deliverables should declare classification');
}
if (hasClientName && !mentionsClient) {
  findings.push(`Project client "${hasClientName}" not referenced in deliverable`);
}

if (findings.length > 0) {
  logToStderr(`📋 BRANDING CHECK — ${path.basename(filePath)}:`);
  findings.forEach(f => logToStderr(`   - ${f}`));
  logToStderr(`   Validate against assets/omega-branding.json before client send.`);
}

process.exit(0);
