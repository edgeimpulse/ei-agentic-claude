import { update_transfer_learning_block } from '../update_transfer_learning_block.js';
export function addUpdate_transfer_learning_blockCommand(program) {
    program.command('update-transfer-learning-block')
        .description('Auto-generated command for update_transfer_learning_block')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await update_transfer_learning_block(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
