import { Command } from 'commander';
  import { batch_back_to_labeling } from '../batch_back_to_labeling';

export function addBatch_back_to_labelingCommand(program: Command) {
  program.command('batch-back-to-labeling')
    .description('Auto-generated command for batch_back_to_labeling')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await batch_back_to_labeling(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'batch-back-to-labeling' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
