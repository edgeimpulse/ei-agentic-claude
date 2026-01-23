import { Command } from 'commander';
  import { get_downloads } from '../get_downloads';

export function addGet_downloadsCommand(program: Command) {
  program.command('get-downloads')
    .description('Auto-generated command for get_downloads')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_downloads(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
