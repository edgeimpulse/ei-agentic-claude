import { delete_impulse } from '../delete_impulse.js';
export function addDelete_impulseCommand(program) {
    program.command('delete-impulse')
        .description('Auto-generated command for delete_impulse')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await delete_impulse(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'delete-impulse' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
