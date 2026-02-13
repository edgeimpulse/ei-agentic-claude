/**
 * Restore a project to a certain version. This can only applied to a project without data, and will overwrite your impulse and all settings.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/restore
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function restore_project_to_version(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/jobs/restore", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
