/**
 * Runs the DSP block against a sample. This will move the sliding window (dependent on the sliding window length and the sliding window increase parameters in the impulse) over the complete file, and run the DSP function for every window that is extracted.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId/features/get-graph/classification/:sampleId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function features_for_sample(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId/features/get-graph/classification/:sampleId", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
