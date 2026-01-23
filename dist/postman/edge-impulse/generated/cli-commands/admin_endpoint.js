import { admin_endpoint } from '../admin_endpoint.js';
export function addAdmin_endpointCommand(program) {
    program.command('admin-endpoint')
        .description('Auto-generated command for admin_endpoint')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await admin_endpoint(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'admin-endpoint' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
