import { Command } from 'commander';
  import { clear_all_object_detection_labels } from '../clear_all_object_detection_labels';

export function addClear_all_object_detection_labelsCommand(program: Command) {
  program.command('clear-all-object-detection-labels')
    .description('Auto-generated command for clear_all_object_detection_labels')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await clear_all_object_detection_labels(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'clear-all-object-detection-labels' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
