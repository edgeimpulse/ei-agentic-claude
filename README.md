# Edge Impulse Claude Agentic Example

This project demonstrates how a Claude agent can integrate with the Edge Impulse API using Postman collections and the MCP server, similar to the Notion API example. It features a TypeScript CLI that interacts with Edge Impulse endpoints, with generated API clients and clear documentation.

## Features
- Search and list Edge Impulse projects
- Upload data to a project
- Start model training
- Typed API clients generated from the Edge Impulse Postman collection
- Error handling and documentation

## Quick Start

1. **Connect your Claude agent to the Postman MCP server:**

```sh
claude mcp add --transport http postman https://mcp.postman.com/code \
  --header "Authorization: Bearer YOUR_POSTMAN_API_KEY"
```

<img width="1082" height="23" alt="image" src="https://github.com/user-attachments/assets/360f2bb6-0634-4621-be38-1e08b995bafa" />


Confirm created with:
<img width="1082" height="24" alt="image" src="https://github.com/user-attachments/assets/38604722-f9b2-4256-a382-c4ccbbda8a3d" />


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

When you ask a Claude agent to integrate the Edge Impulse API, it follows this workflow:

1. **Search Postman for the Edge Impulse API collection**
2. **Load collection details, request/response definitions, and environment variables**
3. **Generate typed API clients and CLI commands**
4. **Handle authentication and errors based on the collection**

### Example agent workflow

> Build a CLI that lists my Edge Impulse projects and starts a training job using the Edge Impulse API collection.

▶ searchPostmanElements — Finding Edge Impulse API on Postman...
▶ getCodeGenerationInstructions — Loading generation guidelines...
▶ getCollection — Loading collection details...
▶ getCollectionFolder — Reading folder documentation...
▶ getCollectionRequest — Fetching request definitions...
▶ getCollectionResponse — Loading response examples...
▶ getEnvironments — Finding available environments...
▶ getEnvironment — Loading environment variables...
Great, I now have all the context I need from the Postman collection and environments. Generating the code now.
▶ Generating — Creating API clients and application code...
Done! I found the official Edge Impulse API collection and generated clients for the endpoints you need:
• src/postman/edge-impulse/projects/list-projects/client.ts
• src/postman/edge-impulse/projects/upload-data/client.ts
• src/postman/edge-impulse/training/start-training/client.ts
• src/postman/edge-impulse/shared/types.ts
I also created cli.ts with list-projects, upload-data, and start-training commands. Run npm run cli -- list-projects to list your projects.

---

This example mirrors the Notion API workflow, but for Edge Impulse. Explore the `src/postman/edge-impulse` folder for generated clients and see `src/cli.ts` for CLI usage.
