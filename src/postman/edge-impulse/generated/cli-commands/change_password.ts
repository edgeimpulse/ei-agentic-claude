import { Command } from 'commander';
  import { change_password } from '../change_password';

export function addChange_passwordCommand(program: Command) {
  program.command('change-password')
    .description('Auto-generated command for change_password')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await change_password(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'change-password' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
