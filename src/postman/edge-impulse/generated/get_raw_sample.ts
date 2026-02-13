/**
 * Get raw sample data, but with only the axes selected by the DSP block. E.g. if you have selected only accX and accY as inputs for the DSP block, but the raw sample also contains accZ, accZ is filtered out. If you pass dspId = 0 this will return a raw graph without any processing.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId/raw-data/:sampleId?limitPayloadValues=<integer>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function get_raw_sample(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId/raw-data/:sampleId?limitPayloadValues=<integer>", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
