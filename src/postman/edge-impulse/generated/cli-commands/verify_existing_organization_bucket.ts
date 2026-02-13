import { Command } from 'commander';
  import { verify_existing_organization_bucket } from '../verify_existing_organization_bucket';

export function addVerify_existing_organization_bucketCommand(program: Command) {
  program.command('verify-existing-organization-bucket')
    .description('Auto-generated command for verify_existing_organization_bucket')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await verify_existing_organization_bucket(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'verify-existing-organization-bucket' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
