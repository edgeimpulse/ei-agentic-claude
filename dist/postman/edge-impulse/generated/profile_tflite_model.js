/**
 * Takes in a TFLite model and returns the latency, RAM and ROM used for this model. Updates are streamed over the websocket API (or can be retrieved through the /stdout endpoint). Use getProfileTfliteJobResult to get the results when the job is completed.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/profile-tflite
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function profile_tflite_model(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/jobs/profile-tflite", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
