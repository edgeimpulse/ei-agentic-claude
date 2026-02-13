import { Command } from 'commander';
  import { update_project_openapi_1c2abf18 } from '../update_project_openapi_1c2abf18';

export function addUpdate_project_openapi_1c2abf18Command(program: Command) {
  program.command('update-project-openapi-1c2abf18')
    .description('Auto-generated command for update_project_openapi_1c2abf18')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await update_project_openapi_1c2abf18(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'update-project-openapi-1c2abf18' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
