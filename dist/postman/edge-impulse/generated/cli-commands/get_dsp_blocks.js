import { get_dsp_blocks } from '../get_dsp_blocks';
export function addGet_dsp_blocksCommand(program) {
    program.command('get-dsp-blocks')
        .description('Auto-generated command for get_dsp_blocks')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_dsp_blocks(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
