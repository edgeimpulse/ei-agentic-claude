/**
 * Admin-only API to remove a user from a project.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/admin/projects/:projectId/members/:userId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function remove_user_from_a_project(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/admin/projects/:projectId/members/:userId", params ?? {});
    return eiFetchJson(url, apiKey, { method: "DELETE" });
}
