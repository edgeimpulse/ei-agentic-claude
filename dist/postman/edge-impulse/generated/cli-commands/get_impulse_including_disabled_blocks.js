import { get_impulse_including_disabled_blocks } from '../get_impulse_including_disabled_blocks';
export function addGet_impulse_including_disabled_blocksCommand(program) {
    program.command('get-impulse-including-disabled-blocks')
        .description('Auto-generated command for get_impulse_including_disabled_blocks')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_impulse_including_disabled_blocks(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
