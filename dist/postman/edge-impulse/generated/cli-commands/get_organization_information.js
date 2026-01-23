import { get_organization_information } from '../get_organization_information.js';
export function addGet_organization_informationCommand(program) {
    program.command('get-organization-information')
        .description('Auto-generated command for get_organization_information')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_organization_information(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'get-organization-information' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
