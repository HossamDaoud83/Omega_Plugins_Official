#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { test } = require('node:test');
const assert = require('node:assert');

const PLUGIN_ROOT = path.resolve(__dirname, '..');

test('plugin manifest is omega-coe', () => {
  const m = JSON.parse(fs.readFileSync(path.join(PLUGIN_ROOT, '.claude-plugin', 'plugin.json'), 'utf8'));
  assert.strictEqual(m.name, 'omega-coe');
  assert.ok(m.version);
});

test('required commands present', () => {
  const cmds = ["kpi","dashboard","data-arch","model","data-quality","analytics-maturity","data-gov","metrics"];
  for (const c of cmds) {
    assert.ok(fs.existsSync(path.join(PLUGIN_ROOT, 'commands', c + '.md')), 'missing command: ' + c);
  }
});

test('required skills present', () => {
  const skills = ["coe","competency-center"];
  for (const s of skills) {
    assert.ok(fs.existsSync(path.join(PLUGIN_ROOT, 'skills', s, 'SKILL.md')), 'missing skill: ' + s);
  }
});

test('required agents present', () => {
  const agents = ["competency-center"];
  for (const a of agents) {
    assert.ok(fs.existsSync(path.join(PLUGIN_ROOT, 'agents', a + '.md')), 'missing agent: ' + a);
  }
});
