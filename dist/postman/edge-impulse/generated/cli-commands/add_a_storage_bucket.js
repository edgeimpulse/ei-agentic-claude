import { add_a_storage_bucket } from '../add_a_storage_bucket.js';
export function addAdd_a_storage_bucketCommand(program) {
    program.command('add-a-storage-bucket')
        .description('Auto-generated command for add_a_storage_bucket')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await add_a_storage_bucket(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'add-a-storage-bucket' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
