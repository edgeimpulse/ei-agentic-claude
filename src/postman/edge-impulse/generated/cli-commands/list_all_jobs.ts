import { Command } from 'commander';
  import { list_all_jobs } from '../list_all_jobs';

export function addList_all_jobsCommand(program: Command) {
  program.command('list-all-jobs')
    .description('Auto-generated command for list_all_jobs')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await list_all_jobs(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
