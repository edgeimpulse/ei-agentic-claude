import { download_labels } from '../download_labels.js';
export function addDownload_labelsCommand(program) {
    program.command('download-labels')
        .description('Auto-generated command for download_labels')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await download_labels(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'download-labels' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
