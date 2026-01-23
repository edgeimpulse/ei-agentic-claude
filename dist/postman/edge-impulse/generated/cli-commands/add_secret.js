import { add_secret } from '../add_secret.js';
export function addAdd_secretCommand(program) {
    program.command('add-secret')
        .description('Auto-generated command for add_secret')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await add_secret(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'add-secret' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
