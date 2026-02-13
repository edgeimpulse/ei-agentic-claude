/**
 * Retrieve the feature importance for a DSP block (only available for blocks where dimensionalityReduction is not enabled)
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId/features/importance
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function feature_importance(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId/features/importance", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
