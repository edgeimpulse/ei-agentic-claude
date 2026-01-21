
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

function sanitizeName(name: string) {
  return name
    .replace(/[^a-zA-Z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .replace(/_+/g, '_')
    .toLowerCase();
}

function walkItems(items: any[], parentPath: string[] = []) {
  let endpoints: any[] = [];
  for (const item of items) {
    if (item.request) {
      endpoints.push({ ...item, parentPath });
    } else if (item.item) {
      endpoints = endpoints.concat(walkItems(item.item, parentPath.concat(item.name)));
    }
  }
  return endpoints;
}

function generateClient(endpoint: any) {
  const method = endpoint.request.method;
  const url = endpoint.request.url.raw.replace(/{{baseUrl}}/, 'https://studio.edgeimpulse.com');
  const name = sanitizeName(endpoint.name || endpoint.request.url.path.join('_'));
  const description = endpoint.request.description || '';
  return `/**\n * ${description}\n * Method: ${method}\n * URL: ${url}\n */\nexport async function ${name}(params: any, apiKey: string) {\n  // TODO: Implement parameter mapping\n  const res = await fetch(\`${url}\`, {\n    method: '${method}',\n    headers: {\n      'x-api-key': apiKey,\n      'Content-Type': 'application/json',\n      'Accept': 'application/json',\n    },\n    // body: JSON.stringify(params), // Uncomment for POST/PUT\n  });\n  return res.json();\n}\n`;
}

function main() {
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR);
  const collection = readCollection();
  const endpoints = walkItems(collection.item);
  for (const endpoint of endpoints) {
    const clientCode = generateClient(endpoint);
    const fileName = sanitizeName(endpoint.name || endpoint.request.url.path.join('_')) + '.ts';
    fs.writeFileSync(path.join(OUTPUT_DIR, fileName), clientCode);
  }
  console.log(`Generated ${endpoints.length} client files in ${OUTPUT_DIR}`);
}

main();
