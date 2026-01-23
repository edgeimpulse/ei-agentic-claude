import { get_pipeline } from '../get_pipeline.js';
export function addGet_pipelineCommand(program) {
    program.command('get-pipeline')
        .description('Auto-generated command for get_pipeline')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_pipeline(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'get-pipeline' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
