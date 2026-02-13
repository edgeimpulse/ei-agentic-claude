import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const apiDir = path.resolve(__dirname, '../src/postman/edge-impulse/generated');

describe('API Coverage Tests', () => {
  const apiFiles = fs.readdirSync(apiDir)
    .filter(f => f.endsWith('.ts') && !f.includes('cli-commands'));

  it('should have substantial API coverage', () => {
    expect(apiFiles.length).toBeGreaterThan(300);
  });

  it('all API modules should be importable', async () => {
    const importPromises = apiFiles.map(async (file) => {
      const filePath = path.join(apiDir, file);
      const module = await import(pathToFileURL(filePath).href);
      return { file, module };
    });

    const results = await Promise.all(importPromises);

    // All modules should have been imported successfully
    expect(results).toHaveLength(apiFiles.length);

    // Each module should export at least one function
    for (const { file, module } of results) {
      const exportedFunctions = Object.values(module).filter(v => typeof v === 'function');
      expect(exportedFunctions.length).toBeGreaterThan(0);
    }
  });

  it('API functions should have correct signatures', async () => {
    // Test a representative sample of API functions
    const testFiles = [
      'get_projects.ts',
      'train_model_keras.ts',
      'optimize_model.ts',
      'retrain.ts',
      'get_job_status.ts',
      'get_current_user.ts',
      'create_new_project.ts',
      'add_api_key.ts'
    ];

    for (const file of testFiles) {
      if (apiFiles.includes(file)) {
        const filePath = path.join(apiDir, file);
        const module = await import(pathToFileURL(filePath).href);

        // Find the main exported function (usually the first async function)
        const apiFunction = Object.values(module).find(v =>
          typeof v === 'function' && v.constructor.name === 'AsyncFunction'
        ) as Function;

        expect(apiFunction).toBeDefined();
        expect(apiFunction.length).toBe(2); // Should take 2 parameters: params and apiKey
      }
    }
  });

  it('API functions should validate required parameters', async () => {
    // Test functions that require specific parameters
    const testCases = [
      {
        file: 'train_model_keras.ts',
        missingParams: [{}], // Missing projectId and learnId
        expectedError: /Missing required path param: projectId/
      },
      {
        file: 'optimize_model.ts',
        missingParams: [{}], // Missing projectId
        expectedError: /Missing required path param: projectId/
      },
      {
        file: 'retrain.ts',
        missingParams: [{}], // Missing projectId
        expectedError: /Missing required path param: projectId/
      }
    ];

    for (const { file, missingParams, expectedError } of testCases) {
      if (apiFiles.includes(file)) {
        const filePath = path.join(apiDir, file);
        const module = await import(pathToFileURL(filePath).href);

        const apiFunction = Object.values(module).find(v =>
          typeof v === 'function' && v.constructor.name === 'AsyncFunction'
        ) as Function;

        for (const params of missingParams) {
          await expect(apiFunction(params, 'fake-api-key')).rejects.toThrow(expectedError);
        }
      }
    }
  });

  it('API functions should handle parameter processing correctly', async () => {
    // Test parameter processing without making actual API calls
    const testCases = [
      {
        file: 'get_projects.ts',
        params: { organizationId: '123', type: 'classification' },
        apiKey: 'fake-key'
      },
      {
        file: 'get_current_user.ts',
        params: {},
        apiKey: 'fake-key'
      }
    ];

    for (const { file, params, apiKey } of testCases) {
      if (apiFiles.includes(file)) {
        const filePath = path.join(apiDir, file);
        const module = await import(pathToFileURL(filePath).href);

        const apiFunction = Object.values(module).find(v =>
          typeof v === 'function' && v.constructor.name === 'AsyncFunction'
        ) as Function;

        // Should not throw during parameter processing (will fail at fetch)
        // This tests that parameter validation and URL construction works
        try {
          await apiFunction(params, apiKey);
        } catch (error: any) {
          // Should fail at network level, not parameter validation
          expect(error.message).not.toMatch(/Missing required parameters/);
          expect(error.message).not.toMatch(/undefined/);
        }
      }
    }
  });

  it('should cover all major API categories', () => {
    const categories = {
      projects: apiFiles.filter(f => f.includes('project')),
      users: apiFiles.filter(f => f.includes('user')),
      jobs: apiFiles.filter(f => f.includes('job')),
      training: apiFiles.filter(f => f.includes('train') || f.includes('keras') || f.includes('optimize')),
      data: apiFiles.filter(f => f.includes('data') || f.includes('sample')),
      organizations: apiFiles.filter(f => f.includes('organization')),
      deployments: apiFiles.filter(f => f.includes('deploy')),
      dsp: apiFiles.filter(f => f.includes('dsp')),
      evaluation: apiFiles.filter(f => f.includes('evaluate')),
      files: apiFiles.filter(f => f.includes('file') || f.includes('upload')),
      admin: apiFiles.filter(f => f.includes('admin') || f.includes('white_label'))
    };

    // Each category should have multiple APIs
    expect(categories.projects.length).toBeGreaterThan(10);
    expect(categories.training.length).toBeGreaterThan(5);
    expect(categories.data.length).toBeGreaterThan(20);
    expect(categories.jobs.length).toBeGreaterThan(5);
  });

  it('API functions should have JSDoc comments', async () => {
    // Test that API functions have proper documentation
    const testFiles = ['get_projects.ts', 'train_model_keras.ts', 'get_job_status.ts'];

    for (const file of testFiles) {
      if (apiFiles.includes(file)) {
        const filePath = path.join(apiDir, file);
        const content = fs.readFileSync(filePath, 'utf8');

        // Should have JSDoc comment with Method and URL
        expect(content).toMatch(/\*\s*Method:/);
        expect(content).toMatch(/\*\s*URL:/);
        expect(content).toMatch(/export async function/);
      }
    }
  });
});
