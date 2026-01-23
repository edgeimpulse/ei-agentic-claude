import { verify_bucket_connectivity } from '../verify_bucket_connectivity';
export function addVerify_bucket_connectivityCommand(program) {
    program.command('verify-bucket-connectivity')
        .description('Auto-generated command for verify_bucket_connectivity')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await verify_bucket_connectivity(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
