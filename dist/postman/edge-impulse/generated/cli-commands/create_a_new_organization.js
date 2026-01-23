import { create_a_new_organization } from '../create_a_new_organization.js';
export function addCreate_a_new_organizationCommand(program) {
    program.command('create-a-new-organization')
        .description('Auto-generated command for create_a_new_organization')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await create_a_new_organization(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'create-a-new-organization' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
