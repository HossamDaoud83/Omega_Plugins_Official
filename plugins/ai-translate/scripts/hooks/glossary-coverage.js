#!/usr/bin/env node
// omega-ai-translate — Refuses bilingual deliverable if domain-glossary coverage < 90%.
// Glossary at <project>/.brain/glossary.json shape: { "<EN term>": "<AR term>", ... }
// Coverage = of glossary terms appearing in the EN side, what fraction also appear in AR side.

'use strict';

const fs = require('fs');
const path = require('path');

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
const COVERAGE_MIN = Number(process.env.Omega_GLOSSARY_MIN || '0.90');
if (isHookDisabled('glossary-coverage')) process.exit(0);

const ROOT = process.env.Omega_PROJECT_ROOT || process.cwd();
const glossaryPath = path.join(ROOT, '.brain', 'glossary.json');
if (!fs.existsSync(glossaryPath)) process.exit(0);

let glossary;
try { glossary = JSON.parse(fs.readFileSync(glossaryPath, 'utf8')); } catch { process.exit(0); }
const entries = Object.entries(glossary).filter(([k, v]) => k && v);
if (entries.length === 0) process.exit(0);

const input = readHookInput();
const ti = input.tool_input || {};
const content = [ti.content, ti.file_text, ti.new_string].filter(Boolean).join('\n');
if (!content) process.exit(0);

const target = ti.file_path || '';
const isAR = /_ar\.md$/i.test(target);
const isEN = /_en\.md$/i.test(target);

if (!isAR && !isEN) process.exit(0);

const present = entries.filter(([en, ar]) => {
  const term = isAR ? ar : en;
  return new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i').test(content);
});

if (present.length === 0) process.exit(0); // glossary likely not relevant to this doc

// Coverage heuristic: how many of the relevant glossary entries appear in BOTH sides.
// We can only check current side; assume sibling exists at the inverse path.
const siblingPath = isAR ? target.replace(/_ar\.md$/i, '_en.md') : target.replace(/_en\.md$/i, '_ar.md');
let siblingContent = '';
try { siblingContent = fs.readFileSync(siblingPath, 'utf8'); } catch {}

if (!siblingContent) {
  console.error(`[omega-ai-translate:glossary-coverage] Bilingual sibling not found for ${target}`);
  console.error('  Expected:', siblingPath);
  process.exit(PROFILE === 'banking' ? 2 : 1);
}

const inSibling = present.filter(([en, ar]) => {
  const term = isAR ? en : ar;
  return new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i').test(siblingContent);
});

const coverage = inSibling.length / present.length;
if (coverage >= COVERAGE_MIN) process.exit(0);

const missing = present
  .filter(([en, ar]) => !new RegExp(`\\b${(isAR ? en : ar).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i').test(siblingContent))
  .map(([en, ar]) => isAR ? `${en} (missing in EN)` : `${ar} (missing in AR)`);

console.error(`[omega-ai-translate:glossary-coverage] Coverage ${(coverage * 100).toFixed(1)}% < ${(COVERAGE_MIN * 100).toFixed(0)}% threshold`);
missing.slice(0, 10).forEach(m => console.error('  - missing:', m));

process.exit(PROFILE === 'banking' ? 2 : 1);
