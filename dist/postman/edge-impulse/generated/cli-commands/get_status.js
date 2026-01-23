import { get_status } from '../get_status.js';
export function addGet_statusCommand(program) {
    program.command('get-status')
        .description('Auto-generated command for get_status')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_status(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'get-status' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
