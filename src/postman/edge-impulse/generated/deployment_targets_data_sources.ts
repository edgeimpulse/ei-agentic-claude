/**
 * List deployment targets for a project from data sources page  (it shows some things like all Linux deploys, and hides 'fake' deploy targets like mobile phone / computer)
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/deployment/targets/data-sources
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function deployment_targets_data_sources(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/deployment/targets/data-sources", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
