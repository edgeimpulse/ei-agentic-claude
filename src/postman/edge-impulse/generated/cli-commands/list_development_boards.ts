import { Command } from 'commander';
  import { list_development_boards } from '../list_development_boards';

export function addList_development_boardsCommand(program: Command) {
  program.command('list-development-boards')
    .description('Auto-generated command for list_development_boards')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await list_development_boards(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'list-development-boards' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
