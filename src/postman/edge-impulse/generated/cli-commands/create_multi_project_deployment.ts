import { Command } from 'commander';
  import { create_multi_project_deployment } from '../create_multi_project_deployment';

export function addCreate_multi_project_deploymentCommand(program: Command) {
  program.command('create-multi-project-deployment')
    .description('Auto-generated command for create_multi_project_deployment')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await create_multi_project_deployment(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'create-multi-project-deployment' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
