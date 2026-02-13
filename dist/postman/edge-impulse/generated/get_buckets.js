/**
 * List all organizational storage buckets that a user has access to. This function is only available through a JWT token.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/users/:userId/buckets
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_buckets(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/users/:userId/buckets", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
