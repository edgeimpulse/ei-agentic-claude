import { get_all_user_ids } from '../get_all_user_ids';
export function addGet_all_user_idsCommand(program) {
    program.command('get-all-user-ids')
        .description('Auto-generated command for get_all_user_ids')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_all_user_ids(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
