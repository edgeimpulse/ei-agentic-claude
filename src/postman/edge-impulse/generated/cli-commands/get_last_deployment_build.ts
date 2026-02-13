import { Command } from 'commander';
  import { get_last_deployment_build } from '../get_last_deployment_build';

export function addGet_last_deployment_buildCommand(program: Command) {
  program.command('get-last-deployment-build')
    .description('Auto-generated command for get_last_deployment_build')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_last_deployment_build(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-last-deployment-build' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
