/**
 * Get performance calibration raw result
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/performance-calibration/raw-result
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function get_raw_result(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/performance-calibration/raw-result", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
