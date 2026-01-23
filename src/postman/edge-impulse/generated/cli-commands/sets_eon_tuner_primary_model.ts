import { Command } from 'commander';
  import { sets_eon_tuner_primary_model } from '../sets_eon_tuner_primary_model';

export function addSets_eon_tuner_primary_modelCommand(program: Command) {
  program.command('sets-eon-tuner-primary-model')
    .description('Auto-generated command for sets_eon_tuner_primary_model')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await sets_eon_tuner_primary_model(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
