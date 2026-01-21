import { Command } from 'commander';
import { delete_a_project } from '../delete_a_project.ts';

export function addDelete_a_projectCommand(program: Command) {
  program.command('delete-a-project')
    .description('Auto-generated command for delete_a_project')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await delete_a_project(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
