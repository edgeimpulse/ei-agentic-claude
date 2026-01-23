import { Command } from 'commander';
  import { download_trained_model } from '../download_trained_model';

export function addDownload_trained_modelCommand(program: Command) {
  program.command('download-trained-model')
    .description('Auto-generated command for download_trained_model')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await download_trained_model(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'download-trained-model' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
