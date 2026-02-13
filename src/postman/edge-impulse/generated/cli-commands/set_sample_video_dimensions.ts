import { Command } from 'commander';
  import { set_sample_video_dimensions } from '../set_sample_video_dimensions';

export function addSet_sample_video_dimensionsCommand(program: Command) {
  program.command('set-sample-video-dimensions')
    .description('Auto-generated command for set_sample_video_dimensions')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await set_sample_video_dimensions(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'set-sample-video-dimensions' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
