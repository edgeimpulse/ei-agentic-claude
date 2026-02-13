/**
 * Admin-only API to update organization properties such as name and logo.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/admin/organizations/:organizationId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function update_organization(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/admin/organizations/:organizationId", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
