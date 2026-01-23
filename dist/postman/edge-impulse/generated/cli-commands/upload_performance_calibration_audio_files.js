import { upload_performance_calibration_audio_files } from '../upload_performance_calibration_audio_files.js';
export function addUpload_performance_calibration_audio_filesCommand(program) {
    program.command('upload-performance-calibration-audio-files')
        .description('Auto-generated command for upload_performance_calibration_audio_files')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await upload_performance_calibration_audio_files(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'upload-performance-calibration-audio-files' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
