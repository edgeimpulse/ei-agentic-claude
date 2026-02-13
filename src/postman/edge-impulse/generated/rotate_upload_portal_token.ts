/**
 * Rotates the token for an upload portal.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/portals/:portalId/rotate-token
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function rotate_upload_portal_token(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/portals/:portalId/rotate-token", params ?? {});
  return eiFetchJson(url, apiKey, { method: "DELETE" });
}
