import { Command } from 'commander';
import { add_member } from '../add_member.ts';

export function addAdd_memberCommand(program: Command) {
  program.command('add-member')
    .description('Auto-generated command for add_member')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await add_member(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
