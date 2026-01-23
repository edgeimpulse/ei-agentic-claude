import { anomaly_settings } from '../anomaly_settings';
export function addAnomaly_settingsCommand(program) {
    program.command('anomaly-settings')
        .description('Auto-generated command for anomaly_settings')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await anomaly_settings(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
