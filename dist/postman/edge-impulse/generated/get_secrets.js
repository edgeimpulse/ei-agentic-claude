/**
 * Retrieve all secrets.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/secrets
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_secrets(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/secrets", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
