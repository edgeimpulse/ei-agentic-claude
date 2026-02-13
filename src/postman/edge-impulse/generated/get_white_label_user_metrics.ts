/**
 * White label admin only API to get marketing metrics about a user.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/whitelabel/users/:userId/metrics
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function get_white_label_user_metrics(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/whitelabel/users/:userId/metrics", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
