/**
 * Get information about a user through an activation code. This function is only available through a JWT token.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/user/by-third-party-activation-code
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_user_by_third_party_activation_code(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/user/by-third-party-activation-code", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
