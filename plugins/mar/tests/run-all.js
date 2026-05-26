#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { test } = require('node:test');
const assert = require('node:assert');

const PLUGIN_ROOT = path.resolve(__dirname, '..');

test('plugin manifest is omega-mar', () => {
  const m = JSON.parse(fs.readFileSync(path.join(PLUGIN_ROOT, '.claude-plugin', 'plugin.json'), 'utf8'));
  assert.strictEqual(m.name, 'omega-mar');
  assert.ok(m.version);
});

test('required commands present', () => {
  const cmds = ["port-ops","env-risk","fleet","imo","marpol","solas","capacity","traffic","bot-feasibility"];
  for (const c of cmds) {
    assert.ok(fs.existsSync(path.join(PLUGIN_ROOT, 'commands', c + '.md')), 'missing command: ' + c);
  }
});

test('required skills present', () => {
  const skills = ["mar","maritime-port-operations","maritime-environmental-risk"];
  for (const s of skills) {
    assert.ok(fs.existsSync(path.join(PLUGIN_ROOT, 'skills', s, 'SKILL.md')), 'missing skill: ' + s);
  }
});

test('required agents present', () => {
  const agents = ["maritime-port-operations","maritime-environmental-risk"];
  for (const a of agents) {
    assert.ok(fs.existsSync(path.join(PLUGIN_ROOT, 'agents', a + '.md')), 'missing agent: ' + a);
  }
});
