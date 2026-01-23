import { create_user } from '../create_user.js';
export function addCreate_userCommand(program) {
    program.command('create-user')
        .description('Auto-generated command for create_user')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await create_user(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'create-user' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
