/**
 * Add keywords and noise data to a project (for getting started guide)
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/keywords-noise
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function add_keywords_and_noise(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/jobs/keywords-noise", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
