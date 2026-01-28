
# Edge Impulse Claude Code MCP Integration

A Model Context Protocol (MCP) server that enables Claude Code to interact with Edge Impulse APIs. This project provides integration between Anthropic's Claude Code and Edge Impulse's machine learning platform.


## Security

### API Key Management
- API keys are stored in a local `.env` file (not committed to git)
- Keys are validated for presence and format before API calls
- Use `cp .env.example .env` to create your secure configuration

### Generated Code Integrity
- Generated API client files include SHA256 integrity checks
- Run `npm run generate-integrity` after generating new client files
- Files are validated at runtime before loading
- Integrity hashes stored in `integrity.json` alongside generated files
- Verify the Postman collection source before generating clients

### Dynamic Import Security
- **Integrity Validation**: SHA256 hashes are computed and verified for all generated API client files
- **Runtime Checks**: Files are validated before loading to prevent tampering
- **Sandboxing**: Implemented for MCP server API calls using Node.js vm module with restricted context
- Generated code runs in sandboxed environment with limited globals (fetch, JSON, timers only)
- CLI commands run in main process (user-initiated, lower risk)

### Rate Limiting
- API calls are subject to Edge Impulse's rate limits
- Consider implementing client-side rate limiting for high-volume usage
- Monitor API usage in your Edge Impulse dashboard

### Source Verification
⚠️ **Important**: Always verify the `Edge Impulse API.postman_collection.json` file comes from a trusted source before running code generation.

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

# Optional: Run the automated setup script (loads .env automatically)
./setup-claude.sh
```

### 3. Configure Claude Code
```bash
# Add the Edge Impulse MCP server
claude mcp add edge-impulse -- node dist/mcp-server.js

# Verify connection
claude mcp list
```

### 4. Configure API Keys
**Secure Setup (Recommended):**
```bash
# Copy the example environment file
cp .env.example .env

# Edit .env with your actual API keys
# ANTHROPIC_API_KEY=your_anthropic_api_key_here
# EI_API_KEY=your_edge_impulse_api_key_here
```

**Quick Setup (for testing):**
```bash
export ANTHROPIC_API_KEY=your_claude_api_key
export EI_API_KEY=your_edge_impulse_api_key
```

> **🔒 Security Note:** API keys are stored in `.env` files (not committed to git). See [API Key Management](#api-key-management) for detailed setup options.

### 5. Start Using Claude Code
```bash
claude -p "Show me all my Edge Impulse projects"
```

## Table of Contents
- [Quick Start](#quick-start)
- [Security](#security)
- [Automated Setup](#automated-setup)
- [Screenshots](#screenshots)
- [Claude Code Integration](#claude-code-integration)
- [CLI Usage](#cli-usage)
- [API Coverage](#api-coverage)
- [Testing](#testing)
- [Development](#development)

## Automated Setup

For convenience, you can use the included setup script to automate the Claude Code integration:

```bash
# Ensure you have .env configured first
cp .env.example .env
# Edit .env with your API keys

# Run the setup script
./setup-claude.sh
```

The script will:
- Load API keys from your `.env` file
- Test Claude Code authentication
- Verify MCP server connectivity
- Test Edge Impulse API access

## Screenshots

### CLI Usage
<img width="1111" height="571" alt="Screenshot 2026-01-23 at 16 54 01" src="https://github.com/user-attachments/assets/3fd11801-2948-48ad-b71f-f5117eb9a7f7" />

### Calling API on Block
<img width="1111" height="76" alt="Screenshot 2026-01-23 at 17 13 32" src="https://github.com/user-attachments/assets/8821b5da-021f-4fd3-a27d-0ee020ab5960" />

### Job Status
<img width="1207" height="76" alt="Screenshot 2026-01-23 at 17 17 13" src="https://github.com/user-attachments/assets/3adb2bd6-da51-4c0e-8f16-a61765c32af1" />

### Testing Framework
<img width="1207" height="274" alt="Screenshot 2026-01-23 at 17 29 24" src="https://github.com/user-attachments/assets/fe91d73b-ec09-4b4d-a669-1286fe43382a" />

## Tutorials

- **Wheeled ROS2 Robot:** Basic setup and navigation in ROS2, building on wheeled robot demos. Covers URDF, sensor integration, and navigation stacks.
- **Robotic Arm:** Introduction to arm control, kinematics, and basic movements. Includes trajectory planning and simple controllers.
- **Simulated Robotic Arm (Gazebo):** Setting up arm simulation in Gazebo, integrating with the ROS2 stack and testing control loops.
- **Simulated Arm with Manual Training & Imitation:** Record teleoperation demonstrations, train policies (imitation learning / RL), and reproduce on a second arm.
- **Arm on Wheeled Robot:** Integrate arm manipulation with wheeled mobility to perform combined tasks (pick-and-place while moving).

These tutorials map to example workflows for scene reconstruction, simulation, model profiling for NPUs, and ROS-based deployment pipelines. If you want, I can scaffold one tutorial with example URDF, launch files, and a Gazebo scene.

## What can claude do?? Well it can configure your project from 99.6 to 100% accuracy on the first try!!

Use it to configure your blocks and review your config, e.g.

<img width="1802" height="326" alt="image" src="https://github.com/user-attachments/assets/4c57622d-44f3-43a7-a80a-b3c1bbe0cf17" />
<img width="3984" height="2070" alt="image" src="https://github.com/user-attachments/assets/85622e5d-13f4-4d4a-a447-e048aef353ac" />
<img width="3984" height="2070" alt="image" src="https://github.com/user-attachments/assets/098071bd-904f-4af2-ab34-72513066c659" />
<img width="3984" height="2070" alt="image" src="https://github.com/user-attachments/assets/e9c80bdf-1215-4684-8e1a-bbbdcf31457e" />


## BC
<img width="1118" height="2080" alt="image" src="https://github.com/user-attachments/assets/9da7bf78-cd12-4fb9-968b-0136f21af2b2" />


## AC
<img width="1118" height="1942" alt="image" src="https://github.com/user-attachments/assets/135adfba-0814-4b9e-a8bf-16f785baab9b" />



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

**2. .env file with `dotenv-cli` (Most Secure):**
Install dotenv-cli:
```sh
npm install -g dotenv-cli
```
Copy the example file and fill in your keys:
```sh
cp .env.example .env
```
Edit `.env` with your actual API keys:
```
ANTHROPIC_API_KEY=your_anthropic_api_key_here
EI_API_KEY=your_edge_impulse_api_key_here
```
Run commands with:
```sh
dotenv -e .env -- npm run cli -- get-all-projects --api-key $EI_API_KEY
```

> **🔒 Security:** `.env` files are automatically ignored by git and never committed to version control.

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

## Docker Image & Tests

**Build image**

```bash
docker build -t ei-agentic-claude:latest .
```

**Run (interactive, sandboxed)**

```bash
# Interactive (stdio transport)
docker run --rm -it --name ei-mcp ei-agentic-claude:latest

# Detached, no network, limited resources
docker run --rm -d --name ei-mcp --network none --cpus=0.5 --memory=512m ei-agentic-claude:latest
```

**Automated container test**

This repository includes a small test script that builds the image, runs it, and waits for the MCP server startup message. It verifies the container can start in the sandboxed runtime used by the project.

- Script: `scripts/docker-test.sh`
- NPM script: `npm run docker:test`

Run the test:

```bash
npm run docker:test
```

Notes:
- The test looks for the log line `Edge Impulse MCP server running on stdio` to determine success.
- The container is not mounted to host paths; do not pass host volumes to keep runtime sandboxed.
- If you need the container to run as a specific UID/GID (for mounted volumes), update the Dockerfile to accept build args and chown accordingly.

Note: If you want the container to call external LLM APIs (Anthropic/Claude), run it with network enabled and supply `ANTHROPIC_API_KEY`:

```bash
# Example: run with bridge network and pass Anthropic key from env
docker run --rm -d --name ei-mcp --network bridge \
  -e ANTHROPIC_API_KEY=$ANTHROPIC_API_KEY \
  -v $(pwd)/.env.test:/app/.env.test:ro \
  ei-agentic-claude:latest
```

Running with `--network none` will prevent outbound requests to LLM services; for secure environments prefer an isolated bridge and limit container capabilities.

If you prefer mounting your env file to a different path, the container entrypoint will load `/app/.env.test` first, then `/app/.env`. Environment variables defined there (for example `ANTHROPIC_API_KEY`, `EI_API_KEY`, and project IDs) will be exported into the process environment before the MCP server starts.

## Iterative Prompt Testing

This project includes tools to generate and iterate on prompts targeted to optimize impulse/block configuration.

- Generate per-goal prompts (already implemented by `scripts/generate-prompts.js`) and run them with `npm run prompt:test`.
- Per-goal prompt files are written to `/tmp/prompts-<projectId>-<goal>.json`. Each file includes an `apply_cli` suggestion showing a CLI command you can run to test or apply recommended changes.
- Workflow:
  1. Run `npm run project:test` to fetch project JSONs into `/tmp` (requires `EI_API_KEY` in `.env.test`).
  2. Run `npm run prompt:test` to generate prompt files.
  3. Inspect `/tmp/prompts-<projectId>-<goal>.json`, refine prompts, and optionally run the `apply_cli` commands (adjust placeholders like `<learnId>`/`<versionId>`).

If you want automated calls to Anthropic, add `ANTHROPIC_API_KEY` to `.env.test` and I can extend the runner to call the LLM and store responses.

## Project Tests (local, secure)

Create a local `.env.test` file containing your Edge Impulse API key and project IDs. This repository already includes a `./.env.test` for convenience (it is ignored by git). Do NOT commit credentials to source control.

Run per-project connectivity tests:

```bash
# Ensure dependencies are installed
npm install

# Run the project tests (sources .env.test, runs 'get-project' for each project)
npm run project:test
```

Outputs are saved to `/tmp/run-project-output.json` for inspection. Errors are printed to `/tmp/run-project-err.log`.



**Tip:** You can add a test script to list all available commands:
```json
"scripts": {
  ...,
  "cli-list": "npm run cli -- --help"
}
```

# Claude Code Integration (MCP)

This project provides a Model Context Protocol (MCP) server that enables Claude Code to interact with Edge Impulse APIs.

## Current Status: Working

The integration is complete and tested. Claude Code can access Edge Impulse APIs through natural language.

## Setup (Already Complete)

### MCP Server Added
```bash
claude mcp add edge-impulse -- node dist/mcp-server.js
claude mcp list  # Shows: edge-impulse: node dist/mcp-server.js - ✓ Connected
```

### API Keys Configured
Create a `.env` file from the example:
```bash
cp .env.example .env
# Edit .env with your actual API keys
```

The setup script will automatically load keys from `.env` if present.

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

### Project Management
- List, create, and manage Edge Impulse projects
- Configure project settings and metadata
- Handle team collaboration and permissions

### Data Operations
- Upload datasets (time series, images, audio, sensors)
- Organize data into training/testing sets
- Label and annotate data
- Import from cloud storage

### Model Development
- Design impulses (DSP + ML blocks)
- Configure DSP for feature extraction
- Train ML models (Keras, transfer learning)
- Run anomaly detection
- Profile and optimize models

### Deployment
- Build optimized models for edge devices
- Generate firmware and libraries
- Create deployment packages
- Download trained models

### Testing & Evaluation
- Test models on validation data
- Generate performance metrics
- Analyze confusion matrices
- Debug feature extraction

## Sample Questions

Here are examples of questions you can ask Claude:

**Getting Started:**
- "Show me all my Edge Impulse projects"
- "Create a new project called 'Sensor Classification'"
- "What projects do I have access to?"

**Data Management:**
- "Upload data to project 123 from my local files"
- "How much training data do I have in project 456?"
- "Split my dataset into training and testing sets"

**Model Training:**
- "Train a Keras model on project 123"
- "Start training with learn block 456"
- "Configure training parameters for better accuracy"

**Job Monitoring:**
- "Check the status of training job 789"
- "Is my model training complete?"
- "What are the results of my latest training run?"

**Model Evaluation:**
- "Test my trained model on validation data"
- "Show me the confusion matrix for my model"
- "What is the accuracy of my trained model?"

**Deployment:**
- "Build my model for deployment to edge devices"
- "Download the trained model files"
- "Create a deployment package for my project"

**Optimization:**
- "Optimize my Keras model for better performance"
- "Profile my model to see memory usage"
- "Run model optimization on project 123"

## MCP Server Features

- 365 APIs Available: All Edge Impulse endpoints accessible through Claude
- Automatic Parameter Validation: Claude handles required vs optional parameters
- Error Handling: Clear error messages for API failures
- JSON Responses: Structured data returned from all API calls
- No CLI Knowledge Required: Use natural language instead of command syntax

## API Key Management

Set your Edge Impulse API key as an environment variable:

```bash
export EI_API_KEY=ei_your_api_key_here
```

Claude will automatically use this key for all API calls through the MCP server.

## Troubleshooting MCP

- Server won't start: Ensure you've run `npm run build` and the `dist/` folder exists
- Claude can't find tools: Restart Claude Desktop after configuration changes
- API errors: Check your API key and network connectivity
- Permission issues: Ensure Claude Desktop has access to the project directory

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
