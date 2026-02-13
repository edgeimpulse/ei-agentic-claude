/**
 * Test endpoint that can only be reached with admin rights.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/test-admin
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function admin_endpoint(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/test-admin", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
