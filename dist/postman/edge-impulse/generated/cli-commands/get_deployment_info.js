import { get_deployment_info } from '../get_deployment_info';
export function addGet_deployment_infoCommand(program) {
    program.command('get-deployment-info')
        .description('Auto-generated command for get_deployment_info')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_deployment_info(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
