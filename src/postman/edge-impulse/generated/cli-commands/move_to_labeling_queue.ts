import { Command } from 'commander';
  import { move_to_labeling_queue } from '../move_to_labeling_queue';

export function addMove_to_labeling_queueCommand(program: Command) {
  program.command('move-to-labeling-queue')
    .description('Auto-generated command for move_to_labeling_queue')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await move_to_labeling_queue(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'move-to-labeling-queue' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
