/**
 * Classify a complete file against the current impulse. This will move the sliding window (dependent on the sliding window length and the sliding window increase parameters in the impulse) over the complete file, and classify for every window that is extracted.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/classify/:sampleId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function classify_sample(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/classify/:sampleId", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
