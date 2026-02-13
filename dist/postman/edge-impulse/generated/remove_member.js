/**
 * Remove a member from an organization. Note that you cannot invoke this function if only a single member is present to the organization.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/members/remove
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function remove_member(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/members/remove", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
