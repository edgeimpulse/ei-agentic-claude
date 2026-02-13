/**
 * Slice a sample into multiple segments. The original file will be marked as deleted, but you can crop any created segment to retrieve the original file.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/segment
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function segment_sample(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/segment", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
