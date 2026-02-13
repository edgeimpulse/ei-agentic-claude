/**
 * Get performance calibration parameter sets
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/performance-calibration/parameter-sets
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_parameter_sets(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/performance-calibration/parameter-sets", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
