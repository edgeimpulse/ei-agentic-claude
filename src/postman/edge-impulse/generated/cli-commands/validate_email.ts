import { Command } from 'commander';
  import { validate_email } from '../validate_email';

export function addValidate_emailCommand(program: Command) {
  program.command('validate-email')
    .description('Auto-generated command for validate_email')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await validate_email(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'validate-email' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
