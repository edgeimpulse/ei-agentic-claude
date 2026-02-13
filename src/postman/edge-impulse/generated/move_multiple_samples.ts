/**
 * Method: POST
 * URL: https://studio.edgeimpulse.com/v1/api/:projectId/raw-data/batch/moveSamples
 */
export async function move_multiple_samples(params: any, apiKey: string) {
  const pathParams: string[] = ["projectId"];
<<<<<<< HEAD
  const queryParams: string[] = ["category","labels","filename","maxLength","minLength","minFrequency","maxFrequency","signatureValidity","includeDisabled","ids","excludeIds","minLabel","maxLabel","search","dataType","minId","maxId","metadata","minDate","maxDate"];
=======
  const queryParams: string[] = ["category","labels","filename","maxLength","minLength","minFrequency","maxFrequency","signatureValidity","includeDisabled","ids"];
>>>>>>> origin/main

  let url = `https://studio.edgeimpulse.com/v1/api/:projectId/raw-data/batch/moveSamples`;
  for (const key of pathParams) {
    const value = params?.[key];
    if (value === undefined || value === null) {
      throw new Error(`Missing required path param: ${key}`);
    }
    url = url.replace(`:${key}`, encodeURIComponent(String(value)));
  }

  const urlObj = new URL(url);
  for (const key of queryParams) {
    const value = params?.[key];
    if (value !== undefined && value !== null) {
      urlObj.searchParams.set(key, String(value));
    }
  }

  const bodyParams: Record<string, unknown> = { ...(params || {}) };
  for (const key of pathParams) delete bodyParams[key];
  for (const key of queryParams) delete bodyParams[key];

  const hasBody = !['GET', 'HEAD'].includes('POST') && Object.keys(bodyParams).length > 0;

  const res = await fetch(urlObj.toString(), {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    ...(hasBody ? { body: JSON.stringify(bodyParams) } : {}),
  });

  const contentType = res.headers.get('content-type') || '';
  const text = await res.text();
  let data: any = null;
  if (contentType.includes('application/json')) {
    try {
      data = JSON.parse(text);
    } catch {
      data = null;
    }
  }

  if (!res.ok) {
    const message = data?.message || data?.error || text || res.statusText;
    throw new Error(`HTTP ${res.status}: ${message}`);
  }

  return data !== null ? data : text;
}
