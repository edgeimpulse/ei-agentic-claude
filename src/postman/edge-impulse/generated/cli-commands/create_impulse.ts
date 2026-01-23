import { Command } from 'commander';
  import { create_impulse } from '../create_impulse';

export function addCreate_impulseCommand(program: Command) {
  program.command('create-impulse')
    .description('Auto-generated command for create_impulse')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await create_impulse(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'create-impulse' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
