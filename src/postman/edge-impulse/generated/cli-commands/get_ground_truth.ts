import { Command } from 'commander';
  import { get_ground_truth } from '../get_ground_truth';

export function addGet_ground_truthCommand(program: Command) {
  program.command('get-ground-truth')
    .description('Auto-generated command for get_ground_truth')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_ground_truth(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
