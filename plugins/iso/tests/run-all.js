#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { test } = require('node:test');
const assert = require('node:assert');

const PLUGIN_ROOT = path.resolve(__dirname, '..');

test('plugin manifest is omega-iso', () => {
  const m = JSON.parse(fs.readFileSync(path.join(PLUGIN_ROOT, '.claude-plugin', 'plugin.json'), 'utf8'));
  assert.strictEqual(m.name, 'omega-iso');
  assert.ok(m.version);
});

test('required commands present', () => {
  const cmds = ["gap","9001","27001","42001","14001","45001","22301","audit-prep","doc-control","internal-audit"];
  for (const c of cmds) {
    assert.ok(fs.existsSync(path.join(PLUGIN_ROOT, 'commands', c + '.md')), 'missing command: ' + c);
  }
});

test('required skills present', () => {
  const skills = ["iso","iso-certification"];
  for (const s of skills) {
    assert.ok(fs.existsSync(path.join(PLUGIN_ROOT, 'skills', s, 'SKILL.md')), 'missing skill: ' + s);
  }
});

test('required agents present', () => {
  const agents = ["iso-certification"];
  for (const a of agents) {
    assert.ok(fs.existsSync(path.join(PLUGIN_ROOT, 'agents', a + '.md')), 'missing agent: ' + a);
  }
});
