import { create_trial } from '../create_trial.js';
export function addCreate_trialCommand(program) {
    program.command('create-trial')
        .description('Auto-generated command for create_trial')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await create_trial(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'create-trial' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
