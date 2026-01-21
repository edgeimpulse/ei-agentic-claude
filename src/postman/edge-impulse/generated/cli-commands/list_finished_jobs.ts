import { Command } from 'commander';
import { list_finished_jobs } from '../list_finished_jobs.ts';

export function addList_finished_jobsCommand(program: Command) {
  program.command('list-finished-jobs')
    .description('Auto-generated command for list_finished_jobs')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await list_finished_jobs(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
