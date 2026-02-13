/**
 * Download the labels for this learning block. This is data already processed by the signal processing blocks. Not all blocks support this function. If so, a GenericApiResponse is returned with an error message.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/training/:learnId/y
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function download_labels(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/training/:learnId/y", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
