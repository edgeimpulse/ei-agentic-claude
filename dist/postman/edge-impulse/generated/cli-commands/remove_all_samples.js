import { remove_all_samples } from '../remove_all_samples';
export function addRemove_all_samplesCommand(program) {
    program.command('remove-all-samples')
        .description('Auto-generated command for remove_all_samples')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await remove_all_samples(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
