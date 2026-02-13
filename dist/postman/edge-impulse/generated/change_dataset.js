/**
 * Change the dataset for selected data items.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/data/change-dataset?dataset=<string>&dataIds=<string>&filter=<string>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function change_dataset(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/data/change-dataset?dataset=<string>&dataIds=<string>&filter=<string>", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
