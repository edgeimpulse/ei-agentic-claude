import { Command } from 'commander';
  import { get_target_constraints } from '../get_target_constraints';

export function addGet_target_constraintsCommand(program: Command) {
  program.command('get-target-constraints')
    .description('Auto-generated command for get_target_constraints')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_target_constraints(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-target-constraints' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
