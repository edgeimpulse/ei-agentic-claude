import { create_pipeline } from '../create_pipeline.js';
export function addCreate_pipelineCommand(program) {
    program.command('create-pipeline')
        .description('Auto-generated command for create_pipeline')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await create_pipeline(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'create-pipeline' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
