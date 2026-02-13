/**
 * Completely clears the EON tuner state for this project.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/:projectId/optimize/state
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function delete_eon_tuner_state(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/optimize/state", params ?? {});
    return eiFetchJson(url, apiKey, { method: "DELETE" });
}
