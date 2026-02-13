/**
 * Update all data items. HEADs all underlying buckets to retrieve the last file information. Use this API after uploading data directly to S3.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/data/refresh?dataset=<string>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function refresh_data(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/data/refresh?dataset=<string>", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
