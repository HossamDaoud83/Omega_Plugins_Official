// Omega @omega/core — shared hook utilities
// Pure helpers used by hooks/*.js. No side effects, no exits.

const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = process.env.Omega_PROJECT_ROOT || process.cwd();

const REQUIRED_ARTIFACTS = [
  'project.json',
  'session_state.json',
  '00_Engagement_Management/deliverables_tracker.json',
  '00_Engagement_Management/engagement_progress.md',
  '00_Engagement_Management/risk_register.md',
  '00_Engagement_Management/stakeholder_map.md',
];

function exists(relative) {
  return fs.existsSync(path.join(PROJECT_ROOT, relative));
}

function readJSON(relative) {
  try {
    return JSON.parse(fs.readFileSync(path.join(PROJECT_ROOT, relative), 'utf8'));
  } catch {
    return null;
  }
}

function writeJSON(relative, data) {
  fs.writeFileSync(path.join(PROJECT_ROOT, relative), JSON.stringify(data, null, 2) + '\n');
}

function readText(relative) {
  try {
    return fs.readFileSync(path.join(PROJECT_ROOT, relative), 'utf8');
  } catch {
    return null;
  }
}

function appendText(relative, text) {
  fs.appendFileSync(path.join(PROJECT_ROOT, relative), text);
}

function daysBetween(iso1, iso2 = new Date().toISOString()) {
  const ms = Math.abs(new Date(iso2) - new Date(iso1));
  return Math.floor(ms / (24 * 60 * 60 * 1000));
}

function readHookInput() {
  // Claude Code passes hook input as JSON in env or stdin.
  if (process.env.CLAUDE_HOOK_INPUT) {
    try {
      return JSON.parse(process.env.CLAUDE_HOOK_INPUT);
    } catch { return {}; }
  }
  if (process.stdin.isTTY) return {};
  try {
    const stdin = fs.readFileSync(0, 'utf8');
    return stdin ? JSON.parse(stdin) : {};
  } catch { return {}; }
}

function getProfile() {
  return process.env.OMEGA_HOOK_PROFILE || 'standard';
}

function isHookDisabled(name) {
  const disabled = (process.env.OMEGA_DISABLED_HOOKS || '').split(',').map(s => s.trim());
  return disabled.includes('all') || disabled.includes(name);
}

function logToStderr(...parts) {
  console.error('[Omega Hook]', ...parts);
}

module.exports = {
  PROJECT_ROOT,
  REQUIRED_ARTIFACTS,
  exists,
  readJSON,
  writeJSON,
  readText,
  appendText,
  daysBetween,
  readHookInput,
  getProfile,
  isHookDisabled,
  logToStderr,
};
