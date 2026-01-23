import { Command } from 'commander';
  import { restore_project_to_public_version } from '../restore_project_to_public_version';

export function addRestore_project_to_public_versionCommand(program: Command) {
  program.command('restore-project-to-public-version')
    .description('Auto-generated command for restore_project_to_public_version')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await restore_project_to_public_version(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
