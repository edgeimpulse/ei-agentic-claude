import { Command } from 'commander';
  import { download_dsp_labels } from '../download_dsp_labels';

export function addDownload_dsp_labelsCommand(program: Command) {
  program.command('download-dsp-labels')
    .description('Auto-generated command for download_dsp_labels')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await download_dsp_labels(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
