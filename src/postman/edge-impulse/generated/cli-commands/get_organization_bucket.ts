import { Command } from 'commander';
  import { get_organization_bucket } from '../get_organization_bucket';

export function addGet_organization_bucketCommand(program: Command) {
  program.command('get-organization-bucket')
    .description('Auto-generated command for get_organization_bucket')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_organization_bucket(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-organization-bucket' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
