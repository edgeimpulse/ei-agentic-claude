import { Command } from 'commander';
  import { send_user_feedback } from '../send_user_feedback';

export function addSend_user_feedbackCommand(program: Command) {
  program.command('send-user-feedback')
    .description('Auto-generated command for send_user_feedback')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await send_user_feedback(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'send-user-feedback' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
