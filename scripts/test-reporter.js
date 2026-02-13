#!/usr/bin/env node

import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function runTests() {
  try {
    // Run tests with JSON reporter for programmatic output
    const output = execSync('npm test -- --reporter=json', {
      cwd: path.resolve(__dirname, '..'),
      encoding: 'utf8',
      stdio: 'pipe'
    });

    const results = JSON.parse(output);

    // Transform results into a more programmatic format
    const programmaticResults = {
      timestamp: new Date().toISOString(),
      framework: 'vitest',
      version: results.config?.version || 'unknown',
      total: {
        files: results.numTotalTestSuites,
        tests: results.numTotalTests,
        passed: results.numPassedTests,
        failed: results.numFailedTests,
        duration: results.testResults?.[0]?.perfStats?.runtime || 0
      },
      files: results.testResults.map(file => ({
        name: path.basename(file.testFilePath),
        path: file.testFilePath,
        status: file.status,
        duration: file.perfStats?.runtime || 0,
        tests: file.testResults.map(test => ({
          name: test.title,
          status: test.status,
          duration: test.duration || 0,
          error: test.failureMessages?.[0] || null
        }))
      }))
    };

    console.log(JSON.stringify(programmaticResults, null, 2));
    return programmaticResults;

  } catch (error) {
    console.error('Failed to run tests:', error.message);
    process.exit(1);
  }
}

// Alternative: Parse verbose text output and include API coverage
function parseVerboseOutput() {
  try {
    const output = execSync('npm test -- --reporter=verbose', {
      cwd: path.resolve(__dirname, '..'),
      encoding: 'utf8',
      stdio: 'pipe'
    });

    const lines = output.split('\n');
    const results = {
      timestamp: new Date().toISOString(),
      framework: 'vitest',
      files: [],
      apiCoverage: {
        totalApis: 0,
        categories: {},
        allApis: []
      }
    };

    const fileMap = new Map();

    for (const line of lines) {
      // Match individual test: ✓ test/cli.spec.ts > CLI smoke > shows top-level help
      const testMatch = line.match(/^ ✓ (.+\.spec\.ts) > (.+) > (.+?)(?:\s+\d+ms)?$/);
      if (testMatch) {
        const [, fileName, suiteName, testName] = testMatch;

        if (!fileMap.has(fileName)) {
          fileMap.set(fileName, {
            name: fileName,
            suites: new Map()
          });
        }

        const file = fileMap.get(fileName);

        if (!file.suites.has(suiteName)) {
          file.suites.set(suiteName, {
            name: suiteName,
            tests: []
          });
        }

        const suite = file.suites.get(suiteName);
        suite.tests.push({
          name: testName,
          status: 'passed'
        });
      }
    }

    // Convert maps to arrays
    for (const [fileName, file] of fileMap) {
      const fileObj = {
        name: fileName,
        suites: Array.from(file.suites.values()).map(suite => ({
          name: suite.name,
          tests: suite.tests
        }))
      };
      results.files.push(fileObj);
    }

    // Get API coverage information
    const apiDir = path.resolve(__dirname, '../src/postman/edge-impulse/generated');
    if (fs.existsSync(apiDir)) {
      const apiFiles = fs.readdirSync(apiDir)
        .filter(f => f.endsWith('.ts') && !f.includes('cli-commands'))
        .map(f => f.replace('.ts', ''));

      results.apiCoverage.totalApis = apiFiles.length;
      results.apiCoverage.allApis = apiFiles;

      // Categorize APIs
      const categories = {
        projects: apiFiles.filter(f => f.includes('project')),
        users: apiFiles.filter(f => f.includes('user')),
        jobs: apiFiles.filter(f => f.includes('job')),
        training: apiFiles.filter(f => f.includes('train') || f.includes('keras') || f.includes('optimize') || f.includes('retrain')),
        data: apiFiles.filter(f => f.includes('data') || f.includes('sample') || f.includes('dataset')),
        organizations: apiFiles.filter(f => f.includes('organization')),
        deployments: apiFiles.filter(f => f.includes('deploy')),
        dsp: apiFiles.filter(f => f.includes('dsp')),
        evaluation: apiFiles.filter(f => f.includes('evaluate')),
        files: apiFiles.filter(f => f.includes('file') || f.includes('upload') || f.includes('download')),
        admin: apiFiles.filter(f => f.includes('admin') || f.includes('white_label') || f.includes('theme')),
        auth: apiFiles.filter(f => f.includes('auth') || f.includes('login') || f.includes('token')),
        models: apiFiles.filter(f => f.includes('model') || f.includes('impulse')),
        devices: apiFiles.filter(f => f.includes('device')),
        pipelines: apiFiles.filter(f => f.includes('pipeline')),
        notifications: apiFiles.filter(f => f.includes('notification') || f.includes('email')),
        metrics: apiFiles.filter(f => f.includes('metric')),
        other: []
      };

      // Add uncategorized APIs to 'other'
      const categorized = Object.values(categories).flat();
      categories.other = apiFiles.filter(api => !categorized.includes(api));

      results.apiCoverage.categories = categories;
    }

    console.log(JSON.stringify(results, null, 2));
    return results;

  } catch (error) {
    console.error('Failed to parse test output:', error.message);
    process.exit(1);
  }
}

// Run the programmatic test reporter
if (process.argv[2] === '--json') {
  runTests();
} else {
  parseVerboseOutput();
}
