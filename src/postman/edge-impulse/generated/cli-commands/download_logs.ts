import { Command } from 'commander';
import { download_logs } from '../download_logs.ts';

export function addDownload_logsCommand(program: Command) {
  program.command('download-logs')
    .description('Auto-generated command for download_logs')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await download_logs(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
