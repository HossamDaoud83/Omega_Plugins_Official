#!/usr/bin/env node
// omega-ops — Validates that a Value Stream Map deliverable has the integrity basics:
//   - explicit start node ("Customer demand" / "Trigger")
//   - explicit end node ("Delivery" / "Customer receipt")
//   - takt time defined
//   - cycle time(s) defined

'use strict';

const fs = require('fs');

function readHookInput() {
  if (process.env.CLAUDE_HOOK_INPUT) {
    try { return JSON.parse(process.env.CLAUDE_HOOK_INPUT); } catch { return {}; }
  }
  if (process.stdin.isTTY) return {};
  try { const raw = fs.readFileSync(0, 'utf8'); return raw ? JSON.parse(raw) : {}; } catch { return {}; }
}

function isHookDisabled(name) {
  const d = (process.env.OMEGA_DISABLED_HOOKS || '').split(',').map(s => s.trim());
  return d.includes('all') || d.includes(name);
}

if (isHookDisabled('vsm-integrity')) process.exit(0);

const input = readHookInput();
const ti = input.tool_input || {};
const content = [ti.content, ti.file_text, ti.new_string].filter(Boolean).join('\n');
if (!content) process.exit(0);

const target = ti.file_path || '<unknown>';

const checks = [
  { name: 'Start node', regex: /\b(start|trigger|customer\s+demand|kickoff)\b/i },
  { name: 'End node',   regex: /\b(end|delivery|receipt|hand[- ]?off|customer\s+receipt)\b/i },
  { name: 'Takt time',  regex: /\btakt\b/i },
  { name: 'Cycle time', regex: /\bcycle\s*time\b/i },
];

const missing = checks.filter(c => !c.regex.test(content)).map(c => c.name);
if (missing.length === 0) process.exit(0);

console.error('[omega-ops:vsm-integrity] VSM deliverable missing required elements in', target);
missing.forEach(m => console.error('  - missing:', m));
console.error('  A complete VSM needs: start node, end node, takt time, cycle time.');

process.exit(1);
