/**
 * Retrieve all organizational pipelines
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/pipelines
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function list_pipelines(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/pipelines", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
