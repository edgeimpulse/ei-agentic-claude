import { describe, it, expect } from 'vitest';
import { execFileSync } from 'child_process';
import path from 'path';

const launcher = path.resolve(__dirname, '..', 'launch-cli.mjs');

function run(args: string[]) {
  return execFileSync(process.execPath, [launcher, ...args], { encoding: 'utf8' });
}

describe('CLI smoke', () => {
  it('shows top-level help', () => {
    const out = run(['--help']);
    expect(out).toContain('train-model-keras');
    expect(out).toContain('wait-job');
  });

  it('train-model-keras has help', () => {
    const out = run(['train-model-keras', '--help']);
    expect(out).toMatch(/Auto-generated command for train_model_keras/);
  });

  it('wait-job has help and options', () => {
    const out = run(['wait-job', '--help']);
    expect(out).toMatch(/Auto-generated command for wait_job/);
  });
});
