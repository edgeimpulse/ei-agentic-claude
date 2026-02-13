/**
 * Get performance calibration ground truth data
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/performance-calibration/ground-truth
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_ground_truth(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/performance-calibration/ground-truth", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
