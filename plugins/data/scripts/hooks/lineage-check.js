#!/usr/bin/env node
// omega-data — Flags missing lineage references on data-architecture deliverables.
// A lineage reference looks like "Source: <system> → <system>" or "Lineage:" followed by ≥2 systems.

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

if (isHookDisabled('lineage-check')) process.exit(0);

const input = readHookInput();
const ti = input.tool_input || {};
const content = [ti.content, ti.file_text, ti.new_string].filter(Boolean).join('\n');
if (!content) process.exit(0);

const target = ti.file_path || '<unknown>';

// Only enforce when the doc looks like a data architecture deliverable
const heading = content.split('\n').slice(0, 30).join('\n').toLowerCase();
const looksLikeArch = /(data\s+architecture|data\s+model|warehouse|lakehouse|pipeline|etl|elt|ingestion)/.test(heading);
if (!looksLikeArch) process.exit(0);

const hasLineage = /\b(lineage|source\s*[→\-]>?\s*\w+|provenance)\b/i.test(content);
if (hasLineage) process.exit(0);

console.error('[omega-data:lineage-check] Data architecture doc missing lineage references in', target);
console.error('  Add a "Lineage:" section showing data flow between source systems and sinks.');

process.exit(1);
