import { Command } from 'commander';
  import { download_detailed_impulses } from '../download_detailed_impulses';

export function addDownload_detailed_impulsesCommand(program: Command) {
  program.command('download-detailed-impulses')
    .description('Auto-generated command for download_detailed_impulses')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await download_detailed_impulses(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'download-detailed-impulses' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
