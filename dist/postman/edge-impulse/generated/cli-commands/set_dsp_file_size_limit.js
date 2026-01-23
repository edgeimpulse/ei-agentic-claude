import { set_dsp_file_size_limit } from '../set_dsp_file_size_limit';
export function addSet_dsp_file_size_limitCommand(program) {
    program.command('set-dsp-file-size-limit')
        .description('Auto-generated command for set_dsp_file_size_limit')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await set_dsp_file_size_limit(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
