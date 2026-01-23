import { add_deploy_block } from '../add_deploy_block.js';
export function addAdd_deploy_blockCommand(program) {
    program.command('add-deploy-block')
        .description('Auto-generated command for add_deploy_block')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await add_deploy_block(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'add-deploy-block' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
