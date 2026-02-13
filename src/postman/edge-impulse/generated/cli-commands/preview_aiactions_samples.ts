import { Command } from 'commander';
  import { preview_aiactions_samples } from '../preview_aiactions_samples';

export function addPreview_aiactions_samplesCommand(program: Command) {
  program.command('preview-aiactions-samples')
    .description('Auto-generated command for preview_aiactions_samples')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await preview_aiactions_samples(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'preview-aiactions-samples' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
