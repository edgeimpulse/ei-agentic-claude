import { Command } from 'commander';
  import { complete_search } from '../complete_search';

export function addComplete_searchCommand(program: Command) {
  program.command('complete-search')
    .description('Auto-generated command for complete_search')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await complete_search(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'complete-search' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
