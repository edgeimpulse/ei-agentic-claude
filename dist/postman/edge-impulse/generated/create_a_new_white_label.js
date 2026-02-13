/**
 * Create a new white label
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/whitelabels
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function create_a_new_white_label(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/whitelabels", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
