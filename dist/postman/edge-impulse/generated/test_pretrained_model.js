/**
 * Test out a pretrained model (using raw features) - upload first via  `uploadPretrainedModel`. If you want to deploy a pretrained model from the API, see `startDeployPretrainedModelJob`.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/pretrained-model/test
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function test_pretrained_model(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/pretrained-model/test", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
