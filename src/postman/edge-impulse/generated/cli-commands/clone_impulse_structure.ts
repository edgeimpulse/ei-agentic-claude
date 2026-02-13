import { Command } from 'commander';
  import { clone_impulse_structure } from '../clone_impulse_structure';

export function addClone_impulse_structureCommand(program: Command) {
  program.command('clone-impulse-structure')
    .description('Auto-generated command for clone_impulse_structure')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await clone_impulse_structure(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'clone-impulse-structure' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
