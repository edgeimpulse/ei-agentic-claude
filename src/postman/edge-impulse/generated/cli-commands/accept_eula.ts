import { Command } from 'commander';
  import { accept_eula } from '../accept_eula';

export function addAccept_eulaCommand(program: Command) {
  program.command('accept-eula')
    .description('Auto-generated command for accept_eula')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await accept_eula(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'accept-eula' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
