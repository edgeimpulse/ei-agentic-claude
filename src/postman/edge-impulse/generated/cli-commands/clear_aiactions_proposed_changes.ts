import { Command } from 'commander';
  import { clear_aiactions_proposed_changes } from '../clear_aiactions_proposed_changes';

export function addClear_aiactions_proposed_changesCommand(program: Command) {
  program.command('clear-aiactions-proposed-changes')
    .description('Auto-generated command for clear_aiactions_proposed_changes')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await clear_aiactions_proposed_changes(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'clear-aiactions-proposed-changes' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
