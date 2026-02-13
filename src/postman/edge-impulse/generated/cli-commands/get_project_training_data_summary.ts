import { Command } from 'commander';
  import { get_project_training_data_summary } from '../get_project_training_data_summary';

export function addGet_project_training_data_summaryCommand(program: Command) {
  program.command('get-project-training-data-summary')
    .description('Auto-generated command for get_project_training_data_summary')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_project_training_data_summary(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-project-training-data-summary' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
