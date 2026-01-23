import { find_syntiant_posterior_parameters } from '../find_syntiant_posterior_parameters.js';
export function addFind_syntiant_posterior_parametersCommand(program) {
    program.command('find-syntiant-posterior-parameters')
        .description('Auto-generated command for find_syntiant_posterior_parameters')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await find_syntiant_posterior_parameters(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
