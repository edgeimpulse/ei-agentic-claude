/**
 * Change the role of a member in an organization.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/members/:memberId/role
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function set_member_role(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/members/:memberId/role", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
