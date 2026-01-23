import { score_trial } from '../score_trial.js';
export function addScore_trialCommand(program) {
    program.command('score-trial')
        .description('Auto-generated command for score_trial')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await score_trial(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'score-trial' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
