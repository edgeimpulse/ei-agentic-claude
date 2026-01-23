import { rebalance_dataset } from '../rebalance_dataset.js';
export function addRebalance_datasetCommand(program) {
    program.command('rebalance-dataset')
        .description('Auto-generated command for rebalance_dataset')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await rebalance_dataset(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'rebalance-dataset' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
