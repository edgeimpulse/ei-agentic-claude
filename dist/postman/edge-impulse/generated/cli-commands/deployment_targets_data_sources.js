import { deployment_targets_data_sources } from '../deployment_targets_data_sources.js';
export function addDeployment_targets_data_sourcesCommand(program) {
    program.command('deployment-targets-data-sources')
        .description('Auto-generated command for deployment_targets_data_sources')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await deployment_targets_data_sources(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
