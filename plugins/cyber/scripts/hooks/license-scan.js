#!/usr/bin/env node
// omega-cyber — License scanner. Fires on Edit/Write to dependency manifests.
// Flags GPL/AGPL/LGPL/CC-BY-NC/proprietary licenses.

'use strict';

const fs = require('fs');

function readHookInput() {
  if (process.env.CLAUDE_HOOK_INPUT) {
    try { return JSON.parse(process.env.CLAUDE_HOOK_INPUT); } catch { return {}; }
  }
  if (process.stdin.isTTY) return {};
  try {
    const raw = fs.readFileSync(0, 'utf8');
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

function isHookDisabled(name) {
  const disabled = (process.env.OMEGA_DISABLED_HOOKS || '').split(',').map(s => s.trim());
  return disabled.includes('all') || disabled.includes(name);
}

if (isHookDisabled('license-scan')) process.exit(0);

const RISKY = {
  GPL:        /\b(GPL|GNU General Public License)(?:[\s,;]|-)?(2|3)?\b/i,
  AGPL:       /\bAGPL(?:[\s,;]|-)?(3)?\b/i,
  LGPL:       /\bLGPL(?:[\s,;]|-)?(2|3)?\b/i,
  Commons:    /\bCC[ -]?BY[ -]?(NC|SA|ND)\b/i,
  Proprietary:/\b(proprietary|commercial license required|all rights reserved)\b/i,
};

const input = readHookInput();
const ti = input.tool_input || {};
const content = [ti.content, ti.file_text, ti.new_string].filter(Boolean).join('\n');
if (!content) process.exit(0);

const target = ti.file_path || '<unknown>';
const found = Object.entries(RISKY).filter(([_, rx]) => rx.test(content)).map(([n]) => n);

if (found.length === 0) process.exit(0);

console.error('[omega-cyber:license-scan] Restricted licenses detected in', target);
found.forEach(name => console.error('  -', name, '(may be incompatible with client work)'));
console.error('  Confirm license compatibility before committing to client deliverable.');

process.exit(1);
