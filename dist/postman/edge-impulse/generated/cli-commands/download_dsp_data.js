import { download_dsp_data } from '../download_dsp_data.js';
export function addDownload_dsp_dataCommand(program) {
    program.command('download-dsp-data')
        .description('Auto-generated command for download_dsp_data')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await download_dsp_data(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'download-dsp-data' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
