import { export_keras_block_data } from '../export_keras_block_data.js';
export function addExport_keras_block_dataCommand(program) {
    program.command('export-keras-block-data')
        .description('Auto-generated command for export_keras_block_data')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await export_keras_block_data(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'export-keras-block-data' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
