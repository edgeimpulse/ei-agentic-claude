import { add_transfer_learning_block } from '../add_transfer_learning_block.js';
export function addAdd_transfer_learning_blockCommand(program) {
    program.command('add-transfer-learning-block')
        .description('Auto-generated command for add_transfer_learning_block')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await add_transfer_learning_block(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'add-transfer-learning-block' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
