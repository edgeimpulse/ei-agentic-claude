/**
 * Retrieve an organizational pipelines
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/pipelines/:pipelineId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function get_pipeline(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/pipelines/:pipelineId", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
