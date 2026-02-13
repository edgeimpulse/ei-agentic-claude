/**
 * Takes in a TFLite file and builds the model and SDK. Updates are streamed over the websocket API (or can be retrieved through the /stdout endpoint). Use getProfileTfliteJobResult to get the results when the job is completed.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/deploy-pretrained-model
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function deploy_pretrained_model(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/jobs/deploy-pretrained-model", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
