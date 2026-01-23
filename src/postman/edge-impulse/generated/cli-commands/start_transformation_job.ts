import { Command } from 'commander';
  import { start_transformation_job } from '../start_transformation_job';

export function addStart_transformation_jobCommand(program: Command) {
  program.command('start-transformation-job')
    .description('Auto-generated command for start_transformation_job')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await start_transformation_job(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'start-transformation-job' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
