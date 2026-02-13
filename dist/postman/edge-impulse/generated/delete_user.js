/**
 * Delete a user. This function is only available through a JWT token, and can only remove the current user.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/users/:userId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function delete_user(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/users/:userId", params ?? {});
    return eiFetchJson(url, apiKey, { method: "DELETE" });
}
