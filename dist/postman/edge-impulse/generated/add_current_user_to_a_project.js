/**
 * DEPRECATED. Admin-only API to add the current user to a project.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/admin/projects/:projectId/add
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function add_current_user_to_a_project(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/admin/projects/:projectId/add", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
