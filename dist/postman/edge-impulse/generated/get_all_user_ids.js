/**
 * DEPRECATED. Admin-only API to get list of all users.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/admin/users-ids
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_all_user_ids(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/admin/users-ids", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
