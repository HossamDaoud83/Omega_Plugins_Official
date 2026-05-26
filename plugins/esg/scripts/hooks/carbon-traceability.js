#!/usr/bin/env node
// omega-esg — Validates that carbon claims trace back to a baseline source.
// Looks for tCO2e / Scope 1/2/3 figures and requires a citation in the same paragraph.

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

if (isHookDisabled('carbon-traceability')) process.exit(0);

const input = readHookInput();
const ti = input.tool_input || {};
const content = [ti.content, ti.file_text, ti.new_string].filter(Boolean).join('\n');
if (!content) process.exit(0);

const target = ti.file_path || '<unknown>';

// Find paragraphs with carbon claims
const paragraphs = content.split(/\n\s*\n/);
const claimPattern = /\b(\d+(?:[,.]\d+)?)\s*(t|kt|Mt)?\s*CO2(?:e|eq)?\b|\bScope\s*[123]\b/i;
const citationPattern = /\(.*?(source|report|baseline|GHG Protocol|Scope|page|p\.|\d{4}).*?\)|\[\d+\]|\[source/i;

const offenders = [];
paragraphs.forEach((p, i) => {
  if (claimPattern.test(p) && !citationPattern.test(p)) {
    offenders.push({ idx: i + 1, snippet: p.trim().slice(0, 80) + '…' });
  }
});

if (offenders.length === 0) process.exit(0);

console.error('[omega-esg:carbon-traceability] Carbon claims missing baseline citation in', target);
offenders.slice(0, 5).forEach(o => console.error(`  - paragraph ${o.idx}: ${o.snippet}`));
console.error('  Every CO2e/Scope claim must cite source (baseline year, methodology, page).');

process.exit(1);
