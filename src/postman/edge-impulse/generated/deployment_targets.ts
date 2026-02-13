/**
 * List all deployment targets
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/deployment/targets
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function deployment_targets(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/deployment/targets", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
