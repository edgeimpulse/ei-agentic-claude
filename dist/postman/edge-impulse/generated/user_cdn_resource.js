/**
 * Proxy function to retrieve data from the user CDN. This function is only used during development.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api-usercdn?path=<string>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function user_cdn_resource(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api-usercdn?path=<string>", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
