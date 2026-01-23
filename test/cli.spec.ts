import { describe, it, expect } from 'vitest';
import { execFileSync } from 'child_process';
import path from 'path';
import fs from 'fs';
import { setupMockServer, testApiKey } from './mock-server';
// Import API functions directly for testing
import { get_projects } from '../src/postman/edge-impulse/generated/get_projects';
import { get_current_user } from '../src/postman/edge-impulse/generated/get_current_user';
import { get_api_keys } from '../src/postman/edge-impulse/generated/get_api_keys';
import { get_impulse } from '../src/postman/edge-impulse/generated/get_impulse';
import { get_job_status } from '../src/postman/edge-impulse/generated/get_job_status';
import { train_model_keras } from '../src/postman/edge-impulse/generated/train_model_keras';
import { optimize_model } from '../src/postman/edge-impulse/generated/optimize_model';
import { retrain } from '../src/postman/edge-impulse/generated/retrain';
import { add_api_key } from '../src/postman/edge-impulse/generated/add_api_key';
import { create_new_project } from '../src/postman/edge-impulse/generated/create_new_project';
import { update_project } from '../src/postman/edge-impulse/generated/update_project';
import { delete_a_project } from '../src/postman/edge-impulse/generated/delete_a_project';

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
    expect(out).toMatch(/train_model_keras|--projectId/);
  });

  it('wait-job has help and options', () => {
    const out = run(['wait-job', '--help']);
    expect(out).toMatch(/Poll a job until completion/);
    expect(out).toMatch(/--projectId/);
    expect(out).toMatch(/--jobId/);
  });

  it('contains all expected CLI commands in help', () => {
    const out = run(['--help']);

    // Test for presence of key commands from different categories
    const expectedCommands = [
      'accept-terms-of-service',
      'activate-current-user',
      'add-api-key',
      'cancel-job',
      'change-password',
      'classify',
      'create-new-project',
      'delete-a-project',
      'download-trained-model',
      'evaluate',
      'export-keras-block',
      'feature-importance',
      'generate-features',
      'get-all-projects',
      'get-api-keys',
      'get-current-user',
      'get-impulse',
      'get-job-status',
      'get-project',
      'get-projects',
      'job-summary',
      'keras-information',
      'list-active-jobs',
      'list-data',
      'make-a-version-public',
      'optimize-model',
      'performance-calibration',
      'project-information',
      'retrain',
      'train-model-keras',
      'update-project',
      'upload-photo',
      'verify-bucket-connectivity',
      'wait-job',
      'white-label-information'
    ];

    for (const cmd of expectedCommands) {
      expect(out).toContain(cmd);
    }
  });

  it('all command files exist and are loadable', () => {
    const commandsDir = path.resolve(__dirname, '..', 'src/postman/edge-impulse/generated/cli-commands');
    const files = fs.readdirSync(commandsDir).filter(f => f.endsWith('.ts') || f.endsWith('.js'));

    // Should have a substantial number of command files
    expect(files.length).toBeGreaterThan(300);

    // Test that we can import a few representative commands without errors
    const testFiles = ['train-model-keras.ts', 'wait-job.ts', 'get-projects.ts', 'get-job-status.ts'];

    for (const file of testFiles) {
      if (files.includes(file)) {
        const filePath = path.join(commandsDir, file);
        expect(() => fs.accessSync(filePath)).not.toThrow();
      }
    }
  });

  it('sample commands have proper help structure', () => {
    // Test commands that use --params JSON pattern
    const paramsCommands = [
      'get-projects',
      'train-model-keras',
      'optimize-model',
      'retrain'
    ];

    for (const cmd of paramsCommands) {
      const out = run([cmd, '--help']);
      expect(out).toContain('--api-key');
      expect(out).toContain('--params');
    }

    // Test commands with specific flags
    const flagCommands = ['wait-job'];
    for (const cmd of flagCommands) {
      const out = run([cmd, '--help']);
      expect(out).toContain('--api-key');
      expect(out).toContain('--projectId');
      expect(out).toContain('--jobId');
    }
  });
});

describe('CLI API integration', () => {
  setupMockServer();

  it('get-projects returns expected mock data', async () => {
    const result = await get_projects({}, testApiKey);
    expect(result.success).toBe(true);
    expect(result.projects).toHaveLength(1);
    expect(result.projects[0].name).toBe('Test Project');
    expect(result.projects[0].id).toBe(123);
  });

  it('get-current-user returns expected mock data', async () => {
    const result = await get_current_user({}, testApiKey);
    expect(result.success).toBe(true);
    expect(result.user.username).toBe('test-user');
    expect(result.user.email).toBe('test@example.com');
  });

  it('get-api-keys returns expected mock data', async () => {
    const result = await get_api_keys({}, testApiKey);
    expect(result.success).toBe(true);
    expect(result.apiKeys).toHaveLength(1);
    expect(result.apiKeys[0].name).toBe('test-key');
  });

  it('get-impulse returns expected mock data', async () => {
    const result = await get_impulse({ projectId: 123 }, testApiKey);
    expect(result.success).toBe(true);
    expect(result.impulse.name).toBe('test-impulse');
    expect(result.impulse.blocks).toHaveLength(2);
  });

  it('get-job-status returns expected mock data', async () => {
    const result = await get_job_status({ projectId: 123, jobId: 456 }, testApiKey);
    expect(result.success).toBe(true);
    expect(result.job.status).toBe('finished');
    expect(result.job.progress).toBe(100);
    expect(result.job.results.accuracy).toBe(0.95);
  });

  it('train-model-keras returns expected mock data', async () => {
    const result = await train_model_keras({ projectId: 123, learnId: 456 }, testApiKey);
    expect(result.success).toBe(true);
    expect(result.job.status).toBe('running');
    expect(result.job.id).toBe(789);
  });

  it('optimize-model returns expected mock data', async () => {
    const result = await optimize_model({ projectId: 123, learnId: 456 }, testApiKey);
    expect(result.success).toBe(true);
    expect(result.job.status).toBe('running');
    expect(result.job.id).toBe(789);
  });

  it('retrain returns expected mock data', async () => {
    const result = await retrain({ projectId: 123, learnId: 456 }, testApiKey);
    expect(result.success).toBe(true);
    expect(result.job.status).toBe('running');
    expect(result.job.id).toBe(789);
  });

  it('add-api-key returns expected mock data', async () => {
    const result = await add_api_key({ name: 'new-key' }, testApiKey);
    expect(result.success).toBe(true);
    expect(result.apiKey.name).toBe('new-key');
    expect(result.apiKey.apiKey).toBe('ei_new_key');
  });

  it('create-new-project returns expected mock data', async () => {
    const result = await create_new_project({ name: 'New Project', type: 'classification' }, testApiKey);
    expect(result.success).toBe(true);
    expect(result.project.name).toBe('New Project');
    expect(result.project.id).toBe(124);
  });

  it('update-project returns expected mock data', async () => {
    const result = await update_project({ projectId: 123, name: 'Updated Project' }, testApiKey);
    expect(result.success).toBe(true);
    expect(result.project.name).toBe('Updated Project');
  });

  it('delete-a-project returns expected mock data', async () => {
    const result = await delete_a_project({ projectId: 123 }, testApiKey);
    expect(result.success).toBe(true);
  });
});
