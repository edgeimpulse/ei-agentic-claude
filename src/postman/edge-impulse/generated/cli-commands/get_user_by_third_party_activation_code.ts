import { Command } from 'commander';
  import { get_user_by_third_party_activation_code } from '../get_user_by_third_party_activation_code';

export function addGet_user_by_third_party_activation_codeCommand(program: Command) {
  program.command('get-user-by-third-party-activation-code')
    .description('Auto-generated command for get_user_by_third_party_activation_code')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_user_by_third_party_activation_code(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-user-by-third-party-activation-code' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
