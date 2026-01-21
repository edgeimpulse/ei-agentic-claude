## Proven Example: Train a Keras Block

You can train a Keras (neural network) block in Edge Impulse directly from the CLI. Here is a real test:

```sh
npm run cli -- start-training --apiKey <your_api_key> --projectId <projectId> --learnId <learnId> --mode visual --param trainingCycles=30 learningRate=0.01
```

**Example output:**
```json
{
   "success": true,
   "id": 42994168
}
```

This proves you can trigger model training for a Keras block via Claude and the CLI.
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
