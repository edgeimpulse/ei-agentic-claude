import { update_white_label_project } from '../update_white_label_project.js';
export function addUpdate_white_label_projectCommand(program) {
    program.command('update-white-label-project')
        .description('Auto-generated command for update_white_label_project')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await update_white_label_project(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
