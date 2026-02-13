/**
 * Updates a deploy block. Only values in the body will be updated.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/deploy/:deployId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function update_deploy_block(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/deploy/:deployId", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
