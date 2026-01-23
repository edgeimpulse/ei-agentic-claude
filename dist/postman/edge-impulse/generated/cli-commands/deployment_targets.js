import { deployment_targets } from '../deployment_targets.js';
export function addDeployment_targetsCommand(program) {
    program.command('deployment-targets')
        .description('Auto-generated command for deployment_targets')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await deployment_targets(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'deployment-targets' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
