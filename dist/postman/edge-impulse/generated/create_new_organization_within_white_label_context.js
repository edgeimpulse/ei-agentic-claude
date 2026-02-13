/**
 * Create a new organization. This is an internal API only available to white label admins
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/whitelabel/organizations
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function create_new_organization_within_white_label_context(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/whitelabel/organizations", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
