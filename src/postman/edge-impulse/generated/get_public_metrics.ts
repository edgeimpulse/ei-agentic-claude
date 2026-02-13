/**
 * Get information about number of projects, compute and data samples. Updated once per hour.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api-metrics
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function get_public_metrics(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api-metrics", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
