import { Command } from 'commander';
import { list_transformation_jobs } from '../list_transformation_jobs.ts';

export function addList_transformation_jobsCommand(program: Command) {
  program.command('list-transformation-jobs')
    .description('Auto-generated command for list_transformation_jobs')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await list_transformation_jobs(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
