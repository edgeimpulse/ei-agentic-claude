
# Edge Impulse Claude Code MCP Integration

A complete **Model Context Protocol (MCP) server** that enables Claude Code to interact with all 365+ Edge Impulse APIs through natural language. This project provides seamless integration between Anthropic's Claude Code and Edge Impulse's machine learning platform.

## ✨ Features

- **🎯 365+ Edge Impulse APIs**: Complete access to projects, training, data, deployments, and more
- **🤖 Natural Language Interface**: Use Claude Code to manage Edge Impulse through conversation
- **⚡ Real-time Integration**: Direct API calls with instant responses
- **🔒 Secure Authentication**: API keys managed through environment variables
- **🛠️ Full CLI Fallback**: Traditional command-line interface still available
- **📊 Comprehensive Testing**: Full test coverage with programmatic reporting

## Quick Start

### 1. Install Claude Code
```bash
curl -fsSL https://claude.ai/install.sh | bash
```

### 2. Clone and Setup
```bash
git clone <repository-url>
cd ei-agentic-claude
npm install
npm run build
```

### 3. Configure Claude Code
```bash
# Add the Edge Impulse MCP server
claude mcp add edge-impulse -- node dist/mcp-server.js

# Verify connection
claude mcp list
```

### 4. Set API Keys
```bash
export ANTHROPIC_API_KEY=your_claude_api_key
export EI_API_KEY=your_edge_impulse_api_key
```

### 5. Start Using Claude Code
```bash
claude -p "Show me all my Edge Impulse projects"
```

## Table of Contents
- [Quick Start](#quick-start)
- [Screenshots](#screenshots)
- [Claude Code Integration](#claude-code-integration)
- [CLI Usage](#cli-usage)
- [API Coverage](#api-coverage)
- [Testing](#testing)
- [Development](#development)

## Screenshots

### CLI Usage
<img width="1111" height="571" alt="Screenshot 2026-01-23 at 16 54 01" src="https://github.com/user-attachments/assets/3fd11801-2948-48ad-b71f-f5117eb9a7f7" />

### Calling API on Block
<img width="1111" height="76" alt="Screenshot 2026-01-23 at 17 13 32" src="https://github.com/user-attachments/assets/8821b5da-021f-4fd3-a27d-0ee020ab5960" />

### Job Status
<img width="1207" height="76" alt="Screenshot 2026-01-23 at 17 17 13" src="https://github.com/user-attachments/assets/3adb2bd6-da51-4c0e-8f16-a61765c32af1" />

### Testing Framework
<img width="1207" height="274" alt="Screenshot 2026-01-23 at 17 29 24" src="https://github.com/user-attachments/assets/fe91d73b-ec09-4b4d-a669-1286fe43382a" />

# Development & Production Usage

## Universal CLI Launcher (Recommended)
Use the provided launcher script to automatically detect and run the CLI in the correct mode:

```
node launch-cli.mjs get-all-projects --api-key <your_api_key>
```

This script will:
- Use `ts-node` and `.ts` sources if available (development mode)
- Use compiled `.js` files from `dist` if running in production

## Manual Usage

### Development (TypeScript, ts-node)
Run CLI commands directly with TypeScript using ts-node:

```
npm run cli -- get-all-projects --api-key <your_api_key>
```

### Production (after build)
First, build the project:

```
npx tsc
```
Then run the compiled CLI from the `dist` directory:

```
node dist/cli.js get-all-projects --api-key <your_api_key>
```

# Storing Your API Key for Easier CLI Usage

You can avoid typing your API key every time by using one of these methods:

**1. Environment variable (recommended):**
Add this to your shell profile (e.g., `~/.zshrc` or `~/.bashrc`):
```sh
export EI_API_KEY=ei_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```
Then run commands like:
```sh
npm run cli -- get-all-projects --api-key $EI_API_KEY
```

**2. .env file with `dotenv-cli`:**
Install dotenv-cli:
```sh
npm install -g dotenv-cli
```
Create a `.env` file:
```
EI_API_KEY=your_api_key_here
```
Run commands with:
```sh
dotenv -e .env -- npm run cli -- get-all-projects --api-key $EI_API_KEY
```

**3. Shell alias:**
Add to your shell profile:
```sh
alias eicli='npm run cli -- --api-key $EI_API_KEY'
```
Then run:
```sh
eicli get-all-projects

## New: `--params` JSON and optional `organizationId`

Many generated commands accept a `--params` option which takes a JSON string of parameters. For project listing we made `organizationId` optional — if supplied the CLI will call the organization-scoped endpoint, otherwise it will call the user-facing projects endpoint.

Examples:

```sh
# List projects for API key (no organization required)
node launch-cli.mjs get-projects --api-key $EI_API_KEY --params '{"type":"classification"}'

# List projects for an organization (organizationId is optional)
node launch-cli.mjs get-projects --api-key $EI_API_KEY --params '{"organizationId":"1478","type":"classification"}'
```

The same `--params` JSON pattern is used by other commands — e.g., training commands accept `projectId`, `learnId`, and training parameters through `--params`.

If you prefer top-level flags, many commands still accept specific flags generated in the CLI files (check `--help` for the command).
```


# Auto-Generated CLI Commands (Extensible Secondary Layer)

All Edge Impulse API endpoints are available as CLI commands, auto-generated from the Postman collection. This auto-generation is designed as a secondary, extensible layer—making it easy to add, update, or extend commands as the API evolves.

**Primary focus:** This repo is architected for agentic workflows, enabling Claude (or other LLM agents) to interact with Edge Impulse via a robust, typed interface. The CLI commands are a convenience layer for direct use and future extension.

**Usage Pattern:**
```
npm run cli -- <command-name> --api-key <your_api_key> [--params '{"param1":"value1",...}']
```

**How to discover available commands:**
- All generated commands are in `src/postman/edge-impulse/generated/cli-commands/` (replace underscores with dashes for CLI usage).
- Run `npm run cli -- --help` to see all registered commands and options.
- Use the exact generated command name (e.g., `get-all-projects`, `add-api-key`).

**Unified option:** All commands require `--api-key <your_api_key>`

**Example:**
```
npm run cli -- get-all-projects --api-key <your_api_key>
npm run cli -- add-api-key --api-key <your_api_key> --params '{"projectId":123,"name":"test"}'
npm run cli -- train-model-keras --api-key <your_api_key> --params '{"projectId":123,"learnId":456,"trainingCycles":10}'
```

**Troubleshooting:**
- If a command is not recognized, check the generated file name and use the corresponding CLI name.
- If no commands appear in `--help`, ensure you have built the project (`npx tsc`) and that the generator does not include `.ts` in import paths.
- For advanced usage, see the generated files or the Edge Impulse API documentation.

**Tip:** You can add a test script to list all available commands:
```json
"scripts": {
  ...,
  "cli-list": "npm run cli -- --help"
}
```

# Claude Code Integration (MCP)

This project provides a **Model Context Protocol (MCP) server** that enables Claude Code to interact with all 365+ Edge Impulse APIs through natural language conversations.

## ✅ Current Status: **FULLY WORKING**

The integration is complete and tested. Claude Code can now:
- Access all Edge Impulse APIs through natural language
- Manage projects, training, data, and deployments
- Provide intelligent ML workflow assistance

## Setup (Already Complete)

### ✅ MCP Server Added
```bash
claude mcp add edge-impulse -- node dist/mcp-server.js
claude mcp list  # Shows: edge-impulse: node dist/mcp-server.js - ✓ Connected
```

### ✅ API Keys Configured
```bash
export ANTHROPIC_API_KEY=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
export EI_API_KEY=ei_your_actual_api_key_here
```

## Usage

### Interactive Mode (Recommended)
```bash
claude
# Then ask: "Show me all my Edge Impulse projects"
```

### Non-Interactive Mode
```bash
claude -p "List all my Edge Impulse projects"
claude -p "Start training a Keras model on project 123"
claude -p "Check the status of job 456"
```

## What Claude Can Help You Do

### 🤖 Project Management
- List, create, and manage Edge Impulse projects
- Configure project settings and metadata
- Handle team collaboration and permissions

### 📊 Data Operations
- Upload datasets (time series, images, audio, sensors)
- Organize data into training/testing sets
- Label and annotate data
- Import from cloud storage

### 🧠 Model Development
- Design impulses (DSP + ML blocks)
- Configure DSP for feature extraction
- Train ML models (Keras, transfer learning)
- Run anomaly detection
- Profile and optimize models

### 🚀 Deployment
- Build optimized models for edge devices
- Generate firmware and libraries
- Create deployment packages
- Download trained models

### 📈 Testing & Evaluation
- Test models on validation data
- Generate performance metrics
- Analyze confusion matrices
- Debug feature extraction

## Example Conversation

```
You: "I want to train a machine learning model on my Edge Impulse data"

Claude: "I'll help you with that! First, let me see what projects you have available."

[Claude automatically calls Edge Impulse APIs]

Claude: "I found these projects:
- Project 123: 'Sensor Classification'
- Project 456: 'Audio Detection'

Which project would you like to work with?"

You: "Let's use project 123"

Claude: "Great! Now let me check what training data is available for this project..."

[Claude continues the workflow automatically]
```

## Automated Setup Script

Run the included setup script for complete automation:

```bash
chmod +x setup-claude.sh
./setup-claude.sh
```

This script will:
- Configure your API keys
- Test Claude Code authentication
- Verify MCP server connectivity
- Test Edge Impulse API access

## Claude Desktop Setup (Alternative)

**On macOS:**
- Open `~/Library/Application Support/Claude/claude_desktop_config.json`
- Add the MCP server configuration:

```json
{
  "mcpServers": {
    "edge-impulse": {
      "command": "node",
      "args": ["/Users/eoinjordan/git/ei-agentic-claude/dist/mcp-server.js"],
      "cwd": "/Users/eoinjordan/git/ei-agentic-claude",
      "env": {
        "NODE_ENV": "production"
      }
    }
  }
}
```

**On Windows:**
- Location: `%APPDATA%\Claude\claude_desktop_config.json`

**On Linux:**
- Location: `~/.config/Claude/claude_desktop_config.json`

### 4. Restart Claude Desktop

The MCP server will automatically start when you open Claude Desktop.

## Using Claude with Edge Impulse APIs

Once configured, you can ask Claude to perform Edge Impulse operations naturally:

**Examples:**
- *"List all my Edge Impulse projects"*
- *"Start training a Keras model on project 123 with learnId 456"*
- *"Check the status of job 789"*
- *"Get evaluation metrics for my trained model"*
- *"Create a new Edge Impulse project called 'My Sensor Data'"*

Claude will automatically:
1. Map your natural language to the appropriate Edge Impulse API calls
2. Handle API key management
3. Format responses in a readable way
4. Chain multiple API calls when needed

## MCP Server Features

- **365 APIs Available**: All Edge Impulse endpoints accessible through Claude
- **Automatic Parameter Validation**: Claude handles required vs optional parameters
- **Error Handling**: Clear error messages for API failures
- **JSON Responses**: Structured data returned from all API calls
- **No CLI Knowledge Required**: Use natural language instead of command syntax

## API Key Management

Set your Edge Impulse API key as an environment variable:

```bash
export EI_API_KEY=ei_your_api_key_here
```

Claude will automatically use this key for all API calls through the MCP server.

## Troubleshooting MCP

- **Server won't start**: Ensure you've run `npm run build` and the `dist/` folder exists
- **Claude can't find tools**: Restart Claude Desktop after configuration changes
- **API errors**: Check your API key and network connectivity
- **Permission issues**: Ensure Claude Desktop has access to the project directory

# Edge Impulse Claude Agentic Example

This project demonstrates a minimal, agentic workflow for Edge Impulse using a TypeScript CLI and Claude. You can list projects, train Keras blocks, and (optionally) fetch evaluation metrics.

## Features
- List Edge Impulse projects
- Start model training with advanced Keras config
- Check training job status
- (Optional) Fetch evaluation metrics (if available via API)
- Typed API clients, robust error handling

## Quick Start
1. **Connect Claude to the Postman MCP server:**
  ```sh
  claude mcp add --transport http postman https://mcp.postman.com/code \
    --header "Authorization: Bearer YOUR_POSTMAN_API_KEY"
  ```
2. **Prompt your agent:**
  > Build a CLI that lists my Edge Impulse projects and starts a training job using the Edge Impulse API collection.
3. **Generated files:**
  - src/postman/edge-impulse/projects/list-projects/client.ts
  - src/postman/edge-impulse/projects/upload-data/client.ts
  - src/postman/edge-impulse/training/start-training/client.ts
  - src/postman/edge-impulse/shared/types.ts
  - src/cli.ts
4. **Install dependencies:**
  ```sh
  npm install
  ```
5. **Run the CLI:**
  ```sh
  npm run cli -- get-all-projects --api-key <your_api_key>
  npm run cli -- add-api-key --api-key <your_api_key> --params '{"projectId":123,"name":"test"}'
  npm run cli -- train-model-keras --api-key <your_api_key> --params '{"projectId":123,"learnId":456,"trainingCycles":10}'
  ```

## Agentic Workflow Example
1. **List projects:**
  ```sh
  npm run cli -- get-all-projects --api-key <your_api_key>
  ```
2. **Start training:**
  ```sh
  npm run cli -- train-model-keras --api-key <your_api_key> --params '{"projectId":123,"learnId":456}'
  ```
 
    ### Start training with `--params` (JSON)

    You can pass the full training request as a JSON string using `--params`. This is useful when invoking from agents or scripts.

    ```sh
    # start training (Keras) with training parameters in --params
    npm run cli -- train-model-keras --api-key <your_api_key> \
      --params '{"projectId":123,"learnId":456,"mode":"visual","trainingCycles":30,"learningRate":0.01,"batchSize":64}'

    # some generators use the command name `start-training` — same pattern applies
    npm run cli -- start-training --api-key <your_api_key> \
      --params '{"projectId":123,"learnId":456,"mode":"visual","trainingCycles":30}'
    ```
3. **Check job status:**
  ```sh
  npm run cli -- get-job-status --api-key <your_api_key> --params '{"projectId":123,"jobId":789}'
  ```
4. **(Optional) Fetch evaluation metrics:**
  ```sh
  npm run cli -- evaluate-block --api-key <your_api_key> --params '{"projectId":123,"learnId":456}'
  ```

## Advanced: Configure Keras Block Parameters
You (or Claude) can configure any Keras block parameter at training time using the CLI's `--param` option. Example:
```sh
npm run cli -- start-training --api-key <your_api_key> --projectId <projectId> --learnId <learnId> \
  --mode visual \
  --param trainingCycles=50 learningRate=0.005 batchSize=64 autoClassWeights=true selectedModelType=int8
```
See the [Edge Impulse API docs](https://docs.edgeimpulse.com/apis/studio/jobs/train-model-keras) for a full list.

## Notes & Troubleshooting
- If you get a 404 on job status or evaluation, wait a few seconds and retry.
- Confirm your learnId is valid by checking the Edge Impulse dashboard.
- All training and evaluation results are always available in the dashboard, even if not exposed via API.
- Evaluation metrics may not be available via public API for all blocks.

## Testing

This repository includes a small smoke test and unit tests to help contributors validate changes quickly.

- Smoke test: a lightweight Node script that asserts key CLI help text is present. Run:

```bash
npm install
npm run smoke
```

- Unit tests: written with Vitest. Run:

```bash
npm test
```

Files of interest:
- `scripts/smoke-test.js` — smoke script that runs basic CLI help checks.
- `test/cli.spec.ts` — Vitest tests asserting presence of key commands (`train-model-keras`, `wait-job`).

Notes:
- The project uses ESM (`type: module`), so the smoke script uses ESM imports.
- CI: consider adding a GitHub Actions workflow to run `npm ci && npm run smoke && npm test` on PRs.
