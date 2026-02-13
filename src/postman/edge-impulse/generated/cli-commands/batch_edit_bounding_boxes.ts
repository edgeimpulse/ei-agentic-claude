import { Command } from 'commander';
  import { batch_edit_bounding_boxes } from '../batch_edit_bounding_boxes';

export function addBatch_edit_bounding_boxesCommand(program: Command) {
  program.command('batch-edit-bounding-boxes')
    .description('Auto-generated command for batch_edit_bounding_boxes')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await batch_edit_bounding_boxes(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'batch-edit-bounding-boxes' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
