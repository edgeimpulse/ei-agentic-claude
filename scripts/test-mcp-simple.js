#!/usr/bin/env node

// Simple MCP server test (stdout is JSONL)
import { spawn } from 'child_process';

console.log('Testing Edge Impulse MCP Server...\n');

const mcpProcess = spawn('node', ['dist/mcp-server.js'], {
  stdio: ['pipe', 'pipe', 'inherit'],
  cwd: process.cwd()
});

const EI_API_KEY = process.env.EI_API_KEY;
const EI_PROJECT_ID = process.env.EI_PROJECT_ID || process.env.PROJECT_ID;
const EI_ORG_API_KEY = process.env.EI_ORG_API_KEY;
const EI_ORG_ID = process.env.EI_ORG_ID;

let buffer = '';
let nextId = 1;
const pending = new Map();

function send(method, params) {
  return new Promise((resolve, reject) => {
    const id = nextId++;
    pending.set(id, { resolve, reject });
    mcpProcess.stdin.write(JSON.stringify({ jsonrpc: '2.0', id, method, params }) + '\n');
  });
}

function extractContent(response) {
  const text = response?.result?.content?.[0]?.text;
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

mcpProcess.stdout.on('data', (chunk) => {
  buffer += chunk.toString();
  let idx;
  while ((idx = buffer.indexOf('\n')) >= 0) {
    const line = buffer.slice(0, idx).trim();
    buffer = buffer.slice(idx + 1);
    if (!line) continue;
    try {
      const msg = JSON.parse(line);
      if (msg?.id && pending.has(msg.id)) {
        const { resolve, reject } = pending.get(msg.id);
        pending.delete(msg.id);
        if (msg.error) {
          reject(new Error(msg.error.message || JSON.stringify(msg.error)));
        } else {
          resolve(msg);
        }
      }
    } catch {
      // ignore non-JSON lines
    }
  }
});

const results = [];
function record(name, ok, detail = '') {
  results.push({ name, ok, detail });
  const status = ok ? 'OK' : 'FAIL';
  console.log(`${status} - ${name}${detail ? ` (${detail})` : ''}`);
}

async function run() {
  try {
    const toolList = await send('tools/list', {});
    const tools = toolList?.result?.tools || [];
    record('tools/list', tools.length > 0, `${tools.length} tools`);

    if (EI_API_KEY) {
      const listProjects = await send('tools/call', {
        name: 'list_active_projects',
        arguments: { apiKey: EI_API_KEY, params: {} }
      });
      const listData = extractContent(listProjects);
      const projects = Array.isArray(listData?.projects) ? listData.projects : Array.isArray(listData) ? listData : [];
      record('list_active_projects', listData !== null, projects.length ? `${projects.length} projects` : 'no projects');

      if (EI_PROJECT_ID) {
        const projectInfo = await send('tools/call', {
          name: 'project_information',
          arguments: { apiKey: EI_API_KEY, params: { projectId: EI_PROJECT_ID } }
        });
        record('project_information', extractContent(projectInfo) !== null);

        const impulse = await send('tools/call', {
          name: 'get_impulse',
          arguments: { apiKey: EI_API_KEY, params: { projectId: EI_PROJECT_ID } }
        });
        const impulseData = extractContent(impulse);
        record('get_impulse', impulseData !== null);

        const impulseRoot = impulseData?.impulse || impulseData;
        const learnBlocks = impulseRoot?.learnBlocks || impulseRoot?.learn_blocks || [];
        const learnId = Array.isArray(learnBlocks) ? learnBlocks[0]?.id : undefined;

        if (learnId) {
          const anomalyInfo = await send('tools/call', {
            name: 'anomaly_information',
            arguments: { apiKey: EI_API_KEY, params: { projectId: EI_PROJECT_ID, learnId } }
          });
          record('anomaly_information', extractContent(anomalyInfo) !== null, `learnId=${learnId}`);
        } else {
          record('anomaly_information', false, 'learnId not found in impulse');
        }
      } else {
        record('project_information', false, 'missing EI_PROJECT_ID');
        record('get_impulse', false, 'missing EI_PROJECT_ID');
        record('anomaly_information', false, 'missing EI_PROJECT_ID');
      }
    } else {
      record('list_active_projects', false, 'missing EI_API_KEY');
    }

    if (EI_ORG_API_KEY) {
      const orgList = await send('tools/call', {
        name: 'list_active_organizations',
        arguments: { apiKey: EI_ORG_API_KEY, params: {} }
      });
      const orgData = extractContent(orgList);
      const orgs = Array.isArray(orgData?.organizations) ? orgData.organizations : Array.isArray(orgData) ? orgData : [];
      record('list_active_organizations', orgData !== null, orgs.length ? `${orgs.length} orgs` : 'no orgs');
    } else {
      record('list_active_organizations', false, 'missing EI_ORG_API_KEY');
    }

    const failed = results.some((r) => !r.ok);
    process.exit(failed ? 2 : 0);
  } catch (error) {
    console.error('Test failed:', error?.message || error);
    process.exit(2);
  } finally {
    mcpProcess.kill();
  }
}

setTimeout(() => {
  console.error('Test timeout - MCP server may not be responding');
  mcpProcess.kill();
  process.exit(1);
}, 30000);

run();
