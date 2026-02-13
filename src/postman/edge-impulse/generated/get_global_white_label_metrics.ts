/**
 * White label admin only API to get global metrics.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/whitelabel/metrics
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function get_global_white_label_metrics(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/whitelabel/metrics", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
