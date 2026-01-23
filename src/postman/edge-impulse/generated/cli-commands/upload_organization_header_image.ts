import { Command } from 'commander';
  import { upload_organization_header_image } from '../upload_organization_header_image';

export function addUpload_organization_header_imageCommand(program: Command) {
  program.command('upload-organization-header-image')
    .description('Auto-generated command for upload_organization_header_image')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await upload_organization_header_image(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'upload-organization-header-image' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
