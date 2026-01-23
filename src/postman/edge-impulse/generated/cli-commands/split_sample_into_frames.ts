import { Command } from 'commander';
  import { split_sample_into_frames } from '../split_sample_into_frames';

export function addSplit_sample_into_framesCommand(program: Command) {
  program.command('split-sample-into-frames')
    .description('Auto-generated command for split_sample_into_frames')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await split_sample_into_frames(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'split-sample-into-frames' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
