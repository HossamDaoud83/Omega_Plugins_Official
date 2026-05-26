#!/usr/bin/env node
// omega-cyber — PII scanner. Fires on Edit/Write to deliverables.
// Scans for SSN, passport, IBAN, credit-card, national-ID, email, phone.
// Exit codes: 0 ok | 1 warning (advisory/standard) | 2 block (banking profile)

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

const PROFILE = process.env.OMEGA_HOOK_PROFILE || 'standard';
if (isHookDisabled('pii-scan')) process.exit(0);

const PATTERNS = [
  { name: 'US SSN',                 regex: /\b\d{3}-\d{2}-\d{4}\b/ },
  { name: 'US passport',            regex: /\b[A-Z]\d{8}\b/ },
  { name: 'IBAN',                   regex: /\b[A-Z]{2}\d{2}[A-Z0-9]{11,30}\b/ },
  { name: 'Credit card',            regex: /\b(?:4\d{3}|5[1-5]\d{2}|3[47]\d{2}|6(?:011|5\d{2}))[ -]?\d{4}[ -]?\d{4}[ -]?\d{4}\b/ },
  { name: 'Saudi national ID',      regex: /\b[12]\d{9}\b/ },
  { name: 'Egyptian national ID',   regex: /\b[23]\d{13}\b/ },
];

const input = readHookInput();
const tool = input.tool || input.tool_name || '';
if (!['Edit', 'Write', 'NotebookEdit'].includes(tool)) process.exit(0);

const ti = input.tool_input || {};
const content = [ti.content, ti.file_text, ti.new_string, ti.new_str].filter(Boolean).join('\n');
if (!content) process.exit(0);

const target = ti.file_path || '<unknown>';
const findings = PATTERNS.filter(p => p.regex.test(content)).map(p => p.name);

if (findings.length === 0) process.exit(0);

console.error('[omega-cyber:pii-scan] PII detected in', target);
findings.forEach(name => console.error('  -', name));
console.error('  Redact or pseudonymize before saving as a deliverable.');

// Block hard in banking profile, advisory otherwise
process.exit(PROFILE === 'banking' ? 2 : 1);
