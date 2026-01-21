import { get_impulse_blocks } from '../get_impulse_blocks.ts';
export function addGet_impulse_blocksCommand(program) {
    program.command('get-impulse-blocks')
        .description('Auto-generated command for get_impulse_blocks')
        .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_impulse_blocks(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
