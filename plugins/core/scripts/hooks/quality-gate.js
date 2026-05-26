#!/usr/bin/env node
// Omega @omega/core — PostToolUse hook (Edit on deliverables_tracker.json)
// When a deliverable status moves to "completed", verify the quality gate passed.
// BLOCKING — exits non-zero if gate not passed.

const path = require('path');
const {
  PROJECT_ROOT, readJSON, readHookInput, isHookDisabled, getProfile, logToStderr,
} = require(path.join(__dirname, '..', 'lib', 'utils.js'));

if (isHookDisabled('quality-gate')) process.exit(0);

const input = readHookInput();
const tool = input.tool || input.tool_name || '';
if (!['Edit', 'Write'].includes(tool)) process.exit(0);

const ti = input.tool_input || {};
const filePath = ti.file_path || ti.path || '';
if (!filePath.includes('deliverables_tracker.json')) process.exit(0);

const tracker = readJSON('00_Engagement_Management/deliverables_tracker.json');
if (!tracker) process.exit(0);

const newlyCompleted = (tracker.deliverables || [])
  .filter(d => d.status === 'completed' && !d.quality_gate_passed_at);

if (newlyCompleted.length === 0) process.exit(0);

const profile = getProfile();
const failures = [];

for (const d of newlyCompleted) {
  // Check 1: acceptance criteria coverage
  if (!d.acceptance_criteria || d.acceptance_criteria.length === 0) {
    failures.push(`${d.id}: no acceptance criteria defined`);
    continue;
  }
  const unmet = (d.acceptance_criteria || []).filter(c => !c.met);
  if (unmet.length > 0) {
    failures.push(`${d.id}: ${unmet.length}/${d.acceptance_criteria.length} acceptance criteria unmet`);
  }

  // Check 2: quality_score threshold
  const minScore = profile === 'banking' ? 85 : 75;
  if (d.quality_score == null) {
    failures.push(`${d.id}: quality_score missing — run /omega:verify-quality first`);
  } else if (d.quality_score < minScore) {
    failures.push(`${d.id}: quality_score ${d.quality_score} < required ${minScore} (profile=${profile})`);
  }

  // Check 3: deliverable file exists
  if (d.deliverable_file && !require('fs').existsSync(path.join(PROJECT_ROOT, d.deliverable_file))) {
    failures.push(`${d.id}: deliverable_file ${d.deliverable_file} does not exist`);
  }

  // Check 4: peer review (banking profile only)
  if (profile === 'banking' && !d.peer_reviewed_by) {
    failures.push(`${d.id}: peer review required (profile=banking)`);
  }
}

if (failures.length > 0) {
  logToStderr('🚫 QUALITY GATE FAILED:');
  failures.forEach(f => logToStderr(`   - ${f}`));
  logToStderr('   Revert the status change, fix the gaps, then re-mark complete.');
  process.exit(2); // BLOCKING — non-zero exit signals failure to Claude Code
}

logToStderr(`✅ Quality gate passed for ${newlyCompleted.length} deliverable(s)`);
process.exit(0);
