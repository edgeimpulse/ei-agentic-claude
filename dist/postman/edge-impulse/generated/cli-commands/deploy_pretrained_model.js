import { deploy_pretrained_model } from '../deploy_pretrained_model.js';
export function addDeploy_pretrained_modelCommand(program) {
    program.command('deploy-pretrained-model')
        .description('Auto-generated command for deploy_pretrained_model')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await deploy_pretrained_model(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
