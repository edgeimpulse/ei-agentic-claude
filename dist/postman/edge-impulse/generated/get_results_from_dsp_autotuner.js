/**
 * Get a set of parameters, found as a result of running the DSP autotuner.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId/get-autotuner-results
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_results_from_dsp_autotuner(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId/get-autotuner-results", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
