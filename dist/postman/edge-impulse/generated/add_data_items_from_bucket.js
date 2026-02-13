/**
 * Bulk adds data items that already exist in a storage bucket. The bucket path specified should contain folders. Each folder is added as a data item in Edge Impulse.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/data/add-folder
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function add_data_items_from_bucket(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/data/add-folder", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
