import { Command } from 'commander';
  import { export_original_data } from '../export_original_data';

export function addExport_original_dataCommand(program: Command) {
  program.command('export-original-data')
    .description('Auto-generated command for export_original_data')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await export_original_data(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'export-original-data' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
