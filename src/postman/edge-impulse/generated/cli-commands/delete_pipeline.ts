import { Command } from 'commander';
  import { delete_pipeline } from '../delete_pipeline';

export function addDelete_pipelineCommand(program: Command) {
  program.command('delete-pipeline')
    .description('Auto-generated command for delete_pipeline')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await delete_pipeline(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
