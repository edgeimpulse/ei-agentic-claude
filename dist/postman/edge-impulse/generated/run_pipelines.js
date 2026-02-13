/**
 * Run an organizational pipeline
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/pipelines/:pipelineId/run?ignoreLastSuccessfulRun=<boolean>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function run_pipelines(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/pipelines/:pipelineId/run?ignoreLastSuccessfulRun=<boolean>", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
