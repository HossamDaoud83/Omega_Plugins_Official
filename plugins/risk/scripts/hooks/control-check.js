#!/usr/bin/env node
// omega-risk — Pre Edit/Write on risk_register.json. Validates that every
// risk has at least one mapped control. Refuses save in banking profile.

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
if (isHookDisabled('control-check')) process.exit(0);

const input = readHookInput();
const ti = input.tool_input || {};
const content = [ti.content, ti.file_text, ti.new_string].filter(Boolean).join('\n');
if (!content) process.exit(0);

let risks;
try { risks = JSON.parse(content); } catch { process.exit(0); }
const arr = Array.isArray(risks) ? risks : (risks.risks || []);
if (!Array.isArray(arr) || arr.length === 0) process.exit(0);

const uncovered = arr.filter(r => {
  const ctrls = r.controls || r.mitigations || [];
  return !Array.isArray(ctrls) || ctrls.length === 0;
}).map(r => r.id || r.title || '(unnamed)');

if (uncovered.length === 0) process.exit(0);

console.error(`[omega-risk:control-check] ${uncovered.length} risk(s) without a mapped control:`);
uncovered.slice(0, 10).forEach(name => console.error('  -', name));
console.error('  Add at least one control before saving (banking profile blocks).');

process.exit(PROFILE === 'banking' ? 2 : 1);
