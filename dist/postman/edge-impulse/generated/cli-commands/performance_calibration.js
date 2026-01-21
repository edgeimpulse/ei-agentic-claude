import { performance_calibration } from '../performance_calibration.ts';
export function addPerformance_calibrationCommand(program) {
    program.command('performance-calibration')
        .description('Auto-generated command for performance_calibration')
        .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await performance_calibration(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
