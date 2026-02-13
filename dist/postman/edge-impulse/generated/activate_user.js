/**
 * Activate a user account (requires an activation code). This function is only available through a JWT token.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/users/:userId/activate
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function activate_user(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/users/:userId/activate", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
