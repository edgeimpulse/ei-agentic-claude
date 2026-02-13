/**
 * Adds or updates the metadata associated to a sample.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/metadata
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function set_sample_metadata(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/metadata", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
