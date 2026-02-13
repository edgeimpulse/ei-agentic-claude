/**
 * Set the password for a new SSO user. This function is only available through an SSO access token.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/users/:userId/set-password
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function set_password_for_sso_user(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/users/:userId/set-password", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
