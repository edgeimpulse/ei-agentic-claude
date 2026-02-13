/**
 * Updates a dsp block. Only values in the body will be updated.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/dsp/:dspId
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function update_dsp_block(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/dsp/:dspId", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
