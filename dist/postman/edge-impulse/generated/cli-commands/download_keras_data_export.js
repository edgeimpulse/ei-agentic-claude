import { download_keras_data_export } from '../download_keras_data_export.ts';
export function addDownload_keras_data_exportCommand(program) {
    program.command('download-keras-data-export')
        .description('Auto-generated command for download_keras_data_export')
        .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await download_keras_data_export(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
