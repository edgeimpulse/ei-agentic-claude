import { Command } from 'commander';
  import { list_the_registered_white_labels } from '../list_the_registered_white_labels';

export function addList_the_registered_white_labelsCommand(program: Command) {
  program.command('list-the-registered-white-labels')
    .description('Auto-generated command for list_the_registered_white_labels')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await list_the_registered_white_labels(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'list-the-registered-white-labels' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
