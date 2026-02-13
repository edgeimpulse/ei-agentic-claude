/**
 * t-SNE2 output of the raw dataset
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/data-explorer/has-features
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function check_data_explorer_features(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/raw-data/data-explorer/has-features", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
