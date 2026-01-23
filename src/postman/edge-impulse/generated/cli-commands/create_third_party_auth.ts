import { Command } from 'commander';
  import { create_third_party_auth } from '../create_third_party_auth';

export function addCreate_third_party_authCommand(program: Command) {
  program.command('create-third-party-auth')
    .description('Auto-generated command for create_third_party_auth')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await create_third_party_auth(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'create-third-party-auth' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
