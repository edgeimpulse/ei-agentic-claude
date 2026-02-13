/**
 * Update a third party authentication partner
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/third-party-auth/:authId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function update_third_party_auth(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/third-party-auth/:authId", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
