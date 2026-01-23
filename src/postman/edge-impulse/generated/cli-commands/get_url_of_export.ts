import { Command } from 'commander';
  import { get_url_of_export } from '../get_url_of_export';

export function addGet_url_of_exportCommand(program: Command) {
  program.command('get-url-of-export')
    .description('Auto-generated command for get_url_of_export')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_url_of_export(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-url-of-export' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
