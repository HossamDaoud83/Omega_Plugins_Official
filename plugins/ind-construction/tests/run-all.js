#!/usr/bin/env node
// Smoke tests for omega-ind-construction — manifest integrity, command count, skill presence.

const fs = require('fs');
const path = require('path');
const { test } = require('node:test');
const assert = require('node:assert');

const PLUGIN_ROOT = path.join(__dirname, '..');

test('plugin.json is valid', () => {
  const manifest = JSON.parse(fs.readFileSync(path.join(PLUGIN_ROOT, '.claude-plugin', 'plugin.json'), 'utf8'));
  assert.strictEqual(manifest.name, 'omega-ind-construction');
  assert.ok(manifest.version, 'version present');
  assert.ok(manifest.description, 'description present');
});

test('commands directory has at least one command', () => {
  const cmdDir = path.join(PLUGIN_ROOT, 'commands');
  const files = fs.readdirSync(cmdDir).filter(f => f.endsWith('.md'));
  assert.ok(files.length >= 1, `expected at least 1 command, got ${files.length}`);
});

test('skill SKILL.md exists', () => {
  const skillFile = path.join(PLUGIN_ROOT, 'skills', 'construction', 'SKILL.md');
  assert.ok(fs.existsSync(skillFile), `missing ${skillFile}`);
});

test('quality-standards rule exists', () => {
  const rule = path.join(PLUGIN_ROOT, 'rules', 'construction-quality-standards.md');
  assert.ok(fs.existsSync(rule), `missing ${rule}`);
});
