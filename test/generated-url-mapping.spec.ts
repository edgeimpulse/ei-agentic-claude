import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { get_impulse } from '../src/postman/edge-impulse/generated/get_impulse';
import { count_samples } from '../src/postman/edge-impulse/generated/count_samples';
import { get_all_projects } from '../src/postman/edge-impulse/generated/get_all_projects';

function makeJsonResponse(body: unknown, status = 200) {
  return {
    headers: { get: (_: string) => 'application/json; charset=utf-8' },
    text: async () => JSON.stringify(body),
    ok: status >= 200 && status < 300,
    status,
    statusText: 'OK',
  } as any;
}

function makeHtmlResponse(body: string, status = 500) {
  return {
    headers: { get: (_: string) => 'text/html; charset=utf-8' },
    text: async () => body,
    ok: status >= 200 && status < 300,
    status,
    statusText: 'Error',
  } as any;
}

describe('generated URL mapping and error handling', () => {
  let originalFetch: any;
  beforeEach(() => {
    originalFetch = globalThis.fetch;
  });
  afterEach(() => {
    globalThis.fetch = originalFetch;
    vi.restoreAllMocks();
  });

  it('substitutes :projectId in get_impulse and forwards apiKey', async () => {
    const mockFetch = vi.fn().mockImplementation(async (url: string, init: any) => {
      return makeJsonResponse({ ok: true });
    });
    globalThis.fetch = mockFetch as any;

    await get_impulse({ projectId: '123' }, 'KEY');

    expect(mockFetch).toHaveBeenCalled();
    const [calledUrl, calledInit] = mockFetch.mock.calls[0];
    expect(String(calledUrl)).toContain('/api/123/impulse');
    expect(calledInit.headers['x-api-key'] || calledInit.headers['x-api-key']).toBe('KEY');
  });

  it('maps query params for count_samples and removes placeholders', async () => {
    const mockFetch = vi.fn().mockImplementation(async (url: string, init: any) => {
      return makeJsonResponse({ count: 1 });
    });
    globalThis.fetch = mockFetch as any;

    await count_samples({ projectId: '123', category: 'training' }, 'KEY');

    const [calledUrl] = mockFetch.mock.calls[0];
    const u = String(calledUrl);
    expect(u).toContain('/api/123/raw-data/count');
    expect(u).toContain('category=training');
    // Should not contain placeholder tokens like <string> or :projectId
    expect(u).not.toContain(':projectId');
    expect(u).not.toContain('<string>');
  });

  it('throws helpful error on non-JSON responses', async () => {
    const mockFetch = vi.fn().mockImplementation(async () => {
      return makeHtmlResponse('<!DOCTYPE html><html>error</html>', 403);
    });
    globalThis.fetch = mockFetch as any;

    await expect(() => get_all_projects({}, 'KEY')).rejects.toThrow(/Unexpected non-JSON response/);
  });
});
