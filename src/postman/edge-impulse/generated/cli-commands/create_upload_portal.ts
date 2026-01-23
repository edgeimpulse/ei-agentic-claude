import { Command } from 'commander';
  import { create_upload_portal } from '../create_upload_portal';

export function addCreate_upload_portalCommand(program: Command) {
  program.command('create-upload-portal')
    .description('Auto-generated command for create_upload_portal')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await create_upload_portal(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'create-upload-portal' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
