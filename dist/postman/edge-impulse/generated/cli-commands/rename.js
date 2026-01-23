import { rename } from '../rename.js';
export function addRenameCommand(program) {
    program.command('rename')
        .description('Auto-generated command for rename')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await rename(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'rename' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
