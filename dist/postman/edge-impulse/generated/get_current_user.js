/**
 * Get information about the current user. This function is only available through a JWT token.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/user
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_current_user(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/user", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
