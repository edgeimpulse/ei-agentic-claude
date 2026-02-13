import { Command } from 'commander';
  import { get_label_noise_data } from '../get_label_noise_data';

export function addGet_label_noise_dataCommand(program: Command) {
  program.command('get-label-noise-data')
    .description('Auto-generated command for get_label_noise_data')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_label_noise_data(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-label-noise-data' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
