
# Edge Impulse Claude Code MCP Integration

[![CI](https://github.com/edgeimpulse/ei-agentic-claude/actions/workflows/ci.yml/badge.svg)](https://github.com/edgeimpulse/ei-agentic-claude/actions/workflows/ci.yml)
[![Publish](https://github.com/edgeimpulse/ei-agentic-claude/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/edgeimpulse/ei-agentic-claude/actions/workflows/npm-publish.yml)
[![npm](https://img.shields.io/npm/v/ei-agentic-claude.svg)](https://www.npmjs.com/package/ei-agentic-claude)
[![npm downloads](https://img.shields.io/npm/dm/ei-agentic-claude.svg)](https://www.npmjs.com/package/ei-agentic-claude)

A Model Context Protocol (MCP) server and CLI that lets Claude Code call the Edge Impulse APIs. Installable from npm and pluggable as a Claude skill.

> ⚠️ **Proof of Concept / Experimental — Use at Your Own Risk**
>
> This repository is a **proof-of-concept (PoC)** integration using **Model Context Protocol (MCP)** and agent-driven automation. It is **not a production-ready tool** and may be **incomplete, unstable, or incorrect** in places.
>
> **What this means:**
> - **Not fully tested:** flows, commands, and generated changes may fail or behave unexpectedly.
> - **No guarantees:** outputs produced by agents/LLMs can be wrong, unsafe, or destructive.
> - **Review before applying:** treat all suggested config/code changes as *untrusted* until you manually verify them.
>
> **Safety guidance:**
> - Use only on **non-production** projects/environments.
> - Prefer **read-only** operations first (list/inspect) before any write/update actions.
> - Keep API keys private (use `.env`, never commit secrets).
> - If you enable “apply” style workflows, run them in **dry-run** mode and require explicit human approval.
>
> By using this software, you accept that you are responsible for validating actions and outcomes.


- npm package: https://www.npmjs.com/package/ei-agentic-claude
- Install (CLI + MCP): `npm install -g ei-agentic-claude`
- CLI entrypoint: `edge-impulse-cli --help`
- MCP entrypoint: `edge-impulse-mcp --help`
- Claude skill: `claude mcp add edge-impulse -- edge-impulse-mcp`
- Status badges: CI = tests/build, Publish = npm release workflow

## Example of usage

### CLI Usage
<img width="1111" height="571" alt="Screenshot 2026-01-23 at 16 54 01" src="https://github.com/user-attachments/assets/3fd11801-2948-48ad-b71f-f5117eb9a7f7" />

### Calling API on Block
<img width="1600" height="109" alt="blur3" src="https://github.com/user-attachments/assets/8256f310-3861-4b94-8d7a-47d9fe3426dc" />

### Job Status
<img width="1600" height="101" alt="blur2" src="https://github.com/user-attachments/assets/48be3ed8-c0ca-4450-aa09-b4626cb03bb8" />


### Testing Framework
<img width="1207" height="274" alt="Screenshot 2026-01-23 at 17 29 24" src="https://github.com/user-attachments/assets/fe91d73b-ec09-4b4d-a669-1286fe43382a" />

#### Block configuration example

Use it to configure your blocks and review your config, e.g.

#### Ask for optimization to a project aiming for 100% accuracy

<img width="1600" height="289" alt="blur1" src="https://github.com/user-attachments/assets/68f8e293-7f0f-4e3d-832a-251706ba4cb8" />


#### An example of the config changes made 
<img width="800" height="274" alt="dspconfig" src="https://github.com/user-attachments/assets/1fb7e1f1-bcb8-4771-912e-2228ff342a83" />

#### Performance improvement on a simple time series motion project was impressive
<img width="1198" height="769" alt="improvementspercent" src="https://github.com/user-attachments/assets/b0e37891-24e6-4e0a-a143-bc10fdbad716" />




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

## Install from npm + Claude skill
- npm install: `npm install -g ei-agentic-claude`
- CLI entrypoint: `edge-impulse-cli --help`
- MCP server entrypoint: `edge-impulse-mcp --help`
- Add as Claude skill: `claude mcp add edge-impulse -- edge-impulse-mcp`
- Verify: `claude mcp list`

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

4. **(Optional) Fetch evaluation metrics:**
You (or Claude) can configure any Keras block parameter at training time using the CLI's `--param` option. Example:
```sh
npm run cli -- start-training --api-key <your_api_key> --projectId <projectId> --learnId <learnId> \
# Edge Impulse Claude Code MCP Integration

MCP server and CLI for Edge Impulse APIs, with Docker image, prompt-generation tooling, and CI smoke tests. Claude (or other agents) can call the APIs via stdio MCP or the generated CLI.

## Highlights
- MCP server (stdio) and universal CLI launcher (`node launch-cli.mjs ...`).
- Generated CLI commands for all Edge Impulse endpoints (`src/postman/edge-impulse/generated/cli-commands`).
- Dockerized runtime with healthcheck and non-root user.
- Tests: Vitest unit suite, Docker smoke, project connectivity, prompt/LLM simulation, apply-flow dry run.
- Sample env files: `.env.example` and `.env.test.sample` (redacted) — actual secrets stay local.

## Screenshots (orientation)
- CLI help and commands: ![CLI usage](https://github.com/user-attachments/assets/3fd11801-2948-48ad-b71f-f5117eb9a7f7)
- Invoke API block: ![Call block](https://github.com/user-attachments/assets/8821b5da-021f-4fd3-a27d-0ee020ab5960)
- Job status output: ![Job status](https://github.com/user-attachments/assets/3adb2bd6-da51-4c0e-8f16-a61765c32af1)

## Prerequisites
- Node 20+
- npm 9+
- Docker (for container build/test)
- Edge Impulse API key (set in `.env` or exported)

## Setup
```bash
git clone https://github.com/edgeimpulse/ei-agentic-claude.git
cd ei-agentic-claude
npm install
npm run build

# create envs (keep private)
cp .env.example .env
cp .env.test.sample .env.test  # for local tests
```

## Running
- **CLI (auto-detects ts vs dist)**
  ```bash
  node launch-cli.mjs get-all-projects --api-key $EI_API_KEY
  node launch-cli.mjs wait-job --help
  ```
- **MCP server (stdio)**: `node dist/mcp-server.js`
- **Claude hookup**: `claude mcp add edge-impulse -- node dist/mcp-server.js`

## Docker
- Build: `docker build -t ei-agentic-claude:latest .`
- Run (stdio, env mounted):
  ```bash
  docker run --rm -it --name ei-mcp \
    -v "$PWD/.env.test:/app/.env.test:ro" \
    ei-agentic-claude:latest
  ```
- Smoke test: `npm run docker:test` (waits for readiness line `Edge Impulse MCP server running on stdio`).

## Tests (no live LLM calls)
- Unit: `npm test` (builds first via pretest).
- Docker smoke: `npm run docker:test`.
- Project connectivity (needs `.env.test` with EI_API_KEY and project IDs): `npm run project:test`.
- Prompt generation + simulated LLM/apply flow: `npm run test:apply-flow` (writes prompts to /tmp, simulated responses + dry-run apply scripts to outputs/).

## Prompt & apply tooling
- Generate prompts per project/goal: `npm run prompt:test` (uses `/tmp/project-*.json` from project:test).
- Simulate LLM responses and dry-run apply scripts: `npm run test:apply-flow`.
- Optional real LLM: add `ANTHROPIC_API_KEY` to `.env.test` and use `npm run llm:run` (not part of CI).

## Security & integrity
- Secrets stay in `.env` / `.env.test` (git-ignored). Example placeholders only.
- Generated client integrity hashes live in `src/postman/edge-impulse/integrity.json`; validate with `npm run generate-integrity` after regeneration.
- Container runs as non-root; healthcheck ensures `dist/mcp-server.js` is alive.

## Troubleshooting
- CLI shows no commands: run `npm run build` (pretest does this), then `node launch-cli.mjs --help`.
- Docker test hangs: check for readiness line; ensure `.env.test` is mounted if you need API keys.
- Prompt tests return HTML: indicates auth/endpoint issue; runners fall back to placeholder JSON so prompts still generate.

## CI
GitHub Actions (`.github/workflows/ci.yml`) runs `npm ci`, `npm test`, and `npm run docker:test` on push/PR.

## Development tips
- Generated commands reside under `src/postman/edge-impulse/generated/cli-commands`; names map underscore → dash (e.g., `wait_job.ts` → `wait-job`).
- Universal launcher prefers ts-node when sources present; otherwise uses `dist`.
- Keep `outputs/` and `config/projects.json` out of git (ignored).
Create a local `.env.test` file containing your Edge Impulse API key and project IDs. This repository already includes a `./.env.test` for convenience (it is ignored by git). Do NOT commit credentials to source control.
