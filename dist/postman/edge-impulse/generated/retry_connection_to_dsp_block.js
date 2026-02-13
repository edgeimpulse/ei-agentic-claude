/**
 * Retry launch a dsp block.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/dsp/:dspId/retry
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function retry_connection_to_dsp_block(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/organizations/:organizationId/dsp/:dspId/retry", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
