import { Command } from 'commander';
import { optimize_model } from '../optimize_model.ts';

export function addOptimize_modelCommand(program: Command) {
  program.command('optimize-model')
    .description('Auto-generated command for optimize_model')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await optimize_model(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
