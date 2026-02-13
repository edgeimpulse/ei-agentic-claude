/**
 * Get metadata about a trained Keras block. Use the impulse blocks to find the learnId.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/training/keras/:learnId/metadata
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function keras_metadata(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/training/keras/:learnId/metadata", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
