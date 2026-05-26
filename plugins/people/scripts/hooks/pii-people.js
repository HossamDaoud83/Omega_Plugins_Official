#!/usr/bin/env node
// omega-people — Stricter PII scan for HR data.
// Adds salary, employee-ID, and performance-rating patterns on top of base PII.

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
if (isHookDisabled('pii-people')) process.exit(0);

const PATTERNS = [
  { name: 'Email address',          regex: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/ },
  { name: 'Salary in USD/EUR/GBP',  regex: /\b(USD?|EUR|GBP)\s*\$?\s*\d{2,3}[,.]?\d{3}\b/i },
  { name: 'Salary in SAR/AED/EGP',  regex: /\b(SAR|AED|EGP)\s*\d{2,3}[,.]?\d{3}\b/i },
  { name: 'Employee ID',            regex: /\bEMP[-_]?\d{4,8}\b/i },
  { name: 'Performance rating',     regex: /\b(performance|rating|ranking)\s*[:=]\s*[1-5](\.\d)?\b/i },
  { name: 'Saudi national ID',      regex: /\b[12]\d{9}\b/ },
];

const input = readHookInput();
const ti = input.tool_input || {};
const content = [ti.content, ti.file_text, ti.new_string].filter(Boolean).join('\n');
if (!content) process.exit(0);

const target = ti.file_path || '<unknown>';
const findings = PATTERNS.filter(p => p.regex.test(content)).map(p => p.name);
if (findings.length === 0) process.exit(0);

console.error('[omega-people:pii-people] HR-grade PII detected in', target);
findings.forEach(name => console.error('  -', name));
console.error('  HR data must be aggregated, role-only, or pseudonymized in deliverables.');

// People data is sensitive — block harder than the general PII scan
process.exit(PROFILE === 'banking' ? 2 : (PROFILE === 'standard' ? 1 : 1));
