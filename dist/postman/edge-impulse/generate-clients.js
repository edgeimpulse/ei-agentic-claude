import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
/**
 * Script to parse the Edge Impulse Postman collection and generate TypeScript API clients and CLI command stubs for every endpoint.
 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const COLLECTION_PATH = path.join(__dirname, '../../../Edge Impulse API.postman_collection.json');
const OUTPUT_DIR = path.join(__dirname, 'generated');
function readCollection() {
    const raw = fs.readFileSync(COLLECTION_PATH, 'utf-8');
    return JSON.parse(raw);
}
function sanitizeName(name) {
    return name
        .replace(/[^a-zA-Z0-9]+/g, '_')
        .replace(/^_+|_+$/g, '')
        .replace(/_+/g, '_')
        .toLowerCase();
}
function walkItems(items, parentPath = []) {
    let endpoints = [];
    for (const item of items) {
        if (item.request) {
            endpoints.push({ ...item, parentPath });
        }
        else if (item.item) {
            endpoints = endpoints.concat(walkItems(item.item, parentPath.concat(item.name)));
        }
    }
    return endpoints;
}
function getBaseUrl(collection) {
    const baseVar = (collection.variable || []).find((v) => v.key === 'baseUrl');
    return baseVar?.value || 'https://studio.edgeimpulse.com/v1';
}
function buildUrlParts(endpoint, baseUrl) {
    const urlObj = endpoint.request.url || {};
    const raw = (urlObj.raw || '').replace(/{{baseUrl}}/g, baseUrl);
    const basePath = raw.split('?')[0];
    const pathParams = (urlObj.variable || []).map((v) => v.key);
    const queryParams = (urlObj.query || []).map((q) => q.key);
    return { basePath, pathParams, queryParams };
}
function generateClient(endpoint, baseUrl) {
    const method = endpoint.request.method;
    const { basePath, pathParams, queryParams } = buildUrlParts(endpoint, baseUrl);
    const name = sanitizeName(endpoint.name || endpoint.request.url.path.join('_'));
    const description = endpoint.request.description || '';
    const pathParamList = JSON.stringify(pathParams);
    const queryParamList = JSON.stringify(queryParams);
    return `/**\n * ${description}\n * Method: ${method}\n * URL: ${basePath}\n */\nexport async function ${name}(params: any, apiKey: string) {\n  const pathParams: string[] = ${pathParamList};\n  const queryParams: string[] = ${queryParamList};\n\n  let url = \`${basePath}\`;\n  for (const key of pathParams) {\n    const value = params?.[key];\n    if (value === undefined || value === null) {\n      throw new Error(\`Missing required path param: \${key}\`);\n    }\n    url = url.replace(\`:\${key}\`, encodeURIComponent(String(value)));\n  }\n\n  const urlObj = new URL(url);\n  for (const key of queryParams) {\n    const value = params?.[key];\n    if (value !== undefined && value !== null) {\n      urlObj.searchParams.set(key, String(value));\n    }\n  }\n\n  const bodyParams: Record<string, unknown> = { ...(params || {}) };\n  for (const key of pathParams) delete bodyParams[key];\n  for (const key of queryParams) delete bodyParams[key];\n\n  const hasBody = !['GET', 'HEAD'].includes('${method}') && Object.keys(bodyParams).length > 0;\n\n  const res = await fetch(urlObj.toString(), {\n    method: '${method}',\n    headers: {\n      'x-api-key': apiKey,\n      'Content-Type': 'application/json',\n      'Accept': 'application/json',\n    },\n    ...(hasBody ? { body: JSON.stringify(bodyParams) } : {}),\n  });\n\n  const contentType = res.headers.get('content-type') || '';\n  const text = await res.text();\n  let data: any = null;\n  if (contentType.includes('application/json')) {\n    try {\n      data = JSON.parse(text);\n    } catch {\n      data = null;\n    }\n  }\n\n  if (!res.ok) {\n    const message = data?.message || data?.error || text || res.statusText;\n    throw new Error(\`HTTP \${res.status}: \${message}\`);\n  }\n\n  return data !== null ? data : text;\n}\n`;
}
function main() {
    if (!fs.existsSync(OUTPUT_DIR))
        fs.mkdirSync(OUTPUT_DIR);
    const collection = readCollection();
    const baseUrl = getBaseUrl(collection);
    const endpoints = walkItems(collection.item);
    for (const endpoint of endpoints) {
        const clientCode = generateClient(endpoint, baseUrl);
        const fileName = sanitizeName(endpoint.name || endpoint.request.url.path.join('_')) + '.ts';
        fs.writeFileSync(path.join(OUTPUT_DIR, fileName), clientCode);
    }
    console.log(`Generated ${endpoints.length} client files in ${OUTPUT_DIR}`);
}
main();
