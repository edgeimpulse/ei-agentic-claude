/**
 * Enable a sample, ensuring that it is not excluded from the dataset.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/enable
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function enable_sample(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/enable", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
