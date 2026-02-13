/**
 * Retrieve the names of the features the DSP block generates
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId/features/labels
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function feature_labels(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId/features/labels", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
