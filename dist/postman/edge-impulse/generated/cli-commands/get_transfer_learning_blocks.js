import { get_transfer_learning_blocks } from '../get_transfer_learning_blocks.js';
export function addGet_transfer_learning_blocksCommand(program) {
    program.command('get-transfer-learning-blocks')
        .description('Auto-generated command for get_transfer_learning_blocks')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_transfer_learning_blocks(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'get-transfer-learning-blocks' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
