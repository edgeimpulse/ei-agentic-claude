import { delete_user } from '../delete_user.js';
export function addDelete_userCommand(program) {
    program.command('delete-user')
        .description('Auto-generated command for delete_user')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await delete_user(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'delete-user' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
