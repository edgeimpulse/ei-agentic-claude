import { retrieves_dsp_block_parameters } from '../retrieves_dsp_block_parameters.js';
export function addRetrieves_dsp_block_parametersCommand(program) {
    program.command('retrieves-dsp-block-parameters')
        .description('Auto-generated command for retrieves_dsp_block_parameters')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await retrieves_dsp_block_parameters(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'retrieves-dsp-block-parameters' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
