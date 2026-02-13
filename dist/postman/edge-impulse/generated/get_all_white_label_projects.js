/**
 * White label admin only API to get the list of all projects.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/whitelabel/projects?name=<string>&active=<integer>&sort=<string>&limit=<integer>&offset=<integer>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_all_white_label_projects(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/whitelabel/projects?name=<string>&active=<integer>&sort=<string>&limit=<integer>&offset=<integer>", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
