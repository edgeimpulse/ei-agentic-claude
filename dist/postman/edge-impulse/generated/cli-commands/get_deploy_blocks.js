import { get_deploy_blocks } from '../get_deploy_blocks.js';
export function addGet_deploy_blocksCommand(program) {
    program.command('get-deploy-blocks')
        .description('Auto-generated command for get_deploy_blocks')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_deploy_blocks(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
