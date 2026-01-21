import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";
export function registerGeneratedCommands(program) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const commandsDir = path.join(__dirname, "postman/edge-impulse/generated/cli-commands");
    const files = fs.readdirSync(commandsDir).filter(f => f.endsWith(".js"));
    const require = createRequire(import.meta.url);
    for (const file of files) {
        const mod = require(path.join(commandsDir, file));
        // Find the exported function (should be the only export)
        const fn = Object.values(mod).find(v => typeof v === "function");
        if (fn)
            fn(program);
    }
}
