#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { parse } from 'yaml';

const specPath = path.resolve('src/openapi/openapi.yml');
const clientsDir = path.resolve('src/postman/edge-impulse/generated');

function toSnakeCase(name) {
  return name
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    .replace(/[^a-zA-Z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .replace(/_+/g, '_')
    .toLowerCase();
}

function canonicalizePath(p) {
  return p.replace(/\{([^}]+)\}/g, ':$1');
}

function shortHash(input) {
  return crypto.createHash('sha1').update(input).digest('hex').slice(0, 8);
}

<<<<<<< HEAD
function resolveParam(spec, param) {
  if (!param || typeof param !== 'object') return param;
  if (param.$ref && typeof param.$ref === 'string') {
    const match = param.$ref.match(/^#\/components\/parameters\/(.+)$/);
    if (match && spec?.components?.parameters) {
      return spec.components.parameters[match[1]] || param;
    }
  }
  return param;
}

function unique(items) {
  return Array.from(new Set(items.filter(Boolean)));
}

=======
>>>>>>> origin/main
function extractClientOps() {
  const ops = new Map();
  const files = fs.readdirSync(clientsDir).filter((f) => f.endsWith('.ts'));
  for (const file of files) {
    const filePath = path.join(clientsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const methodMatch = content.match(/Method:\s*([A-Z]+)/);
    const urlMatch = content.match(/URL:\s*(\S+)/);
    if (!methodMatch || !urlMatch) continue;
    const method = methodMatch[1].toUpperCase();
    const url = urlMatch[1];
    let pathname = '';
    try {
      pathname = new URL(url).pathname;
    } catch {
      continue;
    }
    if (pathname.startsWith('/v1')) pathname = pathname.slice(3) || '/';
    const canonicalPath = pathname.replace(/:([^/]+)/g, ':$1');
    ops.set(`${method} ${canonicalPath}`, { method, canonicalPath, file });
  }
  return ops;
}

<<<<<<< HEAD
function renderClient({ method, canonicalPath, pathParams, queryParams, baseUrl, exportName }) {
  const fullPath = baseUrl.replace(/\/$/, '') + canonicalPath;
  return `/**
 * Method: ${method}
 * URL: ${fullPath}
 */
export async function ${exportName}(params: any, apiKey: string) {
=======
function generateClientFile({ method, canonicalPath, operationId, pathParams, queryParams, baseUrl }) {
  const fileBase = operationId
    ? toSnakeCase(operationId)
    : toSnakeCase(`${method}_${canonicalPath.replace(/[/:]+/g, '_')}`);
  const fileName = `${fileBase}.ts`;
  const fullPath = baseUrl.replace(/\/$/, '') + canonicalPath;

  const contents = `/**
 * Method: ${method}
 * URL: ${fullPath}
 */
export async function ${fileBase}(params: any, apiKey: string) {
>>>>>>> origin/main
  const pathParams: string[] = ${JSON.stringify(pathParams)};
  const queryParams: string[] = ${JSON.stringify(queryParams)};

  let url = \`${fullPath}\`;
  for (const key of pathParams) {
    const value = params?.[key];
    if (value === undefined || value === null) {
      throw new Error(\`Missing required path param: \${key}\`);
    }
    url = url.replace(\`:\${key}\`, encodeURIComponent(String(value)));
  }

  const urlObj = new URL(url);
  for (const key of queryParams) {
    const value = params?.[key];
    if (value !== undefined && value !== null) {
      urlObj.searchParams.set(key, String(value));
    }
  }

  const bodyParams: Record<string, unknown> = { ...(params || {}) };
  for (const key of pathParams) delete bodyParams[key];
  for (const key of queryParams) delete bodyParams[key];

  const hasBody = !['GET', 'HEAD'].includes('${method}') && Object.keys(bodyParams).length > 0;

  const res = await fetch(urlObj.toString(), {
    method: '${method}',
    headers: {
      'x-api-key': apiKey,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    ...(hasBody ? { body: JSON.stringify(bodyParams) } : {}),
  });

  const contentType = res.headers.get('content-type') || '';
  const text = await res.text();
  let data: any = null;
  if (contentType.includes('application/json')) {
    try {
      data = JSON.parse(text);
    } catch {
      data = null;
    }
  }

  if (!res.ok) {
    const message = data?.message || data?.error || text || res.statusText;
    throw new Error(\`HTTP \${res.status}: \${message}\`);
  }

  return data !== null ? data : text;
}
`;
<<<<<<< HEAD
}

function generateClientFile({ method, canonicalPath, operationId, pathParams, queryParams, baseUrl, targetName }) {
  const fileBase = operationId
    ? toSnakeCase(operationId)
    : toSnakeCase(`${method}_${canonicalPath.replace(/[/:]+/g, '_')}`);
  const fileName = `${fileBase}.ts`;

  let finalName = targetName || fileName;
  let exportName = finalName.replace(/\.ts$/, '');

  const targetPath = path.join(clientsDir, finalName);
  if (fs.existsSync(targetPath) && !targetName) {
    const hash = shortHash(`${method} ${canonicalPath}`);
    exportName = `${fileBase}_openapi_${hash}`;
    finalName = `${exportName}.ts`;
  }

  const finalContents = renderClient({
    method,
    canonicalPath,
    pathParams,
    queryParams,
    baseUrl,
    exportName
  });

  fs.writeFileSync(path.join(clientsDir, finalName), finalContents, 'utf8');
  return finalName;
=======

  let targetName = fileName;
  let exportName = fileBase;
  const targetPath = path.join(clientsDir, targetName);
  if (fs.existsSync(targetPath)) {
    const hash = shortHash(`${method} ${canonicalPath}`);
    exportName = `${fileBase}_openapi_${hash}`;
    targetName = `${exportName}.ts`;
  }

  const finalContents = contents.replace(
    /export async function\s+[a-zA-Z0-9_]+/,
    `export async function ${exportName}`
  );

  fs.writeFileSync(path.join(clientsDir, targetName), finalContents, 'utf8');
  return targetName;
>>>>>>> origin/main
}

function main() {
  const spec = parse(fs.readFileSync(specPath, 'utf8'));
  const baseUrl = (spec.servers && spec.servers[0] && spec.servers[0].url) || 'https://studio.edgeimpulse.com/v1';

  const httpMethods = new Set(['get', 'post', 'put', 'delete', 'patch', 'head', 'options', 'trace']);
  const openapiOps = new Map();

  const paths = spec.paths || {};
  for (const [rawPath, methods] of Object.entries(paths)) {
    if (!methods || typeof methods !== 'object') continue;
<<<<<<< HEAD
    const pathLevelParams = Array.isArray(methods.parameters)
      ? methods.parameters.map((p) => resolveParam(spec, p))
      : [];
=======
    const pathLevelParams = Array.isArray(methods.parameters) ? methods.parameters : [];
>>>>>>> origin/main
    for (const [method, op] of Object.entries(methods)) {
      if (!httpMethods.has(method)) continue;
      const operation = op || {};
      const canonicalPath = canonicalizePath(rawPath);
      const opId = operation.operationId || '';

      const params = [
        ...pathLevelParams,
<<<<<<< HEAD
        ...(Array.isArray(operation.parameters)
          ? operation.parameters.map((p) => resolveParam(spec, p))
          : [])
      ];
      const pathParams = params.filter((p) => p && p.in === 'path').map((p) => p.name);
      const queryParams = params.filter((p) => p && p.in === 'query').map((p) => p.name);

      const derivedPathParams = Array.from(
        canonicalPath.matchAll(/:([^/]+)/g),
        (m) => m[1]
      );
=======
        ...(Array.isArray(operation.parameters) ? operation.parameters : [])
      ];
      const pathParams = params.filter((p) => p.in === 'path').map((p) => p.name);
      const queryParams = params.filter((p) => p.in === 'query').map((p) => p.name);
>>>>>>> origin/main

      const key = `${method.toUpperCase()} ${canonicalPath}`;
      openapiOps.set(key, {
        method: method.toUpperCase(),
        canonicalPath,
        operationId: opId,
<<<<<<< HEAD
        pathParams: unique([...pathParams, ...derivedPathParams]),
        queryParams: unique(queryParams)
=======
        pathParams,
        queryParams
>>>>>>> origin/main
      });
    }
  }

  const clientOps = extractClientOps();
  const missing = [];
  const extra = [];

  for (const [key, op] of openapiOps.entries()) {
    if (!clientOps.has(key)) missing.push(op);
  }
  for (const [key, op] of clientOps.entries()) {
    if (!openapiOps.has(key)) extra.push(op);
  }

  for (const op of missing) {
    generateClientFile({ ...op, baseUrl });
  }

  for (const op of extra) {
    const filePath = path.join(clientsDir, op.file);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  }

<<<<<<< HEAD
  // Rewrite existing client files from OpenAPI to ensure parameters and names are correct
  for (const [key, op] of openapiOps.entries()) {
    const existing = clientOps.get(key);
    if (!existing) continue;
    generateClientFile({ ...op, baseUrl, targetName: existing.file });
=======
  const generatedFiles = fs.readdirSync(clientsDir).filter((f) => f.endsWith('.ts'));
  for (const file of generatedFiles) {
    const base = file.replace(/\.ts$/, '');
    const filePath = path.join(clientsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const match = content.match(/export async function\s+([a-zA-Z0-9_]+)/);
    if (!match || match[1] === base) continue;
    const updated = content.replace(
      /export async function\s+[a-zA-Z0-9_]+/,
      `export async function ${base}`
    );
    fs.writeFileSync(filePath, updated, 'utf8');
>>>>>>> origin/main
  }

  console.log(`OpenAPI operations: ${openapiOps.size}`);
  console.log(`Client operations before: ${clientOps.size}`);
  console.log(`Missing added: ${missing.length}`);
  console.log(`Extra removed: ${extra.length}`);
}

main();
