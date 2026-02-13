import { Command } from 'commander';
  import { get_tensor_board_session_status } from '../get_tensor_board_session_status';

export function addGet_tensor_board_session_statusCommand(program: Command) {
  program.command('get-tensor-board-session-status')
    .description('Auto-generated command for get_tensor_board_session_status')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_tensor_board_session_status(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-tensor-board-session-status' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
