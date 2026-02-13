import { Command } from 'commander';
  import { start_anomaly_profile_job } from '../start_anomaly_profile_job';

export function addStart_anomaly_profile_jobCommand(program: Command) {
  program.command('start-anomaly-profile-job')
    .description('Auto-generated command for start_anomaly_profile_job')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await start_anomaly_profile_job(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'start-anomaly-profile-job' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
