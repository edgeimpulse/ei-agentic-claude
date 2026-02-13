/**
 * Get evaluate job result, containing detailed performance statistics for every possible variant of the impulse. This only checks cache, and throws an error if there is no data in cache.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/deployment/evaluate/cache
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function check_evaluate_job_result_cache(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/deployment/evaluate/cache", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
