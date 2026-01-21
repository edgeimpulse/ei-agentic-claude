import { Command } from 'commander';
import { make_version_private } from '../make_version_private.ts';

export function addMake_version_privateCommand(program: Command) {
  program.command('make-version-private')
    .description('Auto-generated command for make_version_private')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await make_version_private(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
