import { get_syntiant_posterior_parameters } from '../get_syntiant_posterior_parameters.js';
export function addGet_syntiant_posterior_parametersCommand(program) {
    program.command('get-syntiant-posterior-parameters')
        .description('Auto-generated command for get_syntiant_posterior_parameters')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_syntiant_posterior_parameters(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
