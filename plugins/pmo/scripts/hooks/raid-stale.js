#!/usr/bin/env node
// omega-pmo — SessionStart hook. Flags RAID items untouched > 14 days.
// Reads 00_Engagement_Management/risk_register.md (front-matter table or JSON sidecar).

'use strict';

const fs = require('fs');
const path = require('path');

function isHookDisabled(name) {
  const disabled = (process.env.OMEGA_DISABLED_HOOKS || '').split(',').map(s => s.trim());
  return disabled.includes('all') || disabled.includes(name);
}

if (isHookDisabled('raid-stale')) process.exit(0);

const ROOT = process.env.Omega_PROJECT_ROOT || process.cwd();
const STALE_DAYS = 14;
const now = Date.now();

function daysSince(iso) {
  if (!iso) return null;
  const t = Date.parse(iso);
  if (Number.isNaN(t)) return null;
  return Math.floor((now - t) / (24 * 60 * 60 * 1000));
}

const sidecar = path.join(ROOT, '00_Engagement_Management', 'raid.json');
let raid = [];
if (fs.existsSync(sidecar)) {
  try { raid = JSON.parse(fs.readFileSync(sidecar, 'utf8')); } catch {}
}

if (!Array.isArray(raid) || raid.length === 0) process.exit(0);

const stale = raid.filter(item => {
  if (!item || ['closed', 'cancelled', 'done'].includes(String(item.status || '').toLowerCase())) return false;
  const updated = item.updated_at || item.last_review || item.created_at;
  const days = daysSince(updated);
  return days !== null && days > STALE_DAYS;
});

if (stale.length === 0) process.exit(0);

console.error(`[omega-pmo:raid-stale] ${stale.length} RAID item(s) untouched > ${STALE_DAYS} days:`);
for (const item of stale.slice(0, 10)) {
  const days = daysSince(item.updated_at || item.last_review || item.created_at);
  console.error(`  - [${item.type || '?'}] ${item.id || '(no-id)'}: ${item.title || '(no title)'} (${days}d)`);
}
console.error('  Update or close in 00_Engagement_Management/raid.json before SteerCo.');

process.exit(1);
