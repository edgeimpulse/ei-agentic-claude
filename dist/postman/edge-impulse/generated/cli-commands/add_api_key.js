import { add_api_key } from '../add_api_key.js';
export function addAdd_api_keyCommand(program) {
    program.command('add-api-key')
        .description('Auto-generated command for add_api_key')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await add_api_key(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'add-api-key' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
