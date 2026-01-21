import { Command } from 'commander';
import { retrain } from '../retrain.ts';

export function addRetrainCommand(program: Command) {
  program.command('retrain')
    .description('Auto-generated command for retrain')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await retrain(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
