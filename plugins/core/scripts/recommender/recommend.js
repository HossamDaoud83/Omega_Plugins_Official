#!/usr/bin/env node
// Plugin recommender engine. Reads project signals (industry, service-line,
// scope keywords, regulatory frameworks, language) and returns a ranked
// recommendation: best-fit bundle plus add-on individual plugins.
//
// Hybrid design:
//   1. Deterministic rules in rules.json handle the 80% case
//   2. Anything not matched is left for the plugin-recommender SKILL.md to
//      reason about during a live /omega:recommend-plugins session
//
// Programmatic API:
//   const { recommend } = require('./recommend');
//   recommend({ industry: 'healthcare', serviceLine: 'aig', scope: ['cyber'], regulatory: ['hipaa','iso42001'] });
//   → { bundle: 'omega-bundle-healthcare', plugins: [...], rationale: [...] }

'use strict';

const fs = require('fs');
const path = require('path');

const RULES_PATH = path.join(__dirname, 'rules.json');

function loadRules() {
  return JSON.parse(fs.readFileSync(RULES_PATH, 'utf8'));
}

function normalize(s) {
  return String(s || '').toLowerCase().trim().replace(/[\s_]+/g, '-');
}

function recommend(input) {
  const rules = loadRules();
  const rationale = [];
  const plugins = new Set(rules.always_recommend);
  for (const p of rules.always_recommend) {
    rationale.push(`always: ${p}`);
  }

  let bundle = null;

  // 1. Industry → bundle (preferred) or single plugin
  if (input.industry) {
    const ind = normalize(input.industry);
    if (rules.industry_to_bundle[ind]) {
      bundle = rules.industry_to_bundle[ind];
      rationale.push(`industry "${ind}" → ${bundle}`);
    } else if (rules.industry_to_plugin[ind]) {
      plugins.add(rules.industry_to_plugin[ind]);
      rationale.push(`industry "${ind}" → ${rules.industry_to_plugin[ind]}`);
    } else {
      rationale.push(`industry "${ind}" — no rule, leave to LLM judgment`);
    }
  }

  // 2. Service-line → plugin
  const serviceLines = [].concat(input.serviceLine || [], input.serviceLines || [])
    .map(normalize).filter(Boolean);
  for (const sl of serviceLines) {
    if (rules.service_line_to_plugin[sl]) {
      plugins.add(rules.service_line_to_plugin[sl]);
      rationale.push(`service-line "${sl}" → ${rules.service_line_to_plugin[sl]}`);
    }
  }

  // 3. Scope keywords → plugin
  const scope = (input.scope || []).map(normalize).filter(Boolean);
  for (const s of scope) {
    if (rules.scope_keyword_to_plugin[s]) {
      plugins.add(rules.scope_keyword_to_plugin[s]);
      rationale.push(`scope "${s}" → ${rules.scope_keyword_to_plugin[s]}`);
    }
  }

  // 4. Regulatory frameworks → plugin
  const regulatory = (input.regulatory || []).map(normalize).filter(Boolean);
  for (const r of regulatory) {
    if (rules.regulatory_to_plugin[r]) {
      plugins.add(rules.regulatory_to_plugin[r]);
      rationale.push(`regulatory "${r}" → ${rules.regulatory_to_plugin[r]}`);
    }
  }

  // 5. Languages → plugin
  const languages = (input.languages || []).map(normalize).filter(Boolean);
  for (const lang of languages) {
    if (rules.language_to_plugin[lang]) {
      plugins.add(rules.language_to_plugin[lang]);
      rationale.push(`language "${lang}" → ${rules.language_to_plugin[lang]}`);
    }
  }

  return {
    bundle,
    plugins: [...plugins].sort(),
    rationale,
  };
}

function formatHuman(result) {
  const lines = [];
  lines.push('═══════════════════════════════════════════════════════════════');
  lines.push('Omega plugin recommendation');
  lines.push('═══════════════════════════════════════════════════════════════');
  lines.push('');
  if (result.bundle) {
    lines.push(`Recommended bundle: ${result.bundle}`);
    lines.push('');
    lines.push(`Install with:`);
    lines.push(`  /plugin install ${result.bundle}@omega-plugins`);
    lines.push('');
  } else {
    lines.push('No matching bundle — install plugins individually:');
    lines.push('');
  }
  if (result.plugins.length) {
    lines.push('Add-on plugins:');
    for (const p of result.plugins) {
      lines.push(`  /plugin install ${p}@omega-plugins`);
    }
    lines.push('');
  }
  if (result.rationale.length) {
    lines.push('Rationale:');
    for (const r of result.rationale) {
      lines.push(`  - ${r}`);
    }
  }
  return lines.join('\n');
}

function parseArgs(argv) {
  const out = { scope: [], regulatory: [], languages: [], serviceLines: [] };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    const n = argv[i + 1];
    switch (a) {
      case '--industry':       out.industry = n; i++; break;
      case '--service-line':   out.serviceLines.push(...n.split(',')); i++; break;
      case '--scope':          out.scope.push(...n.split(',')); i++; break;
      case '--regulatory':     out.regulatory.push(...n.split(',')); i++; break;
      case '--languages':      out.languages.push(...n.split(',')); i++; break;
      case '--json':           out.json = true; break;
      case '--help': case '-h':
        console.log('Usage: recommend.js --industry <name> [--service-line a,b] [--scope a,b] [--regulatory a,b] [--languages ar,en] [--json]');
        process.exit(0);
        break;
    }
  }
  return out;
}

if (require.main === module) {
  const args = parseArgs(process.argv);
  const result = recommend(args);
  if (args.json) {
    console.log(JSON.stringify(result, null, 2));
  } else {
    console.log(formatHuman(result));
  }
}

module.exports = { recommend, formatHuman, loadRules };
