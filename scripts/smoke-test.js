#!/usr/bin/env node
import { execFileSync } from 'child_process';
import path from 'path';

function run(cmd, args = []){
  try{
    const out = execFileSync(cmd, args, { encoding: 'utf8' });
    return { ok: true, out };
  }catch(e){
    return { ok: false, out: e.stdout ? e.stdout.toString() : '', err: e };
  }
}

const launcher = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', 'launch-cli.mjs');

console.log('Running smoke tests...');

const checks = [
  {
    name: 'top-level help',
    cmd: process.execPath,
    args: [launcher, '--help'],
    expect: /train-model-keras|retrain|wait-job/
  },
  {
    name: 'train-model-keras help',
    cmd: process.execPath,
    args: [launcher, 'train-model-keras', '--help'],
    expect: /Auto-generated command for train_model_keras|--projectId|--learnId/
  },
  {
    name: 'wait-job help',
    cmd: process.execPath,
    args: [launcher, 'wait-job', '--help'],
    expect: /Poll a job until completion|--projectId|--jobId/
  }
];

let failed = false;
for(const check of checks){
  process.stdout.write(`- ${check.name}... `);
  const res = run(check.cmd, check.args);
  if(!res.ok){
    console.log('FAILED (process error)');
    console.error(res.err && res.err.message ? res.err.message : 'no error message');
    failed = true;
    continue;
  }
  if(!check.expect.test(res.out)){
    console.log('FAILED (output did not match)');
    console.log('--- stdout ---');
    console.log(res.out);
    failed = true;
    continue;
  }
  console.log('OK');
}

if(failed){
  console.error('Smoke tests failed');
  process.exit(2);
}
console.log('All smoke tests passed');
process.exit(0);
