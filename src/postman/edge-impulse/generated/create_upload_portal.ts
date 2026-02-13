/**
 * Creates a new upload portal for the organization.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/portals/create
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function create_upload_portal(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/portals/create", params ?? {});
  return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
