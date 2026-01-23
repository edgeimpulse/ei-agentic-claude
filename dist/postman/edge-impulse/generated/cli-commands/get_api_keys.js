import { get_api_keys } from '../get_api_keys.js';
export function addGet_api_keysCommand(program) {
    program.command('get-api-keys')
        .description('Auto-generated command for get_api_keys')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_api_keys(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'get-api-keys' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
