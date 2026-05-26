#!/usr/bin/env node
// omega-ai-dd — Pre Write on dd outputs. Refuses export to client folder unless
// PII/sensitive markers are redacted. This is a HARD block by default in the dd flow.

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

const PROFILE = process.env.OMEGA_HOOK_PROFILE || 'standard';
if (isHookDisabled('redact-on-export')) process.exit(0);

const PATTERNS = [
  { name: 'Email address',     regex: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/ },
  { name: 'IBAN',              regex: /\b[A-Z]{2}\d{2}[A-Z0-9]{11,30}\b/ },
  { name: 'Credit card',       regex: /\b(?:4\d{3}|5[1-5]\d{2}|3[47]\d{2}|6(?:011|5\d{2}))[ -]?\d{4}[ -]?\d{4}[ -]?\d{4}\b/ },
  { name: 'Phone (intl)',      regex: /\+\d{1,3}[ -]?\(?\d{1,4}\)?[ -]?\d{3,4}[ -]?\d{3,4}/ },
  { name: 'Saudi national ID', regex: /\b[12]\d{9}\b/ },
  { name: 'Salary line',       regex: /\b(salary|comp|compensation)\b\s*[:=]\s*\$?\s*\d{2,3}[,.]?\d{3}/i },
];

const input = readHookInput();
const tool = input.tool || input.tool_name || '';
if (tool !== 'Write') process.exit(0);

const ti = input.tool_input || {};
const content = [ti.content, ti.file_text].filter(Boolean).join('\n');
if (!content) process.exit(0);

const target = ti.file_path || '<unknown>';

const findings = PATTERNS.filter(p => p.regex.test(content)).map(p => p.name);
if (findings.length === 0) process.exit(0);

console.error('[omega-ai-dd:redact-on-export] Sensitive content detected before client export to', target);
findings.forEach(name => console.error('  -', name));
console.error('  Redact, pseudonymize, or move to internal-only folder before exporting to client.');

// Always block in dd flow regardless of profile (advisory profile = exit 1, others = exit 2)
process.exit(PROFILE === 'advisory' ? 1 : 2);
