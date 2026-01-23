import { Command } from 'commander';
  import { admin_endpoint } from '../admin_endpoint';

export function addAdmin_endpointCommand(program: Command) {
  program.command('admin-endpoint')
    .description('Auto-generated command for admin_endpoint')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await admin_endpoint(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
