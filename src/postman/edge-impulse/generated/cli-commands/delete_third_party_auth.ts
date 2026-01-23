import { Command } from 'commander';
  import { delete_third_party_auth } from '../delete_third_party_auth';

export function addDelete_third_party_authCommand(program: Command) {
  program.command('delete-third-party-auth')
    .description('Auto-generated command for delete_third_party_auth')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await delete_third_party_auth(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
