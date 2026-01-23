import { delete_deploy_block } from '../delete_deploy_block.js';
export function addDelete_deploy_blockCommand(program) {
    program.command('delete-deploy-block')
        .description('Auto-generated command for delete_deploy_block')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await delete_deploy_block(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'delete-deploy-block' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
