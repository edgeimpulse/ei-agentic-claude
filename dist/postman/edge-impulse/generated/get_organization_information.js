/**
 * White label admin only API to list all information about an organization.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/whitelabel/organizations/:innerOrganizationId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_organization_information(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/whitelabel/organizations/:innerOrganizationId", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
