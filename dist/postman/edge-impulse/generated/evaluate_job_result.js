/**
 * Get evaluate job result, containing detailed performance statistics for every possible variant of the impulse.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/deployment/evaluate
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function evaluate_job_result(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/deployment/evaluate", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
