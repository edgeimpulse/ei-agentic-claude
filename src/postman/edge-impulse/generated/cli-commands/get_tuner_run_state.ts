import { Command } from 'commander';
  import { get_tuner_run_state } from '../get_tuner_run_state';

export function addGet_tuner_run_stateCommand(program: Command) {
  program.command('get-tuner-run-state')
    .description('Auto-generated command for get_tuner_run_state')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_tuner_run_state(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-tuner-run-state' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
