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
    expect(out).toContain('get-job-status');
  });

  it('train-model-keras has help', () => {
    const out = run(['train-model-keras', '--help']);
    expect(out).toMatch(/Auto-generated command for train_model_keras/);
  });

<<<<<<< HEAD
  it('get-job-status has help and options', () => {
    const out = run(['get-job-status', '--help']);
    expect(out).toMatch(/get_job_status/);
    expect(out).toMatch(/--params/);
=======
  it('wait-job has help and options', () => {
    const out = run(['wait-job', '--help']);
    expect(out).toMatch(/Auto-generated command for wait_job/);
>>>>>>> origin/main
  });
});
