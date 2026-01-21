import { build_organizational_on_device_model } from '../build_organizational_on_device_model.ts';
export function addBuild_organizational_on_device_modelCommand(program) {
    program.command('build-organizational-on-device-model')
        .description('Auto-generated command for build_organizational_on_device_model')
        .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await build_organizational_on_device_model(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
