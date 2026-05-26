#!/usr/bin/env node
// omega-risk — Pre Edit on deliverables_tracker.json (banking profile only).
// Refuses to advance the tracker if BCP/DR coverage isn't represented.

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
if (isHookDisabled('bcm-coverage')) process.exit(0);
if (PROFILE !== 'banking') process.exit(0); // banking profile only

const input = readHookInput();
const ti = input.tool_input || {};
const content = [ti.content, ti.file_text, ti.new_string].filter(Boolean).join('\n');
if (!content) process.exit(0);

let tracker;
try { tracker = JSON.parse(content); } catch { process.exit(0); }
const arr = Array.isArray(tracker) ? tracker : (tracker.deliverables || []);
if (!Array.isArray(arr) || arr.length === 0) process.exit(0);

const blob = JSON.stringify(arr).toLowerCase();
const hasBCP = /\b(bcp|business continuity|continuity plan)\b/.test(blob);
const hasDR  = /\b(dr|disaster recovery|rto|rpo)\b/.test(blob);

if (hasBCP && hasDR) process.exit(0);

const missing = [];
if (!hasBCP) missing.push('BCP / business-continuity workstream');
if (!hasDR)  missing.push('DR / disaster-recovery workstream (RTO/RPO)');

console.error('[omega-risk:bcm-coverage] Banking profile requires BCM coverage in tracker:');
missing.forEach(m => console.error('  - missing:', m));
console.error('  Add the workstream(s) before advancing the tracker.');

process.exit(2);
