/**
 * White label admin only API to get project information.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/whitelabel/projects/:projectId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_a_white_label_project(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/whitelabel/projects/:projectId", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
