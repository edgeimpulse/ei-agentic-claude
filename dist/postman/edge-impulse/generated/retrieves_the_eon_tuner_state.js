/**
 * Retrieves the EON tuner state
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/optimize/state
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function retrieves_the_eon_tuner_state(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/optimize/state", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
