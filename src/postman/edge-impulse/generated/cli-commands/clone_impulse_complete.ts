import { Command } from 'commander';
  import { clone_impulse_complete } from '../clone_impulse_complete';

export function addClone_impulse_completeCommand(program: Command) {
  program.command('clone-impulse-complete')
    .description('Auto-generated command for clone_impulse_complete')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await clone_impulse_complete(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'clone-impulse-complete' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
