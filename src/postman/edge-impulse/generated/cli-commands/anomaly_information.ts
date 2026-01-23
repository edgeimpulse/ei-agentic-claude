import { Command } from 'commander';
  import { anomaly_information } from '../anomaly_information';

export function addAnomaly_informationCommand(program: Command) {
  program.command('anomaly-information')
    .description('Auto-generated command for anomaly_information')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await anomaly_information(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
