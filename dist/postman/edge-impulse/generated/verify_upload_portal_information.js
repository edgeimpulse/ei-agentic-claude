/**
 * Retrieve a subset of files from the portal, to be used in the data source wizard.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/portals/:portalId/verify
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function verify_upload_portal_information(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/portals/:portalId/verify", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
