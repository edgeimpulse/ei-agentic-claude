
# Edge Impulse Agentic CLI

This CLI was auto-generated from Edge Impulse's REST API configurations on Postman, designed for use by agents like Claude. It provides a interface to Edge Impulse APIs, but individual commands may require testing and extension.

## Table of Contents
- [Screenshots](#screenshots)
- [Development & Production Usage](#development--production-usage)
- [Storing Your API Key](#storing-your-api-key-for-easier-cli-usage)
- [Auto-Generated CLI Commands](#auto-generated-cli-commands-extensible-secondary-layer)
- [Examples](#examples)
- [Testing](#testing)

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
