import { Command } from 'commander';
import { update_deployment_targets } from '../update_deployment_targets.ts';

export function addUpdate_deployment_targetsCommand(program: Command) {
  program.command('update-deployment-targets')
    .description('Auto-generated command for update_deployment_targets')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await update_deployment_targets(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
