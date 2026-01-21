import { Command } from 'commander';
import { invite_member } from '../invite_member.ts';

export function addInvite_memberCommand(program: Command) {
  program.command('invite-member')
    .description('Auto-generated command for invite_member')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await invite_member(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
