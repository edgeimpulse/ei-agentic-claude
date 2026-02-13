import { Command } from 'commander';
  import { keep_device_debug_stream_alive } from '../keep_device_debug_stream_alive';

export function addKeep_device_debug_stream_aliveCommand(program: Command) {
  program.command('keep-device-debug-stream-alive')
    .description('Auto-generated command for keep_device_debug_stream_alive')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await keep_device_debug_stream_alive(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'keep-device-debug-stream-alive' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
