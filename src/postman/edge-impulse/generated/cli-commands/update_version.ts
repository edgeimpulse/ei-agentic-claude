import { Command } from 'commander';
import { update_version } from '../update_version.ts';

export function addUpdate_versionCommand(program: Command) {
  program.command('update-version')
    .description('Auto-generated command for update_version')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await update_version(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
