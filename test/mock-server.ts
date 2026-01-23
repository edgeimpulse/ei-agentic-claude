import { http, HttpResponse, PathParams } from 'msw';
import { setupServer } from 'msw/node';
import { beforeAll, afterEach, afterAll } from 'vitest';

// Comprehensive mock data structures for all Edge Impulse API categories
const mockData = {
  // User Management
  users: [
    {
      id: 1,
      username: 'test-user',
      email: 'test@example.com',
      created: '2024-01-01T00:00:00Z',
      photo: 'https://cdn.edgeimpulse.com/user-photo.jpg',
      name: 'Test User'
    }
  ],

  // Projects
  projects: [
    {
      id: 123,
      name: 'Test Project',
      description: 'A test project for comprehensive API testing',
      created: '2024-01-01T00:00:00Z',
      owner: 'test-user',
      collaborators: [],
      type: 'classification',
      organizationId: 456
    },
    {
      id: 124,
      name: 'Audio Detection Project',
      description: 'Audio classification project',
      created: '2024-01-02T00:00:00Z',
      owner: 'test-user',
      type: 'classification'
    }
  ],

  // Organizations
  organizations: [
    {
      id: 456,
      name: 'Test Organization',
      created: '2024-01-01T00:00:00Z',
      owner: 'test-user'
    }
  ],

  // API Keys
  apiKeys: [
    {
      id: 1,
      name: 'test-key',
      apiKey: 'ei_test_key_12345',
      created: '2024-01-01T00:00:00Z',
      organizationId: 456
    }
  ],

  // Devices
  devices: [
    {
      id: 1,
      name: 'Test Device',
      deviceId: 'test-device-001',
      created: '2024-01-01T00:00:00Z'
    }
  ],

  // Data Samples
  samples: [
    {
      id: 1,
      filename: 'sample_001.wav',
      created: '2024-01-01T00:00:00Z',
      category: 'training',
      label: 'background'
    }
  ],

  // Impulses
  impulses: [
    {
      id: 1,
      name: 'test-impulse',
      created: '2024-01-01T00:00:00Z',
      projectId: 123,
      blocks: [
        { id: 1, name: 'DSP Block', type: 'dsp' },
        { id: 2, name: 'Classification Block', type: 'transfer-learning' }
      ]
    }
  ],

  // Jobs
  jobs: [
    {
      id: 456,
      created: '2024-01-01T00:00:00Z',
      status: 'finished',
      progress: 100,
      type: 'train',
      results: { accuracy: 0.95, loss: 0.05 }
    },
    {
      id: 789,
      created: '2024-01-02T00:00:00Z',
      status: 'running',
      progress: 50,
      type: 'optimize'
    }
  ],

  // DSP Blocks
  dspBlocks: [
    {
      id: 1,
      name: 'Test DSP Block',
      type: 'spectral-analysis',
      created: '2024-01-01T00:00:00Z'
    }
  ],

  // Transfer Learning Blocks
  transferLearningBlocks: [
    {
      id: 1,
      name: 'MobileNetV2',
      type: 'classification',
      created: '2024-01-01T00:00:00Z'
    }
  ],

  // Deploy Blocks
  deployBlocks: [
    {
      id: 1,
      name: 'TensorFlow Lite',
      type: 'tflite',
      created: '2024-01-01T00:00:00Z'
    }
  ],

  // Storage Buckets
  storageBuckets: [
    {
      id: 1,
      name: 'test-bucket',
      provider: 'aws',
      created: '2024-01-01T00:00:00Z'
    }
  ],

  // Files
  files: [
    {
      id: 1,
      name: 'model.tflite',
      size: 1024000,
      created: '2024-01-01T00:00:00Z'
    }
  ]
};

// Dynamic response generators
function generateMockResponse(endpoint: string, method: string, params: PathParams = {}) {
  const path = endpoint.split('/').filter(p => p && !p.startsWith(':'));
  const lastSegment = path[path.length - 1];

  // User endpoints
  if (endpoint.includes('/user')) {
    if (method === 'GET') return { user: mockData.users[0], success: true };
    if (method === 'POST') return { user: { ...mockData.users[0], ...params }, success: true };
  }

  // Projects endpoints
  if (endpoint.includes('/projects')) {
    if (method === 'GET') {
      if (endpoint.includes('/organizations/')) {
        return { projects: mockData.projects.filter(p => p.organizationId === parseInt(params.orgId as string)), success: true };
      }
      return { projects: mockData.projects, success: true };
    }
    if (method === 'POST') {
      const newProject = { id: Date.now(), ...params, created: new Date().toISOString() };
      return { project: newProject, success: true };
    }
  }

  // API Keys endpoints
  if (endpoint.includes('/apikeys')) {
    if (method === 'GET') return { apiKeys: mockData.apiKeys, success: true };
    if (method === 'POST') {
      const newKey = { id: Date.now(), ...params, created: new Date().toISOString() };
      return { apiKey: newKey, success: true };
    }
  }

  // Jobs endpoints
  if (endpoint.includes('/jobs')) {
    if (endpoint.includes('/status')) {
      const jobId = parseInt(params.jobId as string);
      const job = mockData.jobs.find(j => j.id === jobId) || mockData.jobs[0];
      return { job, success: true };
    }
    if (method === 'POST') {
      const newJob = { id: Date.now(), status: 'running', progress: 0, ...params, created: new Date().toISOString() };
      return { job: newJob, success: true };
    }
  }

  // Devices endpoints
  if (endpoint.includes('/devices')) {
    if (method === 'GET') return { devices: mockData.devices, success: true };
    if (method === 'POST') {
      const newDevice = { id: Date.now(), ...params, created: new Date().toISOString() };
      return { device: newDevice, success: true };
    }
  }

  // Data/Samples endpoints
  if (endpoint.includes('/data') || endpoint.includes('/samples')) {
    if (method === 'GET') return { samples: mockData.samples, success: true };
    if (method === 'POST') {
      const newSample = { id: Date.now(), ...params, created: new Date().toISOString() };
      return { sample: newSample, success: true };
    }
  }

  // Impulse endpoints
  if (endpoint.includes('/impulse')) {
    return { impulse: mockData.impulses[0], success: true };
  }

  // DSP Blocks
  if (endpoint.includes('/dsp')) {
    if (method === 'GET') return { dspBlocks: mockData.dspBlocks, success: true };
    if (method === 'POST') {
      const newBlock = { id: Date.now(), ...params, created: new Date().toISOString() };
      return { dspBlock: newBlock, success: true };
    }
  }

  // Transfer Learning Blocks
  if (endpoint.includes('/transfer-learning')) {
    if (method === 'GET') return { transferLearningBlocks: mockData.transferLearningBlocks, success: true };
  }

  // Deploy Blocks
  if (endpoint.includes('/deploy')) {
    if (method === 'GET') return { deployBlocks: mockData.deployBlocks, success: true };
  }

  // Storage endpoints
  if (endpoint.includes('/storage') || endpoint.includes('/buckets')) {
    if (method === 'GET') return { buckets: mockData.storageBuckets, success: true };
    if (method === 'POST') {
      const newBucket = { id: Date.now(), ...params, created: new Date().toISOString() };
      return { bucket: newBucket, success: true };
    }
  }

  // Files endpoints
  if (endpoint.includes('/files')) {
    if (method === 'GET') return { files: mockData.files, success: true };
    if (method === 'POST') return { file: { id: Date.now(), ...params }, success: true };
  }

  // Organizations
  if (endpoint.includes('/organizations')) {
    if (method === 'GET') return { organizations: mockData.organizations, success: true };
  }

  // Default success response for other endpoints
  return { success: true, message: `Mock response for ${method} ${endpoint}` };
}
  },
  success: true
};

export const server = setupServer(
  // User Management APIs
  http.get('https://studio.edgeimpulse.com/v1/api/user', () => {
    return HttpResponse.json(generateMockResponse('/user', 'GET'));
  }),
  http.post('https://studio.edgeimpulse.com/v1/api/user', async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json(generateMockResponse('/user', 'POST', body as PathParams));
  }),
  http.get('https://studio.edgeimpulse.com/v1/api/users', () => {
    return HttpResponse.json({ users: mockData.users, success: true });
  }),

  // Projects APIs
  http.get('https://studio.edgeimpulse.com/v1/api/projects', () => {
    return HttpResponse.json(generateMockResponse('/projects', 'GET'));
  }),
  http.get('https://studio.edgeimpulse.com/v1/api/organizations/:orgId/projects', ({ params }) => {
    return HttpResponse.json(generateMockResponse('/organizations/projects', 'GET', params));
  }),
  http.post('https://studio.edgeimpulse.com/v1/api/projects', async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json(generateMockResponse('/projects', 'POST', body as PathParams));
  }),
  http.post('https://studio.edgeimpulse.com/v1/api/projects/create', async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json(generateMockResponse('/projects/create', 'POST', body as PathParams));
  }),

  // API Keys APIs
  http.get('https://studio.edgeimpulse.com/v1/api/organizations/:orgId/apikeys', ({ params }) => {
    return HttpResponse.json(generateMockResponse('/organizations/apikeys', 'GET', params));
  }),
  http.post('https://studio.edgeimpulse.com/v1/api/organizations/:orgId/apikeys', async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json(generateMockResponse('/organizations/apikeys', 'POST', body as PathParams));
  }),

  // Jobs APIs
  http.get('https://studio.edgeimpulse.com/v1/api/organizations/:orgId/jobs/:jobId/status', ({ params }) => {
    return HttpResponse.json(generateMockResponse('/organizations/jobs/status', 'GET', params));
  }),
  http.post('https://studio.edgeimpulse.com/v1/api/:projectId/jobs/train/keras/:learnId', async ({ params }) => {
    return HttpResponse.json(generateMockResponse('/jobs/train/keras', 'POST', params));
  }),
  http.post('https://studio.edgeimpulse.com/v1/api/:projectId/jobs/optimize', async ({ params }) => {
    return HttpResponse.json(generateMockResponse('/jobs/optimize', 'POST', params));
  }),
  http.post('https://studio.edgeimpulse.com/v1/api/:projectId/jobs/retrain', async ({ params }) => {
    return HttpResponse.json(generateMockResponse('/jobs/retrain', 'POST', params));
  }),

  // Devices APIs
  http.get('https://studio.edgeimpulse.com/v1/api/devices', () => {
    return HttpResponse.json(generateMockResponse('/devices', 'GET'));
  }),
  http.post('https://studio.edgeimpulse.com/v1/api/devices', async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json(generateMockResponse('/devices', 'POST', body as PathParams));
  }),

  // Data/Samples APIs
  http.get('https://studio.edgeimpulse.com/v1/api/:projectId/data', ({ params }) => {
    return HttpResponse.json(generateMockResponse('/data', 'GET', params));
  }),
  http.post('https://studio.edgeimpulse.com/v1/api/:projectId/data', async ({ request, params }) => {
    const body = await request.json();
    return HttpResponse.json(generateMockResponse('/data', 'POST', { ...params, ...body } as PathParams));
  }),

  // Impulse APIs
  http.get('https://studio.edgeimpulse.com/v1/api/:projectId/impulse', ({ params }) => {
    return HttpResponse.json(generateMockResponse('/impulse', 'GET', params));
  }),

  // DSP Blocks APIs
  http.get('https://studio.edgeimpulse.com/v1/api/dsp-blocks', () => {
    return HttpResponse.json(generateMockResponse('/dsp-blocks', 'GET'));
  }),
  http.post('https://studio.edgeimpulse.com/v1/api/dsp-blocks', async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json(generateMockResponse('/dsp-blocks', 'POST', body as PathParams));
  }),

  // Transfer Learning Blocks APIs
  http.get('https://studio.edgeimpulse.com/v1/api/transfer-learning-blocks', () => {
    return HttpResponse.json(generateMockResponse('/transfer-learning-blocks', 'GET'));
  }),

  // Deploy Blocks APIs
  http.get('https://studio.edgeimpulse.com/v1/api/deploy-blocks', () => {
    return HttpResponse.json(generateMockResponse('/deploy-blocks', 'GET'));
  }),

  // Storage APIs
  http.get('https://studio.edgeimpulse.com/v1/api/storage/buckets', () => {
    return HttpResponse.json(generateMockResponse('/storage/buckets', 'GET'));
  }),
  http.post('https://studio.edgeimpulse.com/v1/api/storage/buckets', async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json(generateMockResponse('/storage/buckets', 'POST', body as PathParams));
  }),

  // Files APIs
  http.get('https://studio.edgeimpulse.com/v1/api/:projectId/files', ({ params }) => {
    return HttpResponse.json(generateMockResponse('/files', 'GET', params));
  }),
  http.post('https://studio.edgeimpulse.com/v1/api/:projectId/files', async ({ request, params }) => {
    const body = await request.json();
    return HttpResponse.json(generateMockResponse('/files', 'POST', { ...params, ...body } as PathParams));
  }),

  // Organizations APIs
  http.get('https://studio.edgeimpulse.com/v1/api/organizations', () => {
    return HttpResponse.json(generateMockResponse('/organizations', 'GET'));
  }),

  // Generic catch-all for unhandled Edge Impulse API endpoints
  http.all('https://studio.edgeimpulse.com/v1/api/*', ({ request }) => {
    const url = new URL(request.url);
    const endpoint = url.pathname.replace('/v1/api', '');
    return HttpResponse.json(generateMockResponse(endpoint, request.method));
  }),

  // Legacy API endpoints (without /v1/)
  http.all('https://studio.edgeimpulse.com/api/*', ({ request }) => {
    const url = new URL(request.url);
    const endpoint = url.pathname.replace('/api', '');
    return HttpResponse.json(generateMockResponse(endpoint, request.method));
  }),

  // Catch-all for unhandled requests
  http.all('*', ({ request }) => {
    console.warn(`Unhandled ${request.method} request to ${request.url}`);
    return new HttpResponse(null, { status: 404 });
  })
);

// Test utilities
export const testApiKey = 'ei_test_api_key_12345';

export function setupMockServer() {
  beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
}

// Export mock data for testing
export { mockData };
