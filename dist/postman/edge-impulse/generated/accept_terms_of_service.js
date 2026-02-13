/**
 * Accept Terms of Service.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/user/accept-tos
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function accept_terms_of_service(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/user/accept-tos", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
