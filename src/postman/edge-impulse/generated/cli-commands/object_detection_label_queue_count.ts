import { Command } from 'commander';
  import { object_detection_label_queue_count } from '../object_detection_label_queue_count';

export function addObject_detection_label_queue_countCommand(program: Command) {
  program.command('object-detection-label-queue-count')
    .description('Auto-generated command for object_detection_label_queue_count')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await object_detection_label_queue_count(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
