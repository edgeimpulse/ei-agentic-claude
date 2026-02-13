/**
 * Deletes an upload portal for the organization.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/portals/:portalId/delete
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function delete_upload_portal(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/portals/:portalId/delete", params ?? {});
    return eiFetchJson(url, apiKey, { method: "DELETE" });
}
