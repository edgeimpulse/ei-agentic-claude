/**
 * Delete an organizational pipelines
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/pipelines/:pipelineId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function delete_pipeline(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/pipelines/:pipelineId", params ?? {});
    return eiFetchJson(url, apiKey, { method: "DELETE" });
}
