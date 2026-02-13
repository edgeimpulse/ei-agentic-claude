import { Command } from 'commander';
  import { set_impulse_thresholds } from '../set_impulse_thresholds';

export function addSet_impulse_thresholdsCommand(program: Command) {
  program.command('set-impulse-thresholds')
    .description('Auto-generated command for set_impulse_thresholds')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await set_impulse_thresholds(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'set-impulse-thresholds' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
