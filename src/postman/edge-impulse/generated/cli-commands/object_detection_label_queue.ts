import { Command } from 'commander';
import { object_detection_label_queue } from '../object_detection_label_queue.ts';

export function addObject_detection_label_queueCommand(program: Command) {
  program.command('object-detection-label-queue')
    .description('Auto-generated command for object_detection_label_queue')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await object_detection_label_queue(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
