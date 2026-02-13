import { Command } from 'commander';
  import { start_import_data_from_project_job } from '../start_import_data_from_project_job';

export function addStart_import_data_from_project_jobCommand(program: Command) {
  program.command('start-import-data-from-project-job')
    .description('Auto-generated command for start_import_data_from_project_job')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await start_import_data_from_project_job(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'start-import-data-from-project-job' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
