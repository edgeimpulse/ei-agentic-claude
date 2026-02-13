/**
 * White label admin only API to get the list of all organizations.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/whitelabel/organizations?name=<string>&active=<integer>&sort=<string>&limit=<integer>&offset=<integer>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_all_organizations_within_a_white_label(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/whitelabel/organizations?name=<string>&active=<integer>&sort=<string>&limit=<integer>&offset=<integer>", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
