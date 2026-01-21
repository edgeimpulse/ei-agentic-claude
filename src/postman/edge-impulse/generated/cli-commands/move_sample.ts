import { Command } from 'commander';
import { move_sample } from '../move_sample.ts';

export function addMove_sampleCommand(program: Command) {
  program.command('move-sample')
    .description('Auto-generated command for move_sample')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await move_sample(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
