import { get_config } from '../get_config.js';
export function addGet_configCommand(program) {
    program.command('get-config')
        .description('Auto-generated command for get_config')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_config(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'get-config' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
