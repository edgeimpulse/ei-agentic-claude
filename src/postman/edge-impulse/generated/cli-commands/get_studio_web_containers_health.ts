import { Command } from 'commander';
import { get_studio_web_containers_health } from '../get_studio_web_containers_health.ts';

export function addGet_studio_web_containers_healthCommand(program: Command) {
  program.command('get-studio-web-containers-health')
    .description('Auto-generated command for get_studio_web_containers_health')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_studio_web_containers_health(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
