/**
 * Get information about a Keras block, such as its dependencies. Use the impulse blocks to find the learnId.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/training/keras/:learnId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function keras_information(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/training/keras/:learnId", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
