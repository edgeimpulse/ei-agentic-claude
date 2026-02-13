/**
 * DEPRECATED. Admin-only API to find a user by username or email address.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/admin/find-user?query=<string>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function find_a_user(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/admin/find-user?query=<string>", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
