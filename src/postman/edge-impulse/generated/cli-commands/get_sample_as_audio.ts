import { Command } from 'commander';
  import { get_sample_as_audio } from '../get_sample_as_audio';

export function addGet_sample_as_audioCommand(program: Command) {
  program.command('get-sample-as-audio')
    .description('Auto-generated command for get_sample_as_audio')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_sample_as_audio(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-sample-as-audio' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
