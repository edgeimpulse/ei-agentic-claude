#!/usr/bin/env node

// This launcher detects if running from TypeScript (ts-node) or from compiled JS (Node.js)
// and loads the correct CLI entrypoint with the right import extension.

const isTsNode = process.argv[1] && process.argv[1].endsWith('.ts');

if (isTsNode) {
  // Running with ts-node: use .ts extension
  import('./src/cli.ts');
} else {
  // Running with node: use .js extension
  import('./dist/cli.js');
}
