#!/usr/bin/env node





import { Command } from "commander";
import { registerGeneratedCommands } from "./register-generated-commands";


const program = new Command();
registerGeneratedCommands(program);
program.parseAsync(process.argv);
