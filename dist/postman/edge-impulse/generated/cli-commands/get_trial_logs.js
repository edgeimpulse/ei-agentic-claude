import { get_trial_logs } from '../get_trial_logs.js';
export function addGet_trial_logsCommand(program) {
    program.command('get-trial-logs')
        .description('Auto-generated command for get_trial_logs')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_trial_logs(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'get-trial-logs' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
