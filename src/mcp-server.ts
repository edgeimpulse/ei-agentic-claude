#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ErrorCode,
  ListToolsRequestSchema,
  McpError,
} from "@modelcontextprotocol/sdk/types.js";
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import crypto from "crypto";
import vm from "vm";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * MCP Server for Edge Impulse API integration with Claude Code
 * Provides access to all 365 Edge Impulse API functions as MCP tools
 */
class EdgeImpulseMCPServer {
  private server: Server;
  private apiFunctions: Map<string, Function> = new Map();
  private initialized = false;

  constructor() {
    this.server = new Server(
      {
        name: "edge-impulse-api-server",
        version: "1.0.0",
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );
  }

  /**
   * Initialize the server by loading API functions and setting up handlers
   */
  async initialize() {
    await this.loadAPIFunctions();
    this.setupToolHandlers();
    this.initialized = true;
  }

  /**
   * Load all Edge Impulse API functions from the generated files
   * Supports both development (src/) and production (dist/) environments
   */
  private async loadAPIFunctions() {
    // Prefer built assets in dist; fall back to sources for ts-node
    const builtApiDir = path.resolve(__dirname, "postman/edge-impulse/generated");
    const sourceApiDir = path.resolve(__dirname, "../src/postman/edge-impulse/generated");
    const apiDir = fs.existsSync(builtApiDir) ? builtApiDir : sourceApiDir;

    try {
      const files = fs.readdirSync(apiDir).filter(f => f.endsWith('.ts') || f.endsWith('.js'));

      // Load integrity hashes if available
      const integrityPath = path.join(apiDir, 'integrity.json');
      let expectedHashes: Record<string, string> = {};
      if (fs.existsSync(integrityPath)) {
        expectedHashes = JSON.parse(fs.readFileSync(integrityPath, 'utf-8'));
      }

      for (const file of files) {
        const filePath = path.join(apiDir, file);

        // Verify file integrity if hash is available
        if (expectedHashes[file]) {
          const actualHash = this.calculateSHA256(filePath);
          if (actualHash !== expectedHashes[file]) {
            throw new Error(`Integrity check failed for ${file}. File may be corrupted or tampered with.`);
          }
        }

        const module = await import(pathToFileURL(filePath).href);

        // More robust function detection: check for default export first, then any function
        const apiFunction = module.default || Object.values(module).find(v => typeof v === 'function') as Function;

        if (apiFunction) {
          const functionName = path.basename(file, path.extname(file));
          this.apiFunctions.set(functionName, apiFunction);
        }
      }

      console.error(`Loaded ${this.apiFunctions.size} API functions with sandboxing enabled`);

      // Fail fast if no functions were loaded
      if (this.apiFunctions.size === 0) {
        throw new Error(`No API functions found in ${apiDir}. Ensure the generated files exist in dist or src.`);
      }
    } catch (error) {
      console.error("Error loading API functions:", error);
      throw error; // Re-throw to fail fast
    }
  }

  /**   * Execute an API function in a sandboxed environment
   */
  private async executeInSandbox(apiFunction: Function, params: any, apiKey: string): Promise<any> {
    // Create a restricted context with only necessary globals
    const sandboxContext = vm.createContext({
      // Safe globals
      console: { error: console.error, log: console.log },
      JSON: JSON,
      Promise: Promise,
      setTimeout: setTimeout,
      clearTimeout: clearTimeout,
      setInterval: setInterval,
      clearInterval: clearInterval,
      // Safe Error constructors
      Error: Error,
      TypeError: TypeError,
      RangeError: RangeError,
      // Required for fetch
      global: {},
      process: { env: {} }, // Empty env to prevent access to real environment
      Buffer: Buffer,
      URL: URL,
      URLSearchParams: URLSearchParams,
      // The fetch function (available globally in Node 18+)
      fetch: fetch,
      // Pass the function and parameters to the sandbox
      apiFunction: apiFunction,
      params: params,
      apiKey: apiKey,
    });

    // Create a script that calls the function with parameters
    const script = new vm.Script(`
      (async () => {
        try {
          const result = await apiFunction(params, apiKey);
          return result;
        } catch (error) {
          throw new Error('Sandbox execution error: ' + error.message);
        }
      })()
    `);

    // Run the script in the sandbox
    const result = await script.runInContext(sandboxContext, {
      timeout: 30000, // 30 second timeout
      breakOnSigint: true
    });

    return result;
  }

  /**   * Calculate SHA256 hash of a file
   */
  private calculateSHA256(filePath: string): string {
    const fileBuffer = fs.readFileSync(filePath);
    const hashSum = crypto.createHash('sha256');
    hashSum.update(fileBuffer);
    return hashSum.digest('hex');
  }

  /**
   * Set up MCP tool handlers for listing and calling API functions
   */
  private setupToolHandlers() {
    // List available tools (API functions)
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      const tools = Array.from(this.apiFunctions.entries()).map(([name, func]) => ({
        name,
        description: `Edge Impulse API function: ${name.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`,
        inputSchema: {
          type: "object",
          properties: {
            params: {
              type: "object",
              description: "Parameters for the API call (optional)"
            },
            apiKey: {
              type: "string",
              description: "Edge Impulse API key (required)"
            }
          },
          required: ["apiKey"]
        }
      }));

      return { tools };
    });

    // Handle tool calls
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      const apiFunction = this.apiFunctions.get(name);
      if (!apiFunction) {
        throw new McpError(
          ErrorCode.MethodNotFound,
          `Unknown tool: ${name}`
        );
      }

      try {
        const { params = {}, apiKey } = args as { params?: any; apiKey: string };

        // Validate required apiKey
        if (!apiKey || typeof apiKey !== 'string' || apiKey.trim() === '') {
          throw new McpError(
            ErrorCode.InvalidParams,
            "apiKey is required and must be a non-empty string"
          );
        }

        // Call the API function in a sandboxed environment
        const result = await this.executeInSandbox(apiFunction, params, apiKey);

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2)
            }
          ]
        };
      } catch (error) {
        // Re-throw McpError instances as-is for consistency
        if (error instanceof McpError) {
          throw error;
        }

        // Wrap other errors as McpError
        throw new McpError(
          ErrorCode.InternalError,
          `Error calling ${name}: ${error instanceof Error ? error.message : String(error)}`
        );
      }
    });
  }

  /**
   * Start the MCP server with stdio transport
   */
  async run() {
    if (!this.initialized) {
      throw new Error("Server must be initialized before running. Call initialize() first.");
    }

    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error("Edge Impulse MCP server running on stdio");
  }
}

// Start the server
const server = new EdgeImpulseMCPServer();
server.initialize().then(() => {
  return server.run();
}).catch(console.error);
