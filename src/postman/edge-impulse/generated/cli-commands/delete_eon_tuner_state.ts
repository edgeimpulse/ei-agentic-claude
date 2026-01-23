import { Command } from 'commander';
  import { delete_eon_tuner_state } from '../delete_eon_tuner_state';

export function addDelete_eon_tuner_stateCommand(program: Command) {
  program.command('delete-eon-tuner-state')
    .description('Auto-generated command for delete_eon_tuner_state')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await delete_eon_tuner_state(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'delete-eon-tuner-state' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
