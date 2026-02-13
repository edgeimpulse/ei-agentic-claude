/**
 * Get classify job result, containing the result for the complete testing dataset.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/classify/all/result
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function classify_job_result(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/classify/all/result", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
