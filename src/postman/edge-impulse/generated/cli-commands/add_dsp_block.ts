import { Command } from 'commander';
import { add_dsp_block } from '../add_dsp_block.ts';

export function addAdd_dsp_blockCommand(program: Command) {
  program.command('add-dsp-block')
    .description('Auto-generated command for add_dsp_block')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await add_dsp_block(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
