/**
 * White label admin only API to get the list of all registered users.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/whitelabel/users?user=<string>&active=<integer>&tier=<string>&fields=<string>&sort=<string>&limit=<integer>&offset=<integer>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_all_white_label_users(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/whitelabel/users?user=<string>&active=<integer>&tier=<string>&fields=<string>&sort=<string>&limit=<integer>&offset=<integer>", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
