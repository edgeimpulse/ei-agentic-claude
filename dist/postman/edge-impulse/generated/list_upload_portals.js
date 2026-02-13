/**
 * Retrieve all configured upload portals.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/portals
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function list_upload_portals(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/portals", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
