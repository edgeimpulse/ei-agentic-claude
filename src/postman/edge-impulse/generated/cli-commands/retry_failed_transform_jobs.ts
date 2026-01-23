import { Command } from 'commander';
  import { retry_failed_transform_jobs } from '../retry_failed_transform_jobs';

export function addRetry_failed_transform_jobsCommand(program: Command) {
  program.command('retry-failed-transform-jobs')
    .description('Auto-generated command for retry_failed_transform_jobs')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await retry_failed_transform_jobs(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
