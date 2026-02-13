/**
 * Retry all failed transform job from a transformation job. Only jobs that have failed will be retried.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/create-project/:createProjectId/transform/retry
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function retry_failed_transform_jobs(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/create-project/:createProjectId/transform/retry", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
