/**
 * Export the data of a Keras block (already split in train/validate data). Updates are streamed over the websocket API.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/train/keras/:learnId/data
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function export_keras_block_data(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/jobs/train/keras/:learnId/data", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
