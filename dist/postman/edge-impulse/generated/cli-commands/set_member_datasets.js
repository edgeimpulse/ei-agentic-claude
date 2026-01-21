import { set_member_datasets } from '../set_member_datasets.ts';
export function addSet_member_datasetsCommand(program) {
    program.command('set-member-datasets')
        .description('Auto-generated command for set_member_datasets')
        .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await set_member_datasets(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
