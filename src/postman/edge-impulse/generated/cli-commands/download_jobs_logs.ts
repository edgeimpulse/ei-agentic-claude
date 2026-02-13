import { Command } from 'commander';
  import { download_jobs_logs } from '../download_jobs_logs';

export function addDownload_jobs_logsCommand(program: Command) {
  program.command('download-jobs-logs')
    .description('Auto-generated command for download_jobs_logs')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await download_jobs_logs(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'download-jobs-logs' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
