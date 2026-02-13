/**
 * Updates a transfer learning block. Only values in the body will be updated.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/transfer-learning/:transferLearningId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function update_transfer_learning_block(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/transfer-learning/:transferLearningId", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
