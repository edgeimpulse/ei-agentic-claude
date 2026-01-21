import { Command } from 'commander';
import { download_data } from '../download_data.ts';

export function addDownload_dataCommand(program: Command) {
  program.command('download-data')
    .description('Auto-generated command for download_data')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await download_data(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
