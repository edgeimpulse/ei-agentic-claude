import { Command } from 'commander';
  import { list_deployment_targets_for_project } from '../list_deployment_targets_for_project';

export function addList_deployment_targets_for_projectCommand(program: Command) {
  program.command('list-deployment-targets-for-project')
    .description('Auto-generated command for list_deployment_targets_for_project')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await list_deployment_targets_for_project(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'list-deployment-targets-for-project' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
