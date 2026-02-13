/**
 * Admin-only API to list all information about this organization.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/admin/organizations/:organizationId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function organization_information(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/admin/organizations/:organizationId", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
