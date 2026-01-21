#!/usr/bin/env node
import { Command } from "commander";
import { listProjects } from "./postman/edge-impulse/projects/list-projects/client.ts";
import { uploadData } from "./postman/edge-impulse/projects/upload-data/client.ts";
import { startTraining } from "./postman/edge-impulse/training/start-training/client.ts";
import type { UploadDataRequest, StartTrainingRequest } from "./postman/edge-impulse/shared/types.ts";

const program = new Command();

program
  .command("list-projects")
  .description("List all Edge Impulse projects")
  .requiredOption("--apiKey <apiKey>", "Edge Impulse API key")
  .action(async (opts) => {
    try {
      const res = await listProjects(opts.apiKey);
      console.log(JSON.stringify(res, null, 2));
    } catch (e) {
      console.error(e);
      process.exit(1);
    }
  });

program
  .command("upload-data")
  .description("Upload data to a project")
  .requiredOption("--apiKey <apiKey>", "Edge Impulse API key")
  .requiredOption("--projectId <projectId>", "Project ID")
  .requiredOption("--file <file>", "Path to data file")
  .option("--label <label>", "Label for data")
  .action(async (opts) => {
    const fs = await import("fs/promises");
    try {
      const data = await fs.readFile(opts.file);
      const req: UploadDataRequest = {
        projectId: opts.projectId,
        data,
        label: opts.label,
      };
      const res = await uploadData(opts.apiKey, req);
      console.log(JSON.stringify(res, null, 2));
    } catch (e) {
      console.error(e);
      process.exit(1);
    }
  });

program
  .command("start-training")
  .description("Start model training for a project")
  .requiredOption("--apiKey <apiKey>", "Edge Impulse API key")
  .requiredOption("--projectId <projectId>", "Project ID")
  .requiredOption("--learnId <learnId>", "Learn ID (model block ID)")
  .option("--mode <mode>", "Training mode: visual or expert", "visual")
  .option("--param <keyValue...>", "Additional training parameters as key=value pairs")
  .action(async (opts) => {
    try {
      // Parse additional parameters
      let extraParams = {};
      if (opts.param) {
        for (const pair of opts.param) {
          const [key, value] = pair.split("=");
          // Try to parse numbers and booleans
          let parsed: any = value;
          if (value === "true" || value === "false") parsed = value === "true";
          else if (!isNaN(Number(value))) parsed = Number(value);
          extraParams[key] = parsed;
        }
      }
      const req: StartTrainingRequest = {
        projectId: opts.projectId,
        learnId: opts.learnId,
        mode: opts.mode,
        ...extraParams
      };
      const res = await startTraining(opts.apiKey, req);
      console.log(JSON.stringify(res, null, 2));
    } catch (e) {
      console.error(e);
      process.exit(1);
    }
  });

program.parseAsync(process.argv);
