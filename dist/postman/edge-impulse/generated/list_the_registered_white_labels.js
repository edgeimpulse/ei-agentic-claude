/**
 * Retrieve the list of registered white labels.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/whitelabels
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function list_the_registered_white_labels(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/whitelabels", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
