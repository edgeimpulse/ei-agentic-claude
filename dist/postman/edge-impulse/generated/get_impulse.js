/**
 * Retrieve the impulse for this project
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/impulse
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_impulse(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/impulse", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
