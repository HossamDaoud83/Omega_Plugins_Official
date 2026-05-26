#!/usr/bin/env node
// Omega @omega/core — Test runner
// Aggregates per-suite test runs using Node's built-in node:test.
// Captures child output so the parent can report combined "info pass N / info fail N".

const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const ROOT = path.resolve(__dirname);
const SUITES = ['hooks', 'scripts', 'schemas'];

let totalPass = 0, totalFail = 0;

for (const suite of SUITES) {
  const dir = path.join(ROOT, suite);
  if (!fs.existsSync(dir)) continue;
  const tests = fs.readdirSync(dir).filter(f => f.endsWith('.test.js'));
  if (tests.length === 0) continue;

  console.log(`\n=== ${suite} (${tests.length} files) ===`);
  for (const t of tests) {
    const result = spawnSync('node', ['--test', path.join(dir, t)], { encoding: 'utf8' });
    process.stdout.write(result.stdout || '');
    if (result.stderr) process.stderr.write(result.stderr);

    const passMatch = (result.stdout || '').match(/(?:[#ℹ]|\binfo)\s+pass\s+(\d+)/);
    const failMatch = (result.stdout || '').match(/(?:[#ℹ]|\binfo)\s+fail\s+(\d+)/);
    totalPass += passMatch ? parseInt(passMatch[1], 10) : 0;
    totalFail += failMatch ? parseInt(failMatch[1], 10) : 0;
  }
}

console.log(`\n=== SUMMARY ===`);
console.log(`info pass ${totalPass}`);
console.log(`info fail ${totalFail}`);
process.exit(totalFail > 0 ? 1 : 0);
