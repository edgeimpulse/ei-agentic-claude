/**
 * Lists all data items. This can be filtered by the ?filter parameter.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/data?dataset=<string>&filter=<string>&limit=<integer>&offset=<integer>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function list_data(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/data?dataset=<string>&filter=<string>&limit=<integer>&offset=<integer>", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
