import { Command } from 'commander';
  import { get_aiactions_proposed_changes } from '../get_aiactions_proposed_changes';

export function addGet_aiactions_proposed_changesCommand(program: Command) {
  program.command('get-aiactions-proposed-changes')
    .description('Auto-generated command for get_aiactions_proposed_changes')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_aiactions_proposed_changes(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-aiactions-proposed-changes' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
