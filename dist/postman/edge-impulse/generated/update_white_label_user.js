/**
 * White label admin only API to update user properties.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/whitelabel/users/:userId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function update_white_label_user(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/whitelabel/users/:userId", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
