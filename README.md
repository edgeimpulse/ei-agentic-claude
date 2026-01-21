# Storing Your API Key for Easier CLI Usage

You can avoid typing your API key every time by using one of these methods:

**1. Environment variable (recommended):**
Add this to your shell profile (e.g., `~/.zshrc` or `~/.bashrc`):
```sh
export EI_API_KEY=ei_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```
Then run commands like:
```sh
npm run cli -- get-all-projects --apiKey $EI_API_KEY
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
dotenv -e .env -- npm run cli -- get-all-projects --apiKey $EI_API_KEY
```

**3. Shell alias:**
Add to your shell profile:
```sh
alias eicli='npm run cli -- --apiKey $EI_API_KEY'
```
Then run:
```sh
eicli get-all-projects
```

**Want built-in support for config files or env vars?**
Let us know or contribute a PR!
# Auto-Generated CLI Commands

All Edge Impulse API endpoints are now available as CLI commands. Each command is auto-generated from the Postman collection and follows this pattern:

```
npm run cli -- <command-name> --apiKey <your_api_key> [--params '{"param1":"value1",...}']
```

## Command List (Partial)

Below are some example commands. For the full list, see `src/postman/edge-impulse/generated/cli-commands/`.

### NOTE: These are stubs and parameters may vary per endpoint, and will need to be matched to the API docs https://www.postman.com/edge-impulse/edge-impulse/overview.


| Command Name                | Description (auto-generated)                |
|----------------------------|---------------------------------------------|
| add-api-key                | Add an API key                              |
| get-all-projects           | Get all projects                            |
| list-active-projects       | List all active projects                    |
| list-samples               | List all samples                            |
| get-user                   | Get user info                               |
| upload-photo               | Upload a photo                              |
| train-model-keras          | Train a Keras model                         |
| get-job-status             | Get job status                              |
| ...                        | ... (hundreds more see src/postman/edge-impulse/generated/cli-commands/ )                         |

Each command matches a file in `src/postman/edge-impulse/generated/cli-commands/` (replace underscores with dashes for CLI usage).

## Usage Example

```
npm run cli -- get-all-projects --apiKey <your_api_key>
npm run cli -- add-api-key --apiKey <your_api_key> --params '{"projectId":123,"name":"test"}'
npm run cli -- train-model-keras --apiKey <your_api_key> --params '{"projectId":123,"learnId":456,"trainingCycles":10}'
```

**Tip:** Use `--params` with a JSON string for any endpoint parameters. All endpoints require `--apiKey`.

For advanced usage, see the generated files or the Edge Impulse API documentation.
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
  npm run cli -- list-projects --apiKey <your_api_key>
  npm run cli -- start-training --apiKey <your_api_key> --projectId <projectId> --learnId <learnId>
  npm run cli -- job-status --apiKey <your_api_key> --projectId <projectId> --jobId <jobId>
  npm run cli -- evaluate-block --apiKey <your_api_key> --projectId <projectId> --learnId <learnId>
  ```

## Agentic Workflow Example
1. **List projects:**
  ```sh
  npm run cli -- list-projects --apiKey <your_api_key>
  ```
2. **Start training:**
  ```sh
  npm run cli -- start-training --apiKey <your_api_key> --projectId <projectId> --learnId <learnId>
  ```
3. **Check job status:**
  ```sh
  npm run cli -- job-status --apiKey <your_api_key> --projectId <projectId> --jobId <jobId>
  ```
4. **(Optional) Fetch evaluation metrics:**
  ```sh
  npm run cli -- evaluate-block --apiKey <your_api_key> --projectId <projectId> --learnId <learnId>
  ```

## Advanced: Configure Keras Block Parameters
You (or Claude) can configure any Keras block parameter at training time using the CLI's `--param` option. Example:
```sh
npm run cli -- start-training --apiKey <your_api_key> --projectId <projectId> --learnId <learnId> \
  --mode visual \
  --param trainingCycles=50 learningRate=0.005 batchSize=64 autoClassWeights=true selectedModelType=int8
```
See the [Edge Impulse API docs](https://docs.edgeimpulse.com/apis/studio/jobs/train-model-keras) for a full list.

## Notes & Troubleshooting
- If you get a 404 on job status or evaluation, wait a few seconds and retry.
- Confirm your learnId is valid by checking the Edge Impulse dashboard.
- All training and evaluation results are always available in the dashboard, even if not exposed via API.
- Evaluation metrics may not be available via public API for all blocks.

# Edge Impulse Claude Agentic Example


This project is a minimal Claude agentic example for Edge Impulse. It features a TypeScript CLI that lists projects and starts model training using generated API clients from the Edge Impulse Postman collection.


## Features
- List Edge Impulse projects
- Start model training
- Typed API clients, error handling


## Quick Start

1. **Connect your Claude agent to the Postman MCP server:**

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

4. **Run the CLI:**

```sh
npm run cli -- list-projects
npm run cli -- start-training --projectId <id>
```

## How it works

1. The agent fetches the Edge Impulse API collection from Postman
2. Generates typed API clients and CLI commands
3. Handles authentication and errors automatically


## Advanced: Configure Keras Block Parameters

The user (or Claude) can configure any Keras block parameter at training time using the CLI's `--param` option. Common parameters include:

- `trainingCycles`: Number of training cycles (epochs)
- `learningRate`: Learning rate for optimizer
- `batchSize`: Batch size for training
- `trainTestSplit`: Train/test split ratio (0-1)
- `autoClassWeights`: Automatically balance class weights (true/false)
- `selectedModelType`: Model type (`int8`, `float32`, `akida`)
- `profileInt8`: Profile int8 model (true/false)
- `augmentationPolicyImage`: Data augmentation policy for images (`none`, `all`)
- `customParameters`: Custom training parameters (as JSON string)

See the [Edge Impulse API docs](https://docs.edgeimpulse.com/apis/studio/jobs/train-model-keras) for a full list.

**Example: Advanced configuration**
```sh
npm run cli -- start-training --apiKey <your_api_key> --projectId <projectId> --learnId <learnId> \
  --mode visual \
  --param trainingCycles=50 learningRate=0.005 batchSize=64 autoClassWeights=true selectedModelType=int8
```

Claude can generate or modify these commands to set any supported parameter for your Keras block.
## Proven Example: Train a Keras Block

You can train a Keras (neural network) block in Edge Impulse directly from the CLI. Here is a real test:

```sh
npm run cli -- start-training --apiKey <your_api_key> --projectId <projectId> --learnId <learnId> --mode visual --param trainingCycles=30 learningRate=0.01
```

**Example output:**
```json
{
   "success": true,
   "id": XYZ123,
   "status": "queued"
}
```