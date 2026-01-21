import { remove_storage_bucket } from '../remove_storage_bucket.ts';
export function addRemove_storage_bucketCommand(program) {
    program.command('remove-storage-bucket')
        .description('Auto-generated command for remove_storage_bucket')
        .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await remove_storage_bucket(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
