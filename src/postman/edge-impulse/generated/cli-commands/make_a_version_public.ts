import { Command } from 'commander';
  import { make_a_version_public } from '../make_a_version_public';

export function addMake_a_version_publicCommand(program: Command) {
  program.command('make-a-version-public')
    .description('Auto-generated command for make_a_version_public')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await make_a_version_public(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
