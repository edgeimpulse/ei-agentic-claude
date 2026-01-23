import { Command } from 'commander';
  import { get_themes } from '../get_themes';

export function addGet_themesCommand(program: Command) {
  program.command('get-themes')
    .description('Auto-generated command for get_themes')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_themes(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
