/**
 * Download output from a DSP block over all data in the training set, already sliced in windows. In Numpy binary format.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/dsp-data/:dspId/x/:category?raw=<boolean>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function download_dsp_data(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/dsp-data/:dspId/x/:category?raw=<boolean>", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
