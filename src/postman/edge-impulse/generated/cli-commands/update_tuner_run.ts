import { Command } from 'commander';
  import { update_tuner_run } from '../update_tuner_run';

export function addUpdate_tuner_runCommand(program: Command) {
  program.command('update-tuner-run')
    .description('Auto-generated command for update_tuner_run')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await update_tuner_run(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'update-tuner-run' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
