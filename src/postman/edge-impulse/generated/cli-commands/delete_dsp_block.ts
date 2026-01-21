import { Command } from 'commander';
import { delete_dsp_block } from '../delete_dsp_block.ts';

export function addDelete_dsp_blockCommand(program: Command) {
  program.command('delete-dsp-block')
    .description('Auto-generated command for delete_dsp_block')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await delete_dsp_block(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
