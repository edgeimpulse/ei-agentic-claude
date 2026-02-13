/**
 * If a sample failed processing, retry the processing operation.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/retry-processing
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function retry_processing(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/retry-processing", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
