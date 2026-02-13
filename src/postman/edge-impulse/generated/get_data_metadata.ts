/**
 * Get a data item. This will HEAD the underlying bucket to retrieve the last file information.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/data/:dataId?filter=<string>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function get_data_metadata(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/data/:dataId?filter=<string>", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
