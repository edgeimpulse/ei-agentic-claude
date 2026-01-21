import { Command } from 'commander';
import { create_new_empty_project } from '../create_new_empty_project.ts';

export function addCreate_new_empty_projectCommand(program: Command) {
  program.command('create-new-empty-project')
    .description('Auto-generated command for create_new_empty_project')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await create_new_empty_project(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
