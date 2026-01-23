import { delete_theme_by_id } from '../delete_theme_by_id.js';
export function addDelete_theme_by_idCommand(program) {
    program.command('delete-theme-by-id')
        .description('Auto-generated command for delete_theme_by_id')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await delete_theme_by_id(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
