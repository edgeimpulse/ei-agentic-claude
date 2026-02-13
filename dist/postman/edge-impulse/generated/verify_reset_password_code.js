/**
 * Verify whether the reset password code for the user is valid.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api-user-verify-reset-password-code
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function verify_reset_password_code(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api-user-verify-reset-password-code", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
