/**
 * Sets the label (also known as class) of the sample. Use the same label for similar types of data, as they are used during training.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/edit-label
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function edit_label(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/edit-label", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
