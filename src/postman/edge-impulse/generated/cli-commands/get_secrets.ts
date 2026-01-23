import { Command } from 'commander';
  import { get_secrets } from '../get_secrets';

export function addGet_secretsCommand(program: Command) {
  program.command('get-secrets')
    .description('Auto-generated command for get_secrets')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_secrets(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-secrets' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
