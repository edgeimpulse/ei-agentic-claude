import { Command } from 'commander';
  import { add_user_to_a_project } from '../add_user_to_a_project';

export function addAdd_user_to_a_projectCommand(program: Command) {
  program.command('add-user-to-a-project')
    .description('Auto-generated command for add_user_to_a_project')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await add_user_to_a_project(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'add-user-to-a-project' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
