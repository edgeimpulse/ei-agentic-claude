/**
 * Adds a dsp block.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/dsp
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function add_dsp_block(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/dsp", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
