/**
 * Get trained features for a single sample. This runs both the DSP prerequisites and the anomaly classifier.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/training/anomaly/:learnId/features/get-graph/classification/:sampleId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function trained_features_for_sample(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/training/anomaly/:learnId/features/get-graph/classification/:sampleId", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
