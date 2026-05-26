#!/usr/bin/env node
// omega-ai-contracts — Flags extracted clauses with confidence < 0.85 for human review.
// Reads JSON of shape: [{ clause_id, type, text, confidence, ... }] or { clauses: [...] }.

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

const THRESHOLD = Number(process.env.Omega_CLAUSE_CONFIDENCE_MIN || '0.85');
if (isHookDisabled('clause-confidence')) process.exit(0);

const input = readHookInput();
const ti = input.tool_input || {};
const content = [ti.content, ti.file_text, ti.new_string].filter(Boolean).join('\n');
if (!content) process.exit(0);

let parsed;
try { parsed = JSON.parse(content); } catch { process.exit(0); }
const clauses = Array.isArray(parsed) ? parsed : (parsed.clauses || []);
if (!Array.isArray(clauses) || clauses.length === 0) process.exit(0);

const lowConf = clauses
  .filter(c => c && typeof c.confidence === 'number' && c.confidence < THRESHOLD)
  .map(c => ({
    id: c.clause_id || c.id || '(no-id)',
    type: c.type || c.category || '?',
    confidence: c.confidence,
  }));

if (lowConf.length === 0) process.exit(0);

console.error(`[omega-ai-contracts:clause-confidence] ${lowConf.length} clause(s) below threshold ${THRESHOLD}:`);
lowConf.slice(0, 10).forEach(c => console.error(`  - ${c.id} (${c.type}): confidence ${c.confidence.toFixed(2)}`));
console.error('  Mark each as human-reviewed or re-extract before signing off.');

process.exit(1);
