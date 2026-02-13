/**
 * Retrieve all API keys. This does **not** return the full API key, but only a portion (for security purposes).
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/apikeys
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_api_keys(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/apikeys", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
