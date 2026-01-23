import { Command } from 'commander';
  import { retry_connection_to_dsp_block } from '../retry_connection_to_dsp_block';

export function addRetry_connection_to_dsp_blockCommand(program: Command) {
  program.command('retry-connection-to-dsp-block')
    .description('Auto-generated command for retry_connection_to_dsp_block')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await retry_connection_to_dsp_block(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
