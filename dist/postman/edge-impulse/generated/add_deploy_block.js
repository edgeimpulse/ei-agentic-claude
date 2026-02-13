/**
 * Adds a deploy block.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/deploy
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function add_deploy_block(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/deploy", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
