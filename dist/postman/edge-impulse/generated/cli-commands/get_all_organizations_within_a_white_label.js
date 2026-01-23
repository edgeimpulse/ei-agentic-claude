import { get_all_organizations_within_a_white_label } from '../get_all_organizations_within_a_white_label';
export function addGet_all_organizations_within_a_white_labelCommand(program) {
    program.command('get-all-organizations-within-a-white-label')
        .description('Auto-generated command for get_all_organizations_within_a_white_label')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_all_organizations_within_a_white_label(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
