/**
 * Retrieve list of organizations that a user is a part of. If authenticating using JWT token this lists all the organizations the user has access to, if authenticating using an API key, this only lists that organization.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function list_active_organizations(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
