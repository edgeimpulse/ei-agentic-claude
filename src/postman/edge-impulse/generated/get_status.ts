/**
 * Get performance calibration status
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/performance-calibration/status
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function get_status(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/performance-calibration/status", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
