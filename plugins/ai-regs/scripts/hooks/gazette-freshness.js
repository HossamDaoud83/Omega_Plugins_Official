#!/usr/bin/env node
// omega-ai-regs — SessionStart hook. Reports if regulatory cache is > 7 days old.
// Cache lives at <project>/.brain/regulatory_cache/<jurisdiction>.json with last_updated field.

'use strict';

const fs = require('fs');
const path = require('path');

function isHookDisabled(name) {
  const d = (process.env.OMEGA_DISABLED_HOOKS || '').split(',').map(s => s.trim());
  return d.includes('all') || d.includes(name);
}

const STALE_DAYS = Number(process.env.Omega_REG_CACHE_STALE_DAYS || '7');
if (isHookDisabled('gazette-freshness')) process.exit(0);

const ROOT = process.env.Omega_PROJECT_ROOT || process.cwd();
const cacheDir = path.join(ROOT, '.brain', 'regulatory_cache');

if (!fs.existsSync(cacheDir)) process.exit(0);

const now = Date.now();
const stale = [];
let checked = 0;

for (const file of fs.readdirSync(cacheDir)) {
  if (!file.endsWith('.json')) continue;
  const fullPath = path.join(cacheDir, file);
  let entry;
  try { entry = JSON.parse(fs.readFileSync(fullPath, 'utf8')); } catch { continue; }
  checked++;
  const updated = entry.last_updated || entry.updated_at;
  if (!updated) {
    stale.push({ jurisdiction: file.replace(/\.json$/, ''), age: 'unknown' });
    continue;
  }
  const age = Math.floor((now - Date.parse(updated)) / (24 * 60 * 60 * 1000));
  if (age > STALE_DAYS) stale.push({ jurisdiction: file.replace(/\.json$/, ''), age: `${age}d` });
}

if (checked === 0 || stale.length === 0) process.exit(0);

console.error(`[omega-ai-regs:gazette-freshness] ${stale.length} of ${checked} regulatory cache file(s) > ${STALE_DAYS} days old:`);
stale.slice(0, 10).forEach(s => console.error(`  - ${s.jurisdiction}: ${s.age}`));
console.error('  Run /omega-airegs:refresh to pull the latest gazette/circular updates.');

process.exit(1);
