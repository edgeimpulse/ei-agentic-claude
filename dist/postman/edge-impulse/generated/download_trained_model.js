/**
 * Download a trained model for a learning block. Depending on the block this can be a TensorFlow model, or the cluster centroids.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/learn-data/:learnId/model/:modelDownloadId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function download_trained_model(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/learn-data/:learnId/model/:modelDownloadId", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
