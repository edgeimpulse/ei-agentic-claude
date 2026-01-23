import { update_storage_bucket } from '../update_storage_bucket.js';
export function addUpdate_storage_bucketCommand(program) {
    program.command('update-storage-bucket')
        .description('Auto-generated command for update_storage_bucket')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await update_storage_bucket(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'update-storage-bucket' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
