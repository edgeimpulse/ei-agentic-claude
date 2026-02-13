import { Command } from 'commander';
  import { get_ssodomain_id_ps } from '../get_ssodomain_id_ps';

export function addGet_ssodomain_id_psCommand(program: Command) {
  program.command('get-ssodomain-id-ps')
    .description('Auto-generated command for get_ssodomain_id_ps')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_ssodomain_id_ps(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-ssodomain-id-ps' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
