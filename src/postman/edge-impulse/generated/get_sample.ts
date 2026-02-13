/**
 * Get a sample.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId?limitPayloadValues=<integer>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function get_sample(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId?limitPayloadValues=<integer>", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
