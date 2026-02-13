/**
 * Create trial
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/optimize/:jobId/create-trial
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function create_trial(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/optimize/:jobId/create-trial", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
