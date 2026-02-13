/**
 * Request a password reset link for a user.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api-user-request-reset-password
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function request_reset_password(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api-user-request-reset-password", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
