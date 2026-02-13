import { Command } from 'commander';
  import { download_multi_project_deployment } from '../download_multi_project_deployment';

export function addDownload_multi_project_deploymentCommand(program: Command) {
  program.command('download-multi-project-deployment')
    .description('Auto-generated command for download_multi_project_deployment')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await download_multi_project_deployment(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'download-multi-project-deployment' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
