#!/usr/bin/env node
import { Command } from "commander";
const program = new Command();
program.allowUnknownOption(true);
// Dynamically import the register module so compiled (.js) and source (.ts) can both work.
(async () => {
    const isTsNode = process.argv[1] && process.argv[1].endsWith('.ts');
    const registerPath = isTsNode ? './register-generated-commands.ts' : './register-generated-commands.js';
    const mod = await import(registerPath);
    await mod.registerGeneratedCommands(program);
    await program.parseAsync(process.argv);
})();
