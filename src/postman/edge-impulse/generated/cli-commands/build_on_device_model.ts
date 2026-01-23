import { Command } from 'commander';
  import { build_on_device_model } from '../build_on_device_model';

export function addBuild_on_device_modelCommand(program: Command) {
  program.command('build-on-device-model')
    .description('Auto-generated command for build_on_device_model')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await build_on_device_model(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'build-on-device-model' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
