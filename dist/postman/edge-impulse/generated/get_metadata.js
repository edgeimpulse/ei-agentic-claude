/**
 * Retrieve the metadata from a generated DSP block.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId/metadata
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_metadata(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId/metadata", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
