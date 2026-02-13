/**
 * Clear all failed transform job from a create project job. Only jobs that have failed will be cleared.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/create-project/:createProjectId/transform/clear
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function clear_failed_transform_jobs(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/create-project/:createProjectId/transform/clear", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
