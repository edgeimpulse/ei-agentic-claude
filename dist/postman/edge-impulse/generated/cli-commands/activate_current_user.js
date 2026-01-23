import { activate_current_user } from '../activate_current_user.js';
export function addActivate_current_userCommand(program) {
    program.command('activate-current-user')
        .description('Auto-generated command for activate_current_user')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await activate_current_user(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'activate-current-user' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
