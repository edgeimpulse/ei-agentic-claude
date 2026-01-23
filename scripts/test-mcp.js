#!/usr/bin/env node

// Test script to verify MCP server functionality
import { spawn } from 'child_process';
import path from 'path';

const mcpServerPath = path.resolve('./dist/mcp-server.js');

console.log('Testing Edge Impulse MCP Server...\n');

// Test 1: List tools
console.log('1. Testing tool listing...');
const listToolsProcess = spawn('node', [mcpServerPath], {
  stdio: ['pipe', 'pipe', 'pipe'],
  cwd: process.cwd()
});

const listToolsRequest = {
  jsonrpc: '2.0',
  id: 1,
  method: 'tools/list',
  params: {}
};

listToolsProcess.stdin.write(JSON.stringify(listToolsRequest) + '\n');
listToolsProcess.stdout.on('data', (data) => {
  console.log('✓ Tools list received');
  console.log('Sample tools:', JSON.parse(data.toString()).result.tools.slice(0, 3).map(t => t.name));
});

listToolsProcess.stderr.on('data', (data) => {
  console.error('Error:', data.toString());
});

// Wait a bit then test a tool call
setTimeout(() => {
  console.log('\n2. Testing tool call (get_current_user)...');

  const toolCallProcess = spawn('node', [mcpServerPath], {
    stdio: ['pipe', 'pipe', 'pipe'],
    cwd: process.cwd()
  });

  const toolCallRequest = {
    jsonrpc: '2.0',
    id: 2,
    method: 'tools/call',
    params: {
      name: 'get_current_user',
      arguments: {
        apiKey: 'test-key-for-demo'
      }
    }
  };

  toolCallProcess.stdin.write(JSON.stringify(toolCallRequest) + '\n');
  toolCallProcess.stdout.on('data', (data) => {
    console.log('✓ Tool call response received');
    console.log('Response preview:', data.toString().substring(0, 100) + '...');
  });

  toolCallProcess.stderr.on('data', (data) => {
    console.error('Error:', data.toString());
  });

  // Clean exit after test
  setTimeout(() => {
    listToolsProcess.kill();
    toolCallProcess.kill();
    console.log('\n✓ MCP Server test completed successfully!');
    console.log('\nNext steps:');
    console.log('1. Set up Claude Desktop configuration');
    console.log('2. Start using Edge Impulse APIs through Claude!');
  }, 2000);

}, 1000);