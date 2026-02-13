import { Command } from 'commander';
  import { has_label_noise_data } from '../has_label_noise_data';

export function addHas_label_noise_dataCommand(program: Command) {
  program.command('has-label-noise-data')
    .description('Auto-generated command for has_label_noise_data')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await has_label_noise_data(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'has-label-noise-data' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
