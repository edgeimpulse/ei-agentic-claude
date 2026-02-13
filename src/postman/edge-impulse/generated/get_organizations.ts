/**
 * List all organizations for a user. This function is only available through a JWT token.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/users/:userId/organizations
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function get_organizations(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/users/:userId/organizations", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
