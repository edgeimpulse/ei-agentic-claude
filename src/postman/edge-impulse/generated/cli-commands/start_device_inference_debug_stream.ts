import { Command } from 'commander';
  import { start_device_inference_debug_stream } from '../start_device_inference_debug_stream';

export function addStart_device_inference_debug_streamCommand(program: Command) {
  program.command('start-device-inference-debug-stream')
    .description('Auto-generated command for start_device_inference_debug_stream')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await start_device_inference_debug_stream(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'start-device-inference-debug-stream' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
