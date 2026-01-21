import { profile_pretrained_model } from '../profile_pretrained_model.ts';
export function addProfile_pretrained_modelCommand(program) {
    program.command('profile-pretrained-model')
        .description('Auto-generated command for profile_pretrained_model')
        .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await profile_pretrained_model(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
