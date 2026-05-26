#!/usr/bin/env node
// Aggregate test runner for @omega/finance.
// Today: smoke test that all 9 Python scripts and 7 commands and 6 skills and 3 agents exist.

const fs = require('fs');
const path = require('path');
const { test } = require('node:test');
const assert = require('node:assert');

const PLUGIN_ROOT = path.resolve(__dirname, '..');

const REQUIRED_SCRIPTS = [
  'config.py',
  'tornado_analysis.py',
  'montecarlo_simulation.py',
  'spider_chart.py',
  'scenario_analysis.py',
  'breakeven_analysis.py',
  'run_all_analysis.py',
  // v4.1 analyst foundation
  'ratio_analysis.py',
  'amortization_schedule.py',
];

const REQUIRED_SKILLS = [
  'project-finance',
  'sensitivity-analysis',
  'financial-modeling',
  // v4.1 analyst foundation
  'accounting-fundamentals',
  'financial-statement-analysis',
  'analyst-toolkit',
];

const REQUIRED_COMMANDS = [
  'sensitivity.md',
  'montecarlo.md',
  'scenarios.md',
  'breakeven.md',
  // v4.1 analyst foundation
  'ratios.md',
  'amortization.md',
  'statements.md',
];

const REQUIRED_AGENTS = ['financial-analyst.md', 'deal-financing-advisor.md', 'associate-analyst.md'];

test('plugin manifest exists and names omega-finance', () => {
  const manifest = JSON.parse(
    fs.readFileSync(path.join(PLUGIN_ROOT, '.claude-plugin', 'plugin.json'), 'utf8')
  );
  assert.strictEqual(manifest.name, 'omega-finance');
  assert.ok(manifest.version);
  assert.ok(manifest.components.commands);
  assert.ok(manifest.components.skills);
  assert.ok(manifest.components.agents);
});

test('all required Python scripts present', () => {
  for (const script of REQUIRED_SCRIPTS) {
    const p = path.join(PLUGIN_ROOT, 'scripts', script);
    assert.ok(fs.existsSync(p), `missing: ${script}`);
  }
});

test('all required skills present with SKILL.md', () => {
  for (const skill of REQUIRED_SKILLS) {
    const p = path.join(PLUGIN_ROOT, 'skills', skill, 'SKILL.md');
    assert.ok(fs.existsSync(p), `missing: skills/${skill}/SKILL.md`);
  }
});

test('all required commands present', () => {
  for (const cmd of REQUIRED_COMMANDS) {
    const p = path.join(PLUGIN_ROOT, 'commands', cmd);
    assert.ok(fs.existsSync(p), `missing: commands/${cmd}`);
  }
});

test('all required agents present', () => {
  for (const agent of REQUIRED_AGENTS) {
    const p = path.join(PLUGIN_ROOT, 'agents', agent);
    assert.ok(fs.existsSync(p), `missing: agents/${agent}`);
  }
});
