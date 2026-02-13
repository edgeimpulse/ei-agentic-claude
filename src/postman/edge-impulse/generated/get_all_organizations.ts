/**
 * Admin-only API to get the list of all organizations.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/admin/organizations?name=<string>&active=<integer>&sort=<string>&limit=<integer>&offset=<integer>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function get_all_organizations(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/admin/organizations?name=<string>&active=<integer>&sort=<string>&limit=<integer>&offset=<integer>", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
