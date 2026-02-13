import { Command } from 'commander';
  import { add_organization_dataset } from '../add_organization_dataset';

export function addAdd_organization_datasetCommand(program: Command) {
  program.command('add-organization-dataset')
    .description('Auto-generated command for add_organization_dataset')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await add_organization_dataset(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'add-organization-dataset' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
