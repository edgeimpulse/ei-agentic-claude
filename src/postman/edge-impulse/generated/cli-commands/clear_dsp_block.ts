import { Command } from 'commander';
import { clear_dsp_block } from '../clear_dsp_block.ts';

export function addClear_dsp_blockCommand(program: Command) {
  program.command('clear-dsp-block')
    .description('Auto-generated command for clear_dsp_block')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await clear_dsp_block(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
