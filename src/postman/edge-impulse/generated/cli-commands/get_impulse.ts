import { Command } from 'commander';
  import { get_impulse } from '../get_impulse';

export function addGet_impulseCommand(program: Command) {
  program.command('get-impulse')
    .description('Auto-generated command for get_impulse')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_impulse(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
