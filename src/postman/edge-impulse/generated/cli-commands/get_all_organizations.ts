import { Command } from 'commander';
import { get_all_organizations } from '../get_all_organizations.ts';

export function addGet_all_organizationsCommand(program: Command) {
  program.command('get-all-organizations')
    .description('Auto-generated command for get_all_organizations')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_all_organizations(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
