import { create_developer_profile } from '../create_developer_profile.js';
export function addCreate_developer_profileCommand(program) {
    program.command('create-developer-profile')
        .description('Auto-generated command for create_developer_profile')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await create_developer_profile(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'create-developer-profile' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
