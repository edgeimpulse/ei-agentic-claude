/**
 * Retrieve all transformation blocks.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/transformation
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_transformation_blocks(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/transformation", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
