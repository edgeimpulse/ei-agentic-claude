import { Command } from 'commander';
import { job_summary } from '../job_summary.ts';

export function addJob_summaryCommand(program: Command) {
  program.command('job-summary')
    .description('Auto-generated command for job_summary')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await job_summary(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
