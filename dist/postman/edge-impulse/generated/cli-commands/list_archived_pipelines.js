import { list_archived_pipelines } from '../list_archived_pipelines.js';
export function addList_archived_pipelinesCommand(program) {
    program.command('list-archived-pipelines')
        .description('Auto-generated command for list_archived_pipelines')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await list_archived_pipelines(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
