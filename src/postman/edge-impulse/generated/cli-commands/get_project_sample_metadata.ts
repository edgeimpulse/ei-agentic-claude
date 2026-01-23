import { Command } from 'commander';
  import { get_project_sample_metadata } from '../get_project_sample_metadata';

export function addGet_project_sample_metadataCommand(program: Command) {
  program.command('get-project-sample-metadata')
    .description('Auto-generated command for get_project_sample_metadata')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_project_sample_metadata(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
