import { create_evaluation_user } from '../create_evaluation_user.ts';
export function addCreate_evaluation_userCommand(program) {
    program.command('create-evaluation-user')
        .description('Auto-generated command for create_evaluation_user')
        .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await create_evaluation_user(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
