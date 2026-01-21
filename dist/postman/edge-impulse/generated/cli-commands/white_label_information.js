import { white_label_information } from '../white_label_information.ts';
export function addWhite_label_informationCommand(program) {
    program.command('white-label-information')
        .description('Auto-generated command for white_label_information')
        .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await white_label_information(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
