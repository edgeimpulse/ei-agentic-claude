import { set_syntiant_posterior_parameters } from '../set_syntiant_posterior_parameters.ts';
export function addSet_syntiant_posterior_parametersCommand(program) {
    program.command('set-syntiant-posterior-parameters')
        .description('Auto-generated command for set_syntiant_posterior_parameters')
        .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await set_syntiant_posterior_parameters(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
