#!/usr/bin/env node
// omega-cx — Validates that direct VoC quotes carry attribution.
// A quote is a fenced block (> "...") or italic block-quote with ≥40 chars.
// Attribution = (— Persona, Date) or "Source: <persona>" within the same paragraph.

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

if (isHookDisabled('voc-quote-attribution')) process.exit(0);

const input = readHookInput();
const ti = input.tool_input || {};
const content = [ti.content, ti.file_text, ti.new_string].filter(Boolean).join('\n');
if (!content) process.exit(0);

const target = ti.file_path || '<unknown>';

const blockQuoteRe = /^>\s+(?:"|"|'|')?[^\n]{40,}/gm;
const attributionRe = /[—–-]\s*[A-Z][a-z]+(\s+[A-Z][a-z]+)?\s*,\s*(persona|interview|focus group|\d{4})|\bSource\s*:\s*\w+/i;

const lines = content.split('\n');
const orphans = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (blockQuoteRe.test('\n' + line + '\n')) {
    blockQuoteRe.lastIndex = 0;
    // Look at the quote line + the next 3 lines for attribution
    const window = lines.slice(i, Math.min(i + 4, lines.length)).join('\n');
    if (!attributionRe.test(window)) {
      orphans.push({ ln: i + 1, text: line.trim().slice(0, 80) + (line.length > 80 ? '…' : '') });
    }
  }
}

if (orphans.length === 0) process.exit(0);

console.error(`[omega-cx:voc-quote-attribution] ${orphans.length} VoC quote(s) missing attribution in`, target);
orphans.slice(0, 5).forEach(q => console.error(`  - line ${q.ln}: ${q.text}`));
console.error('  Add attribution: "— Persona name, interview/focus group, YYYY-MM" or "Source: <persona>".');

process.exit(1);
