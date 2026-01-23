import { clear_dsp_block } from '../clear_dsp_block.js';
export function addClear_dsp_blockCommand(program) {
    program.command('clear-dsp-block')
        .description('Auto-generated command for clear_dsp_block')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await clear_dsp_block(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
