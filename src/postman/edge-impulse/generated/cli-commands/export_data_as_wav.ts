import { Command } from 'commander';
import { export_data_as_wav } from '../export_data_as_wav.ts';

export function addExport_data_as_wavCommand(program: Command) {
  program.command('export-data-as-wav')
    .description('Auto-generated command for export_data_as_wav')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await export_data_as_wav(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
