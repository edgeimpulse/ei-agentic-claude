import { Command } from 'commander';
  import { project_dismiss_notification } from '../project_dismiss_notification';

export function addProject_dismiss_notificationCommand(program: Command) {
  program.command('project-dismiss-notification')
    .description('Auto-generated command for project_dismiss_notification')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await project_dismiss_notification(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'project-dismiss-notification' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
