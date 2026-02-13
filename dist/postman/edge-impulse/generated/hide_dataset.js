/**
 * Hide a dataset (does not remove underlying data)
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/dataset/:dataset/hide
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function hide_dataset(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/dataset/:dataset/hide", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
