/**
 * Create a new third party authentication partner
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/third-party-auth
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function create_third_party_auth(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/third-party-auth", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
