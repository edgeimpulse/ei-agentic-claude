/**
 * Get information about a portal
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/portals/:portalId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function portal_info(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/portals/:portalId", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
