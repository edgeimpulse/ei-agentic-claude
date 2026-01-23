import { list_storage_buckets } from '../list_storage_buckets';
export function addList_storage_bucketsCommand(program) {
    program.command('list-storage-buckets')
        .description('Auto-generated command for list_storage_buckets')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await list_storage_buckets(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
