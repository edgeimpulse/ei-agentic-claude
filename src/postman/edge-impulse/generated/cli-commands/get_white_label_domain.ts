import { Command } from 'commander';
  import { get_white_label_domain } from '../get_white_label_domain';

export function addGet_white_label_domainCommand(program: Command) {
  program.command('get-white-label-domain')
    .description('Auto-generated command for get_white_label_domain')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_white_label_domain(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
