#!/usr/bin/env node
// omega-cloud — Refuses unbounded scaling proposals without an explicit cost cap.
// Looks for "auto-scale", "elastic", "scale-out" without a paired "budget", "cost cap", "max", or "$/month".

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
if (isHookDisabled('cost-guard')) process.exit(0);

const input = readHookInput();
const ti = input.tool_input || {};
const content = [ti.content, ti.file_text, ti.new_string].filter(Boolean).join('\n');
if (!content) process.exit(0);

const target = ti.file_path || '<unknown>';

const scalingMentions = /\b(auto[- ]?scal\w+|elastic|scale[- ]?out|unlimited|burst)\b/gi;
const costCapMentions = /\b(budget|cost\s*cap|max\s*(cost|spend|nodes|instances)|spend\s*limit|\$\s*\d+\s*\/\s*(mo|month|year)|monthly\s*budget)\b/i;

const matches = content.match(scalingMentions);
if (!matches || matches.length === 0) process.exit(0);

if (costCapMentions.test(content)) process.exit(0);

console.error('[omega-cloud:cost-guard] Unbounded scaling proposed without a cost cap in', target);
console.error('  Mentioned scaling concepts:', [...new Set(matches.map(m => m.toLowerCase()))].join(', '));
console.error('  Add an explicit cost ceiling (monthly budget, max instances, spend alarm).');

process.exit(PROFILE === 'banking' ? 2 : 1);
