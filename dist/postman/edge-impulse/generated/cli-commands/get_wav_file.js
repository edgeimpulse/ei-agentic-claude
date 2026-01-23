import { get_wav_file } from '../get_wav_file.js';
export function addGet_wav_fileCommand(program) {
    program.command('get-wav-file')
        .description('Auto-generated command for get_wav_file')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_wav_file(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'get-wav-file' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
