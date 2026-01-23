import { get_all_user_ids_active_last_30_days } from '../get_all_user_ids_active_last_30_days';
export function addGet_all_user_ids_active_last_30_daysCommand(program) {
    program.command('get-all-user-ids-active-last-30-days')
        .description('Auto-generated command for get_all_user_ids_active_last_30_days')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_all_user_ids_active_last_30_days(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
