import { Command } from 'commander';
  import { set_target_constraints } from '../set_target_constraints';

export function addSet_target_constraintsCommand(program: Command) {
  program.command('set-target-constraints')
    .description('Auto-generated command for set_target_constraints')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await set_target_constraints(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'set-target-constraints' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
