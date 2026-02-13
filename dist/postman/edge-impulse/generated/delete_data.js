/**
 * Delete all data for selected data items. This removes all data in the underlying data bucket.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/data/delete?dataset=<string>&dataIds=<string>&filter=<string>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function delete_data(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/data/delete?dataset=<string>&dataIds=<string>&filter=<string>", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
