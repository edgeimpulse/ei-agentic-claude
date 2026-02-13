/**
 * Set information about a dataset
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/dataset/:dataset
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function update_dataset(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/dataset/:dataset", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
