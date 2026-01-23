import { Command } from 'commander';
  import { transfer_ownership_user } from '../transfer_ownership_user';

export function addTransfer_ownership_userCommand(program: Command) {
  program.command('transfer-ownership-user')
    .description('Auto-generated command for transfer_ownership_user')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await transfer_ownership_user(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
