/**
 * Get information about an anomaly block, such as its dependencies. Use the impulse blocks to find the learnId.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/training/anomaly/:learnId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function anomaly_information(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/training/anomaly/:learnId", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
