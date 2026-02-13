import { Command } from 'commander';
  import { stop_device_debug_stream } from '../stop_device_debug_stream';

export function addStop_device_debug_streamCommand(program: Command) {
  program.command('stop-device-debug-stream')
    .description('Auto-generated command for stop_device_debug_stream')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await stop_device_debug_stream(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'stop-device-debug-stream' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
