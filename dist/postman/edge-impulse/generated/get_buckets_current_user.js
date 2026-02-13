/**
 * List all organizational storage buckets that the current user has access to. This function is only available through a JWT token.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/users/buckets
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_buckets_current_user(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/users/buckets", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
