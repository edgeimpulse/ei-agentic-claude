import { get_pretrained_model } from '../get_pretrained_model.js';
export function addGet_pretrained_modelCommand(program) {
    program.command('get-pretrained-model')
        .description('Auto-generated command for get_pretrained_model')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_pretrained_model(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'get-pretrained-model' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
