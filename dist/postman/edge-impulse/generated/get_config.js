/**
 * Get config
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/optimize/config
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_config(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/optimize/config", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
