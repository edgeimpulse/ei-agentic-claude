import { Command } from 'commander';
  import { object_detection_label_queue } from '../object_detection_label_queue';

export function addObject_detection_label_queueCommand(program: Command) {
  program.command('object-detection-label-queue')
    .description('Auto-generated command for object_detection_label_queue')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await object_detection_label_queue(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'object-detection-label-queue' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
