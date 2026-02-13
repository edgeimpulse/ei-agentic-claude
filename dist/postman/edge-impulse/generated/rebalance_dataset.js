/**
 * Rebalances the dataset over training / testing categories. This resets the category for all data and splits it 80%/20% between training and testing. This is a deterministic process based on the hash of the name of the data.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/rebalance
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function rebalance_dataset(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/rebalance", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
