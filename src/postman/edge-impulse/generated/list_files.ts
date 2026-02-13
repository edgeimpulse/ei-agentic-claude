/**
 * Lists all files included by the filter.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/data/files?dataset=<string>&filter=<string>&limit=<integer>&offset=<integer>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function list_files(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/data/files?dataset=<string>&filter=<string>&limit=<integer>&offset=<integer>", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
