import { Command } from 'commander';
import { update_config } from '../update_config.ts';

export function addUpdate_configCommand(program: Command) {
  program.command('update-config')
    .description('Auto-generated command for update_config')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await update_config(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
