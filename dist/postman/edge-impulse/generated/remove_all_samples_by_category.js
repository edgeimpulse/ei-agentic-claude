/**
 * Deletes all samples for this project over a single category. Note that this does not delete the data from cold storage.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/delete-all/:category
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function remove_all_samples_by_category(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/raw-data/delete-all/:category", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
