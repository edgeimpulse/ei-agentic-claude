import { retrain } from '../retrain.js';
export function addRetrainCommand(program) {
    program.command('retrain')
        .description('Auto-generated command for retrain')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await retrain(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'retrain' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
