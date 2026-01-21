import { Command } from 'commander';
import { get_themes } from '../get_themes.ts';

export function addGet_themesCommand(program: Command) {
  program.command('get-themes')
    .description('Auto-generated command for get_themes')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
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
