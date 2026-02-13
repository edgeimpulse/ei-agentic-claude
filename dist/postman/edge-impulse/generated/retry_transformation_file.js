/**
 * Retry a transformation action on a file from a transformation job. Only files that have failed can be retried.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/create-project/:createProjectId/files/:createProjectFileId/retry
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function retry_transformation_file(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/create-project/:createProjectId/files/:createProjectFileId/retry", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
