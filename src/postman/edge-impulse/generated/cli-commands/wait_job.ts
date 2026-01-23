import { Command } from 'commander';
import { waitJob } from '../../../../cli-helpers/wait-job';

export function addWait_jobCommand(program: Command) {
  program.command('wait-job')
    .description('Poll a job until completion: --projectId <id> --jobId <id>')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .requiredOption('--projectId <projectId>', 'Project ID')
    .requiredOption('--jobId <jobId>', 'Job ID')
    .option('--interval-ms <ms>', 'Polling interval in ms', '5000')
    .option('--timeout-ms <ms>', 'Timeout in ms', String(30 * 60 * 1000))
    .action(async (opts) => {
      try {
        const res = await waitJob(opts.apiKey, opts.projectId, opts.jobId, { intervalMs: Number(opts.intervalMs), timeoutMs: Number(opts.timeoutMs) });
        console.log('Final job status:');
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
