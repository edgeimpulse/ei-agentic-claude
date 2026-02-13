/**
 * Add an API key.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/apikeys
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function add_api_key(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/apikeys", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
