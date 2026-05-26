#!/usr/bin/env node
// Omega @omega/core — PostToolUse hook (Edit on 00_Engagement_Management/)
// Alerts when blockers in deliverables_tracker.json or risk_register.md
// have been untouched > 3 days. Non-blocking advisory.

const path = require('path');
const {
  readJSON, readText, daysBetween, readHookInput, isHookDisabled, logToStderr,
} = require(path.join(__dirname, '..', 'lib', 'utils.js'));

if (isHookDisabled('stale-blocker-alert')) process.exit(0);

const input = readHookInput();
const tool = input.tool || input.tool_name || '';
if (!['Edit', 'Write'].includes(tool)) process.exit(0);

const ti = input.tool_input || {};
const filePath = ti.file_path || ti.path || '';
if (!filePath.includes('00_Engagement_Management')) process.exit(0);

// Re-read tracker after the edit
const tracker = readJSON('00_Engagement_Management/deliverables_tracker.json');
if (!tracker) process.exit(0);

const STALE_DAYS = 3;
const stale = (tracker.deliverables || [])
  .filter(d => d.status === 'blocked' && d.last_updated && daysBetween(d.last_updated) > STALE_DAYS);

if (stale.length === 0) process.exit(0);

logToStderr(`⏳ ${stale.length} blocker(s) untouched > ${STALE_DAYS} days:`);
stale.forEach(d => {
  const days = daysBetween(d.last_updated);
  logToStderr(`   - ${d.id} "${d.title}" — ${days}d (escalate or update mitigation)`);
});

process.exit(0);
