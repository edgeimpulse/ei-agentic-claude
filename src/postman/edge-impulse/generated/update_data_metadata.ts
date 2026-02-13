/**
 * Update the data item metadata.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/data/:dataId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function update_data_metadata(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/data/:dataId", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
