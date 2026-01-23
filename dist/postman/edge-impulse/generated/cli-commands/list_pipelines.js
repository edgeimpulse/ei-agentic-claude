import { list_pipelines } from '../list_pipelines.js';
export function addList_pipelinesCommand(program) {
    program.command('list-pipelines')
        .description('Auto-generated command for list_pipelines')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await list_pipelines(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'list-pipelines' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
