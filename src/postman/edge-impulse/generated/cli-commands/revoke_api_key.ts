import { Command } from 'commander';
  import { revoke_api_key } from '../revoke_api_key';

export function addRevoke_api_keyCommand(program: Command) {
  program.command('revoke-api-key')
    .description('Auto-generated command for revoke_api_key')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await revoke_api_key(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'revoke-api-key' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
