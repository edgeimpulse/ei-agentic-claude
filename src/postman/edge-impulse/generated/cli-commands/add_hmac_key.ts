import { Command } from 'commander';
  import { add_hmac_key } from '../add_hmac_key';

export function addAdd_hmac_keyCommand(program: Command) {
  program.command('add-hmac-key')
    .description('Auto-generated command for add_hmac_key')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await add_hmac_key(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
