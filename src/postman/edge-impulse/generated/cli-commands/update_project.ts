import { Command } from 'commander';
  import { update_project } from '../update_project';

export function addUpdate_projectCommand(program: Command) {
  program.command('update-project')
    .description('Auto-generated command for update_project')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await update_project(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'update-project' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
