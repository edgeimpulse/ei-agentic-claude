/**
 * Export the training pipeline of a Keras block. Updates are streamed over the websocket API.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/train/keras/:learnId/export
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function export_keras_block(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/jobs/train/keras/:learnId/export", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
