import { Command } from 'commander';
  import { get_pipeline } from '../get_pipeline';

export function addGet_pipelineCommand(program: Command) {
  program.command('get-pipeline')
    .description('Auto-generated command for get_pipeline')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_pipeline(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
