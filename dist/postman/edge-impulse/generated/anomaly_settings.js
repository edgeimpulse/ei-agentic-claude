/**
 * Configure the anomaly block, such as its minimum confidence score. Use the impulse blocks to find the learnId.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/training/anomaly/:learnId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function anomaly_settings(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/training/anomaly/:learnId", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
