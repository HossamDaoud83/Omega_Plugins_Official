#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { test } = require('node:test');
const assert = require('node:assert');

const PLUGIN_ROOT = path.resolve(__dirname, '..');

test('plugin manifest is omega-ind-government', () => {
  const m = JSON.parse(fs.readFileSync(path.join(PLUGIN_ROOT, '.claude-plugin', 'plugin.json'), 'utf8'));
  assert.strictEqual(m.name, 'omega-ind-government');
});

test('agent present', () => {
  assert.ok(fs.existsSync(path.join(PLUGIN_ROOT, 'agents', 'government.md')));
});

test('industry skill present', () => {
  assert.ok(fs.existsSync(path.join(PLUGIN_ROOT, 'skills', 'government', 'SKILL.md')));
});
