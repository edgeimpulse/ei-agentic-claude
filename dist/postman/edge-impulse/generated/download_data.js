/**
 * Download all data for selected data items. This function does not query the underlying bucket.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/data/download?dataset=<string>&dataIds=<string>&filter=<string>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function download_data(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/data/download?dataset=<string>&dataIds=<string>&filter=<string>", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
