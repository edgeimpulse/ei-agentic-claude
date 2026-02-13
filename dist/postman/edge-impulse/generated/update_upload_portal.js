/**
 * Updates an upload portal for the organization.
 * Method: PUT
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/portals/:portalId/update
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function update_upload_portal(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/portals/:portalId/update", params ?? {});
    return eiFetchJson(url, apiKey, { method: "PUT", body: JSON.stringify(params ?? {}) });
}
