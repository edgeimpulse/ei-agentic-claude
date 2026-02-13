/**
 * Clears the current performance calibration parameters
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/:projectId/performance-calibration/parameters
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";

export async function clear_performance_calibration_parameters(params: any, apiKey: string) {
  const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/performance-calibration/parameters", params ?? {});
  return eiFetchJson(url, apiKey, { method: "DELETE" });
}
