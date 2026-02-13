/**
 * Admin-only API to update project properties.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/admin/projects/:projectId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function update_project(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/admin/projects/:projectId", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
