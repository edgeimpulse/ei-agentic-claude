/**
 * Evaluates optimal model architecture
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/optimize
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function optimize_model(params: any, apiKey: string) {
  const projectId = params?.projectId;
  if (!projectId) throw new Error('Missing required parameter `projectId`.');
  const { projectId: _p, ...body } = params;
  const url = `https://studio.edgeimpulse.com/v1/api/${encodeURIComponent(String(projectId))}/jobs/optimize`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (res.ok) return res.json();
  const text = await res.text();
  try {
    const err = JSON.parse(text);
    throw new Error(`Edge Impulse API error: ${err.message || JSON.stringify(err)}`);
  } catch {
    throw new Error(`Edge Impulse API error: ${res.status} ${res.statusText} - ${text}`);
  }
}
