/**
 * Sets the file name of the sample. This name does not need to be unique, but it's highly recommended to do so.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/rename
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function rename_sample(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/rename", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
