import { Command } from 'commander';
  import { set_aiactions_order } from '../set_aiactions_order';

export function addSet_aiactions_orderCommand(program: Command) {
  program.command('set-aiactions-order')
    .description('Auto-generated command for set_aiactions_order')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await set_aiactions_order(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'set-aiactions-order' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
