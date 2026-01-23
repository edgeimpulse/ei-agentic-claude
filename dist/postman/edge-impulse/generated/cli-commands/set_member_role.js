import { set_member_role } from '../set_member_role.js';
export function addSet_member_roleCommand(program) {
    program.command('set-member-role')
        .description('Auto-generated command for set_member_role')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await set_member_role(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
