import { Command } from 'commander';
  import { retrieves_the_eon_tuner_state } from '../retrieves_the_eon_tuner_state';

export function addRetrieves_the_eon_tuner_stateCommand(program: Command) {
  program.command('retrieves-the-eon-tuner-state')
    .description('Auto-generated command for retrieves_the_eon_tuner_state')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await retrieves_the_eon_tuner_state(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
