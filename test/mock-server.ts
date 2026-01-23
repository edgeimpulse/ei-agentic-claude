import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { beforeAll, afterEach, afterAll } from 'vitest';

// Mock responses for Edge Impulse API endpoints
const mockProjectsResponse = {
  projects: [
    {
      id: 123,
      name: 'Test Project',
      description: 'A test project for CLI testing',
      created: '2024-01-01T00:00:00Z',
      owner: 'test-user',
      collaborators: [],
      type: 'classification'
    }
  ],
  success: true
};

const mockJobStatusResponse = {
  job: {
    id: 456,
    created: '2024-01-01T00:00:00Z',
    status: 'finished',
    progress: 100,
    results: {
      accuracy: 0.95,
      loss: 0.05
    }
  },
  success: true
};

const mockTrainingResponse = {
  job: {
    id: 789,
    created: '2024-01-01T00:00:00Z',
    status: 'running',
    progress: 0
  },
  success: true
};

const mockUserResponse = {
  user: {
    id: 1,
    username: 'test-user',
    email: 'test@example.com',
    created: '2024-01-01T00:00:00Z'
  },
  success: true
};

const mockImpulseResponse = {
  impulse: {
    id: 1,
    name: 'test-impulse',
    created: '2024-01-01T00:00:00Z',
    blocks: [
      {
        id: 1,
        name: 'DSP Block',
        type: 'dsp'
      },
      {
        id: 2,
        name: 'Classification Block',
        type: 'transfer-learning'
      }
    ]
  },
  success: true
};

const mockApiKeysResponse = {
  apiKeys: [
    {
      id: 1,
      name: 'test-key',
      apiKey: 'ei_test_key',
      created: '2024-01-01T00:00:00Z'
    }
  ],
  success: true
};

export const server = setupServer(
  // Get projects (user-scoped)
  http.get('https://studio.edgeimpulse.com/v1/api/projects', () => {
    return HttpResponse.json(mockProjectsResponse);
  }),

  // Get projects for organization
  http.get('https://studio.edgeimpulse.com/api/organizations/:orgId/projects', () => {
    return HttpResponse.json(mockProjectsResponse);
  }),

  // Get current user
  http.get('https://studio.edgeimpulse.com/api/user', () => {
    return HttpResponse.json(mockUserResponse);
  }),

  // Get API keys
  http.get('https://studio.edgeimpulse.com/api/organizations/:organizationId/apikeys', () => {
    return HttpResponse.json(mockApiKeysResponse);
  }),

  // Get impulse
  http.get('https://studio.edgeimpulse.com/api/:projectId/impulse', () => {
    return HttpResponse.json(mockImpulseResponse);
  }),

  // Get job status
  http.get('https://studio.edgeimpulse.com/api/organizations/:organizationId/jobs/:jobId/status', () => {
    return HttpResponse.json(mockJobStatusResponse);
  }),

  // Train model (Keras) - hardcoded URL from generated code
  http.post('https://studio.edgeimpulse.com/v1/api/123/jobs/train/keras/456', () => {
    return HttpResponse.json(mockTrainingResponse);
  }),

  // Optimize model - hardcoded URL from generated code
  http.post('https://studio.edgeimpulse.com/v1/api/123/jobs/optimize', () => {
    return HttpResponse.json(mockTrainingResponse);
  }),

  // Retrain model - hardcoded URL from generated code
  http.post('https://studio.edgeimpulse.com/v1/api/123/jobs/retrain', () => {
    return HttpResponse.json(mockTrainingResponse);
  }),

  // Add API key
  http.post('https://studio.edgeimpulse.com/api/organizations/:organizationId/apikeys', () => {
    return HttpResponse.json({
      apiKey: {
        id: 2,
        name: 'new-key',
        apiKey: 'ei_new_key',
        created: '2024-01-01T00:00:00Z'
      },
      success: true
    });
  }),

  // Create project
  http.post('https://studio.edgeimpulse.com/api/projects/create', () => {
    return HttpResponse.json({
      project: {
        id: 124,
        name: 'New Project',
        created: '2024-01-01T00:00:00Z'
      },
      success: true
    });
  }),

  // Update project
  http.post('https://studio.edgeimpulse.com/api/admin/projects/:projectId', () => {
    return HttpResponse.json({
      project: {
        id: 123,
        name: 'Updated Project',
        updated: '2024-01-01T00:00:00Z'
      },
      success: true
    });
  }),

  // Delete project
  http.delete('https://studio.edgeimpulse.com/api/admin/projects/:projectId', () => {
    return HttpResponse.json({ success: true });
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