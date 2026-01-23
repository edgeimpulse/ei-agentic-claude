import { get_development_keys } from '../get_development_keys.js';
export function addGet_development_keysCommand(program) {
    program.command('get-development-keys')
        .description('Auto-generated command for get_development_keys')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_development_keys(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'get-development-keys' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
