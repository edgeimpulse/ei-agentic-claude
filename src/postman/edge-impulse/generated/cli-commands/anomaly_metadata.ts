import { Command } from 'commander';
  import { anomaly_metadata } from '../anomaly_metadata';

export function addAnomaly_metadataCommand(program: Command) {
  program.command('anomaly-metadata')
    .description('Auto-generated command for anomaly_metadata')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await anomaly_metadata(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
