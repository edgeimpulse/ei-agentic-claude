#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

function loadJson(p) {
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch (e) {
    console.error('Failed to load JSON', p, e.message);
    process.exit(2);
  }
}

function collectMetrics(obj, prefix = '') {
  const metrics = {};
  if (obj && typeof obj === 'object') {
    for (const k of Object.keys(obj)) {
      const v = obj[k];
      const key = prefix ? `${prefix}.${k}` : k;
      if (typeof v === 'number') {
        if (/acc|accuracy|f1|precision|recall|auc|score|loss/i.test(k)) {
          metrics[key] = v;
        }
      } else if (typeof v === 'object') {
        Object.assign(metrics, collectMetrics(v, key));
      }
    }
  }
  return metrics;
}

function diffMetrics(before, after) {
  const keys = new Set([...Object.keys(before), ...Object.keys(after)]);
  const diffs = [];
  for (const k of keys) {
    const bv = before[k];
    const av = after[k];
    if (bv === undefined && av !== undefined) diffs.push({ key: k, before: null, after: av });
    else if (av === undefined && bv !== undefined) diffs.push({ key: k, before: bv, after: null });
    else if (typeof bv === 'number' && typeof av === 'number' && bv !== av) diffs.push({ key: k, before: bv, after: av, delta: av - bv });
  }
  return diffs;
}

function collectBlocks(project) {
  // try common locations
  const blocks = project?.impulse?.blocks || project?.impulse?.configuration?.blocks || null;
  return blocks || null;
}

function diffBlocks(beforeBlocks, afterBlocks) {
  if (!beforeBlocks && !afterBlocks) return { changed: false, details: [] };
  const details = [];
  const byName = (arr) => (arr || []).reduce((m, b) => { m[b.name || b.id || JSON.stringify(b)] = b; return m; }, {});
  const bBefore = byName(beforeBlocks || []);
  const bAfter = byName(afterBlocks || []);
  const keys = new Set([...Object.keys(bBefore), ...Object.keys(bAfter)]);
  for (const k of keys) {
    const bb = bBefore[k];
    const ba = bAfter[k];
    if (!bb) details.push({ name: k, type: 'added', after: ba });
    else if (!ba) details.push({ name: k, type: 'removed', before: bb });
    else if (JSON.stringify(bb) !== JSON.stringify(ba)) details.push({ name: k, type: 'modified', before: bb, after: ba });
  }
  return { changed: details.length > 0, details };
}

function main() {
  const [,, beforePath, afterPath, outPath] = process.argv;
  if (!beforePath || !afterPath || !outPath) {
    console.error('Usage: assess.js <before.json> <after.json> <out.json>');
    process.exit(2);
  }

  const before = loadJson(beforePath);
  const after = loadJson(afterPath);

  const beforeMetrics = collectMetrics(before);
  const afterMetrics = collectMetrics(after);
  const metricDiffs = diffMetrics(beforeMetrics, afterMetrics);

  const beforeBlocks = collectBlocks(before);
  const afterBlocks = collectBlocks(after);
  const blocksDiff = diffBlocks(beforeBlocks, afterBlocks);

  const report = {
    beforePath, afterPath,
    collectedAt: new Date().toISOString(),
    metricDiffs,
    blocksDiff
  };

  fs.writeFileSync(outPath, JSON.stringify(report, null, 2), 'utf8');
  console.log('Assessment written to', outPath);
  // Also print concise human report
  console.log('\nMetric changes:');
  if (metricDiffs.length === 0) console.log('  No numeric metric changes found');
  else metricDiffs.forEach(d => console.log(`  ${d.key}: ${d.before} -> ${d.after} (Δ ${d.delta ?? 'n/a'})`));

  console.log('\nBlock changes:');
  if (!blocksDiff.changed) console.log('  No block-level changes detected');
  else blocksDiff.details.forEach(d => console.log(`  [${d.type}] ${d.name}`));
}

main();
