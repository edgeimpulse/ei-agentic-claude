/**
 * Deletes all samples for this project over all categories. This also invalidates all DSP and learn blocks. Note that this does not delete the data from cold storage.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/delete-all
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function remove_all_samples(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/raw-data/delete-all", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
