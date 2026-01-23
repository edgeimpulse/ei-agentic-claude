#!/usr/bin/env node
import { Command } from "commander";
const program = new Command();
async function main() {
    // Try .ts first (ts-node), then .js (Node.js after build)
    let registerGeneratedCommands;
    try {
        ({ registerGeneratedCommands } = await import("./register-generated-commands.ts"));
    }
    catch (e) {
        ({ registerGeneratedCommands } = await import("./register-generated-commands.js"));
    }
    registerGeneratedCommands(program);
    await program.parseAsync(process.argv);
}
main();
