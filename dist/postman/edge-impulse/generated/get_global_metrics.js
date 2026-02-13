/**
 * Admin-only API to get global metrics.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/admin/metrics
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_global_metrics(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/admin/metrics", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
