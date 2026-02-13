/**
 * Save input / model configuration for a pretrained model. This overrides the current impulse. If you want to deploy a pretrained model from the API, see `startDeployPretrainedModelJob`.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/pretrained-model/save
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function save_parameters_for_pretrained_model(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/pretrained-model/save", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
