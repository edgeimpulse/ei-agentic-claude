#!/usr/bin/env node

// Simple MCP server test
import { spawn } from 'child_process';

console.log('🧪 Testing Edge Impulse MCP Server...\n');

const mcpProcess = spawn('node', ['dist/mcp-server.js'], {
  stdio: ['pipe', 'pipe', 'inherit'],
  cwd: process.cwd()
});

// Test 1: List tools
const listToolsRequest = {
  jsonrpc: '2.0',
  id: 1,
  method: 'tools/list',
  params: {}
};

setTimeout(() => {
  console.log('📋 Requesting tool list...');
  mcpProcess.stdin.write(JSON.stringify(listToolsRequest) + '\n');

  mcpProcess.stdout.on('data', (data) => {
    try {
      const response = JSON.parse(data.toString());
      if (response.result && response.result.tools) {
        console.log(`✅ Successfully loaded ${response.result.tools.length} Edge Impulse API tools!`);
        console.log('\n🎉 MCP Server is working correctly!');
        console.log('\n📖 Next steps:');
        console.log('1. Configure Claude Desktop with the MCP server');
        console.log('2. Ask Claude to interact with Edge Impulse APIs naturally');
        console.log('3. Example: "List all my Edge Impulse projects"');

        mcpProcess.kill();
        process.exit(0);
      }
    } catch (e) {
      // Ignore parsing errors for large responses
    }
  });
}, 1000);

// Timeout after 5 seconds
setTimeout(() => {
  console.log('❌ Test timeout - MCP server may not be responding');
  mcpProcess.kill();
  process.exit(1);
}, 5000);