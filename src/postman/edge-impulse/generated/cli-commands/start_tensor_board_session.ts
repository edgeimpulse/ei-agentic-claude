import { Command } from 'commander';
  import { start_tensor_board_session } from '../start_tensor_board_session';

export function addStart_tensor_board_sessionCommand(program: Command) {
  program.command('start-tensor-board-session')
    .description('Auto-generated command for start_tensor_board_session')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await start_tensor_board_session(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'start-tensor-board-session' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
