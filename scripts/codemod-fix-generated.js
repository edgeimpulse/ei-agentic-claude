#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const genDir = path.resolve(process.cwd(), 'src/postman/edge-impulse/generated');

function fixFile(filePath) {
  let src = fs.readFileSync(filePath, 'utf8');

  // Skip cli-commands wrapper files
  if (filePath.includes('cli-commands')) return false;

  // Only operate on files that contain the TODO marker or raw fetch to studio.edgeimpulse.com/api
  if (!/TODO: Implement parameter mapping/.test(src) && !/studio.edgeimpulse\.com\/.+api/.test(src)) return false;

  // Ensure import of helper exists (use .js extension for runtime)
  if (!/from "\.\/\_request\.js"/.test(src)) {
    src = src.replace(/(export async function [\s\S]+?\{\n)/, match => {
      return 'import { buildEiUrl, eiFetchJson } from "./_request.js";\n\n' + match;
    });
  }

  // Replace the common pattern: TODO marker, fetch(`URL`, { method: 'X', headers: { ... }, ... }); return res.json();
  src = src.replace(/\/\/ TODO: Implement parameter mapping[\s\S]*?const res = await fetch\(`([^`]*)`, \{([\s\S]*?)\}\);[\s\r\n]*return res\.json\(\);/gm,
    (m, urlTemplate, opts) => {
      // Determine method, default GET
      const methodMatch = /method:\s*'([A-Z]+)'/i.exec(opts);
      const method = methodMatch ? methodMatch[1].toUpperCase() : 'GET';

      // Decide if body should be included
      const includeBody = method !== 'GET' && method !== 'DELETE';

      const bodySnippet = includeBody ? ', body: JSON.stringify(params ?? {})' : '';

      const replacement = `const url = buildEiUrl("${urlTemplate}", params ?? {});\n  return eiFetchJson(url, apiKey, { method: "${method}"${bodySnippet} });`;
      return replacement;
    }
  );

  // Also replace simpler patterns where TODO exists but fetch uses shorter options
  src = src.replace(/\/\/ TODO: Implement parameter mapping[\s\S]*?const res = await fetch\("([^"]*)", \{([\s\S]*?)\}\);[\s\r\n]*return res\.json\(\);/gm,
    (m, urlTemplate, opts) => {
      const methodMatch = /method:\s*'([A-Z]+)'/i.exec(opts);
      const method = methodMatch ? methodMatch[1].toUpperCase() : 'GET';
      const includeBody = method !== 'GET' && method !== 'DELETE';
      const bodySnippet = includeBody ? ', body: JSON.stringify(params ?? {})' : '';
      return `const url = buildEiUrl("${urlTemplate}", params ?? {});\n  return eiFetchJson(url, apiKey, { method: "${method}"${bodySnippet} });`;
    }
  );

  // Replace remaining direct fetch usages with simple conversion if they contain :param tokens
  src = src.replace(/const res = await fetch\(`([^`]*)`, \{([\s\S]*?)\}\);\n\s*return res\.json\(\);/gm,
    (m, urlTemplate, opts) => {
      if (!/:([A-Za-z0-9_]+)/.test(urlTemplate)) return m; // skip if no path params
      const methodMatch = /method:\s*'([A-Z]+)'/i.exec(opts);
      const method = methodMatch ? methodMatch[1].toUpperCase() : 'GET';
      const includeBody = method !== 'GET' && method !== 'DELETE';
      const bodySnippet = includeBody ? ', body: JSON.stringify(params ?? {})' : '';
      // ensure helper import
      if (!/from "\.\/\_request\.js"/.test(src)) {
        src = 'import { buildEiUrl, eiFetchJson } from "./_request.js";\n\n' + src;
      }
      return `const url = buildEiUrl("${urlTemplate}", params ?? {});\n  return eiFetchJson(url, apiKey, { method: "${method}"${bodySnippet} });`;
    }
  );

  fs.writeFileSync(filePath, src, 'utf8');
  return true;
}

let patched = 0;
const files = fs.readdirSync(genDir).filter(f => f.endsWith('.ts'));
for (const f of files) {
  const fp = path.join(genDir, f);
  try {
    if (fixFile(fp)) {
      console.log('Patched', f);
      patched++;
    }
  } catch (e) {
    console.error('Error patching', f, e.message);
  }
}

console.log(`Patched ${patched} files in ${genDir}`);
