import { Command } from 'commander';
  import { create_device } from '../create_device';

export function addCreate_deviceCommand(program: Command) {
  program.command('create-device')
    .description('Auto-generated command for create_device')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await create_device(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'create-device' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
