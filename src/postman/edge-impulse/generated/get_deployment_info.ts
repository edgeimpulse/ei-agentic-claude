/**
 * Gives information on whether a deployment was already built for a type
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/deployment?type=<string>&modelType=<string>&engine=<string>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function get_deployment_info(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/deployment?type=<string>&modelType=<string>&engine=<string>", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
