import { Command } from 'commander';
  import { update_impulse } from '../update_impulse';

export function addUpdate_impulseCommand(program: Command) {
  program.command('update-impulse')
    .description('Auto-generated command for update_impulse')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await update_impulse(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'update-impulse' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
