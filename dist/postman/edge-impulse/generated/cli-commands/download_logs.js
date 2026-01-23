import { download_logs } from '../download_logs.js';
export function addDownload_logsCommand(program) {
    program.command('download-logs')
        .description('Auto-generated command for download_logs')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await download_logs(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'download-logs' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
