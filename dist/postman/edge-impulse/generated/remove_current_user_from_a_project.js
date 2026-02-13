/**
 * DEPRECATED. Admin-only API to remove the current user from a project.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/admin/projects/:projectId/remove
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function remove_current_user_from_a_project(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/admin/projects/:projectId/remove", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
