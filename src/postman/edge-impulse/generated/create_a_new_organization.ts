/**
 * Admin-only API to create a new organization.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/admin/organizations
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function create_a_new_organization(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/admin/organizations", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
