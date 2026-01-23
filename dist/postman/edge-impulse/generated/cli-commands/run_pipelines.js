import { run_pipelines } from '../run_pipelines.js';
export function addRun_pipelinesCommand(program) {
    program.command('run-pipelines')
        .description('Auto-generated command for run_pipelines')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await run_pipelines(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'run-pipelines' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
