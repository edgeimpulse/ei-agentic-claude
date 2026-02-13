/**
 * DEPRECATED. Admin-only API to get list of all users that have been active in the past 30 days.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/admin/users-ids/active
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_all_user_ids_active_last_30_days(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/admin/users-ids/active", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
