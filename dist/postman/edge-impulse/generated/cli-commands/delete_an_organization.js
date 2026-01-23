import { delete_an_organization } from '../delete_an_organization';
export function addDelete_an_organizationCommand(program) {
    program.command('delete-an-organization')
        .description('Auto-generated command for delete_an_organization')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await delete_an_organization(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
