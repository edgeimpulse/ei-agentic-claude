/**
 * Retrieve all configured storage buckets. This does not list the secret key.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/buckets
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function list_storage_buckets(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/buckets", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
