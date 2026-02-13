/**
 * Upload a zip file containing a custom transformation or deployment block.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/custom-block
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function upload_a_custom_block(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/custom-block", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
