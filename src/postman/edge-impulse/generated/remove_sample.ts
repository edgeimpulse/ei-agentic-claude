/**
 * Deletes the sample. Note that this does not delete the data from cold storage.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function remove_sample(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId", params ?? {});
  return eiFetchJson(url, apiKey, { method: "DELETE" });
}
