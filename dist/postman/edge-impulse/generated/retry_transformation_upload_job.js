/**
 * Retry the upload job from a transformation job. Only jobs that have failed can be retried.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/create-project/:createProjectId/upload/retry
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function retry_transformation_upload_job(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/create-project/:createProjectId/upload/retry", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
