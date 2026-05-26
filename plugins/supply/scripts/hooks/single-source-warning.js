#!/usr/bin/env node
// omega-supply — Warns when a single supplier provides >80% of a critical component.
// Reads supplier-map JSON of shape: [{ component, supplier, share, critical }] or similar.

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

if (isHookDisabled('single-source-warning')) process.exit(0);

const input = readHookInput();
const ti = input.tool_input || {};
const content = [ti.content, ti.file_text, ti.new_string].filter(Boolean).join('\n');
if (!content) process.exit(0);

let map;
try { map = JSON.parse(content); } catch { process.exit(0); }
const arr = Array.isArray(map) ? map : (map.suppliers || map.components || []);
if (!Array.isArray(arr) || arr.length === 0) process.exit(0);

const THRESHOLD = 0.80;

// Aggregate by component
const byComponent = {};
for (const row of arr) {
  if (!row || !row.component) continue;
  const isCritical = !!(row.critical || row.is_critical || /critical/i.test(row.classification || ''));
  if (!isCritical) continue;
  const share = Number(row.share || row.percent || row.percentage || 0);
  if (!share) continue;
  const normalized = share > 1 ? share / 100 : share;
  if (!byComponent[row.component] || byComponent[row.component].share < normalized) {
    byComponent[row.component] = { supplier: row.supplier, share: normalized };
  }
}

const violators = Object.entries(byComponent).filter(([, info]) => info.share >= THRESHOLD);
if (violators.length === 0) process.exit(0);

console.error('[omega-supply:single-source-warning] Critical components with single-supplier concentration > 80%:');
violators.slice(0, 10).forEach(([comp, info]) => {
  console.error(`  - ${comp}: ${info.supplier} at ${(info.share * 100).toFixed(1)}%`);
});
console.error('  Consider diversification or risk-acceptance documentation.');

process.exit(1);
