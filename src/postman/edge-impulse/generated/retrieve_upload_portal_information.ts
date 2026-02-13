/**
 * Retrieve a single upload portals identified by ID.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/portals/:portalId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function retrieve_upload_portal_information(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/portals/:portalId", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
