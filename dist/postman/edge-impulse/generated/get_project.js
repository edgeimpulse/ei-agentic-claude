/**
 * Admin-only API to get project information.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/admin/projects/:projectId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_project(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/admin/projects/:projectId", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
