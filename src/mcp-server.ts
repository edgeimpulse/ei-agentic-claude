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

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * MCP Server for Edge Impulse API integration with Claude Code
 * Provides access to all 365 Edge Impulse API functions as MCP tools
 */
class EdgeImpulseMCPServer {
  private server: Server;
  private apiFunctions: Map<string, Function> = new Map();

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

    this.setupToolHandlers();
    this.loadAPIFunctions();
  }

  /**
   * Load all Edge Impulse API functions from the generated files
   * Supports both development (src/) and production (dist/) environments
   */
  private async loadAPIFunctions() {
    // Check if we're running from dist (production) or src (development)
    const isDist = __dirname.includes('/dist/') || __dirname.includes('\\dist\\');
    const apiDir = isDist
      ? path.resolve(__dirname, "../src/postman/edge-impulse/generated")
      : path.resolve(__dirname, "postman/edge-impulse/generated");

    try {
      const files = fs.readdirSync(apiDir).filter(f => f.endsWith('.ts') || f.endsWith('.js'));

      for (const file of files) {
        const filePath = path.join(apiDir, file);
        const module = await import(pathToFileURL(filePath).href);

        // Find the main exported function
        const apiFunction = Object.values(module).find(v =>
          typeof v === 'function' && v.constructor.name === 'AsyncFunction'
        ) as Function;

        if (apiFunction) {
          const functionName = path.basename(file, path.extname(file));
          this.apiFunctions.set(functionName, apiFunction);
        }
      }

      console.error(`Loaded ${this.apiFunctions.size} API functions`);
    } catch (error) {
      console.error("Error loading API functions:", error);
    }
  }

  /**
   * Set up MCP tool handlers for listing and calling API functions
   */
  private setupToolHandlers() {
    // List available tools (API functions)
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      const tools = Array.from(this.apiFunctions.entries()).map(([name, func]) => ({
        name,
        description: `Edge Impulse API: ${name.replace(/_/g, ' ')}`,
        inputSchema: {
          type: "object",
          properties: {
            params: {
              type: "object",
              description: "Parameters for the API call (optional)"
            },
            apiKey: {
              type: "string",
              description: "Edge Impulse API key"
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

        // Call the API function
        const result = await apiFunction(params, apiKey);

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2)
            }
          ]
        };
      } catch (error) {
        return {
          content: [
            {
              type: "text",
              text: `Error calling ${name}: ${error instanceof Error ? error.message : String(error)}`
            }
          ],
          isError: true
        };
      }
    });
  }

  /**
   * Start the MCP server with stdio transport
   */
  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error("Edge Impulse MCP server running on stdio");
  }
}

// Start the server
const server = new EdgeImpulseMCPServer();
server.run().catch(console.error);