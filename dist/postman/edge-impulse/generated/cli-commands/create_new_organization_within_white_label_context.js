import { create_new_organization_within_white_label_context } from '../create_new_organization_within_white_label_context';
export function addCreate_new_organization_within_white_label_contextCommand(program) {
    program.command('create-new-organization-within-white-label-context')
        .description('Auto-generated command for create_new_organization_within_white_label_context')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await create_new_organization_within_white_label_context(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
