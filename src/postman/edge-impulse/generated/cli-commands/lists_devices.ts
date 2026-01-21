import { Command } from 'commander';
import { lists_devices } from '../lists_devices.ts';

export function addLists_devicesCommand(program: Command) {
  program.command('lists-devices')
    .description('Auto-generated command for lists_devices')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await lists_devices(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
