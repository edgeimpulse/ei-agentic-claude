import { export_keras_block } from '../export_keras_block.js';
export function addExport_keras_blockCommand(program) {
    program.command('export-keras-block')
        .description('Auto-generated command for export_keras_block')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await export_keras_block(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
