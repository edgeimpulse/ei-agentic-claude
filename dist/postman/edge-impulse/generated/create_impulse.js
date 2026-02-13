/**
 * Sets the impulse for this project.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/impulse
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function create_impulse(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/impulse", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
