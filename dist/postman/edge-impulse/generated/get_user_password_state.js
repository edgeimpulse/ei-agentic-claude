/**
 * Tells whether the user needs to set its password.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api-user-need-to-set-password/:usernameOrEmail
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_user_password_state(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api-user-need-to-set-password/:usernameOrEmail", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
