/**
 * Lists all possible DSP and ML blocks available for this white label.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/whitelabel/:whitelabelIdentifier/impulse/blocks
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_impulse_blocks(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/whitelabel/:whitelabelIdentifier/impulse/blocks", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
