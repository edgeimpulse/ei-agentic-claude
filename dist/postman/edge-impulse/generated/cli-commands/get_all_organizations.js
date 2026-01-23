import { get_all_organizations } from '../get_all_organizations.js';
export function addGet_all_organizationsCommand(program) {
    program.command('get-all-organizations')
        .description('Auto-generated command for get_all_organizations')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_all_organizations(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'get-all-organizations' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
