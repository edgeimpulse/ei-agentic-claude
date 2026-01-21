import { get_results_from_dsp_autotuner } from '../get_results_from_dsp_autotuner.ts';
export function addGet_results_from_dsp_autotunerCommand(program) {
    program.command('get-results-from-dsp-autotuner')
        .description('Auto-generated command for get_results_from_dsp_autotuner')
        .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_results_from_dsp_autotuner(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
