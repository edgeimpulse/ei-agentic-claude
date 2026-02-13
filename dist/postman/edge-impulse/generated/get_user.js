/**
 * Admin-only API to get information about a user.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/admin/users/:userId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_user(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/admin/users/:userId", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
