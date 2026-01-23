import { Command } from 'commander';
  import { organization_information } from '../organization_information';

export function addOrganization_informationCommand(program: Command) {
  program.command('organization-information')
    .description('Auto-generated command for organization_information')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await organization_information(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
