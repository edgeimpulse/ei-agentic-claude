import { update_dataset } from '../update_dataset.js';
export function addUpdate_datasetCommand(program) {
    program.command('update-dataset')
        .description('Auto-generated command for update_dataset')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await update_dataset(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'update-dataset' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
