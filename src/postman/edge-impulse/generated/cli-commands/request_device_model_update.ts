import { Command } from 'commander';
  import { request_device_model_update } from '../request_device_model_update';

export function addRequest_device_model_updateCommand(program: Command) {
  program.command('request-device-model-update')
    .description('Auto-generated command for request_device_model_update')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await request_device_model_update(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'request-device-model-update' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
