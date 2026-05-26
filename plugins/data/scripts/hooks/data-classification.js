#!/usr/bin/env node
// omega-data — Validates classification marker on documents.
// Acceptable markers in the first 30 lines: Public | Internal | Confidential | Restricted.

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

if (isHookDisabled('data-classification')) process.exit(0);

const input = readHookInput();
const ti = input.tool_input || {};
const content = [ti.content, ti.file_text, ti.new_string].filter(Boolean).join('\n');
if (!content) process.exit(0);

const target = ti.file_path || '<unknown>';

// Only enforce on text-content files
if (!/\.(md|txt|rst)$/i.test(target)) process.exit(0);

const head = content.split('\n').slice(0, 30).join('\n');
const ok = /\b(Classification|Sensitivity)\s*:\s*(Public|Internal|Confidential|Restricted)\b/i.test(head)
  || /^>\s*(Public|Internal|Confidential|Restricted)\s*$/im.test(head);

if (ok) process.exit(0);

console.error('[omega-data:data-classification] Missing classification marker in', target);
console.error('  Add a line in the first 30 lines, e.g.:');
console.error('     **Classification:** Confidential');
console.error('  Acceptable values: Public | Internal | Confidential | Restricted.');

process.exit(1);
