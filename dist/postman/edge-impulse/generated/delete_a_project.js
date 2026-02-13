/**
 * Admin-only API to delete a project.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/admin/projects/:projectId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function delete_a_project(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/admin/projects/:projectId", params ?? {});
    return eiFetchJson(url, apiKey, { method: "DELETE" });
}
