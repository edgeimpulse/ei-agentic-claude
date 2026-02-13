import { Command } from 'commander';
  import { create_synthetic_data_job } from '../create_synthetic_data_job';

export function addCreate_synthetic_data_jobCommand(program: Command) {
  program.command('create-synthetic-data-job')
    .description('Auto-generated command for create_synthetic_data_job')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await create_synthetic_data_job(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'create-synthetic-data-job' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
