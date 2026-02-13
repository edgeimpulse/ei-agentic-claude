import { Command } from 'commander';
  import { set_sample_proposed_changes } from '../set_sample_proposed_changes';

export function addSet_sample_proposed_changesCommand(program: Command) {
  program.command('set-sample-proposed-changes')
    .description('Auto-generated command for set_sample_proposed_changes')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await set_sample_proposed_changes(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'set-sample-proposed-changes' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
