/**
 * Receive info back about the earlier uploaded pretrained model (via `uploadPretrainedModel`) input/output tensors. If you want to deploy a pretrained model from the API, see `startDeployPretrainedModelJob`.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/pretrained-model
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_pretrained_model(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/pretrained-model", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
