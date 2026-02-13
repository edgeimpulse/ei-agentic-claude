/**
 * Get performance calibration stored parameters
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/performance-calibration/parameters
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function get_parameters(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/performance-calibration/parameters", params ?? {});
  return eiFetchJson(url, apiKey, { method: "GET" });
}
