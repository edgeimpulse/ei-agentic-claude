/**
 * Take the output from a DSP block and train an anomaly detection model using K-means. Updates are streamed over the websocket API.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/train/anomaly/:learnId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function train_model_anomaly(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/jobs/train/anomaly/:learnId", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
