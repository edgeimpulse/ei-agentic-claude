import { Command } from 'commander';
  import { get_theme_by_id } from '../get_theme_by_id';

export function addGet_theme_by_idCommand(program: Command) {
  program.command('get-theme-by-id')
    .description('Auto-generated command for get_theme_by_id')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_theme_by_id(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-theme-by-id' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
