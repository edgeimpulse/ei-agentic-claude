import { Command } from 'commander';
  import { send_user_upgrade_request } from '../send_user_upgrade_request';

export function addSend_user_upgrade_requestCommand(program: Command) {
  program.command('send-user-upgrade-request')
    .description('Auto-generated command for send_user_upgrade_request')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await send_user_upgrade_request(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'send-user-upgrade-request' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
