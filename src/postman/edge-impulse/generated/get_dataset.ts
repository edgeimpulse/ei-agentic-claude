/**
 * Get information about a dataset
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/dataset/:dataset
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function get_dataset(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/dataset/:dataset", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
