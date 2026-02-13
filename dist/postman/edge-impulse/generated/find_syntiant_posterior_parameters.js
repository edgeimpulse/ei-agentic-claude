/**
 * Automatically find the current posterior parameters for the Syntiant deployment target
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/find-syntiant-posterior
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function find_syntiant_posterior_parameters(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/jobs/find-syntiant-posterior", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
