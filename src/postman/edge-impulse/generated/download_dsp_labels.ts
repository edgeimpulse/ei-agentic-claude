/**
 * Download labels for a DSP block over all data in the training set, already sliced in windows.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/dsp-data/:dspId/y/:category
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function download_dsp_labels(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/dsp-data/:dspId/y/:category", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
