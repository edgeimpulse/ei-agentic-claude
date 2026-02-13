import { Command } from 'commander';
  import { start_keras_profile_job } from '../start_keras_profile_job';

export function addStart_keras_profile_jobCommand(program: Command) {
  program.command('start-keras-profile-job')
    .description('Auto-generated command for start_keras_profile_job')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await start_keras_profile_job(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'start-keras-profile-job' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
