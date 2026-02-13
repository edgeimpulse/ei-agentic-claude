/**
 * Activate a user that was created by a third party. This function is only available through a JWT token.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/user/activate-by-third-party-activation-code
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function activate_user_by_third_party_activation_code(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/user/activate-by-third-party-activation-code", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
