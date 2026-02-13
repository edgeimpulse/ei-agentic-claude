/**
 * White label admin only API to get information about a user.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/whitelabel/users/:userId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_a_white_label_user(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/whitelabel/users/:userId", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
