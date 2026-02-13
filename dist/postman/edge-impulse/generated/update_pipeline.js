/**
 * Update an organizational pipelines
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/pipelines/:pipelineId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function update_pipeline(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/pipelines/:pipelineId", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
