/**
 * Upload a pretrained model and receive info back about the input/output tensors. If you want to deploy a pretrained model from the API, see `startDeployPretrainedModelJob`.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/pretrained-model/upload
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function upload_a_pretrained_model(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/pretrained-model/upload", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
