/**
 * Get slice of raw sample data, but with only the axes selected by the DSP block. E.g. if you have selected only accX and accY as inputs for the DSP block, but the raw sample also contains accZ, accZ is filtered out.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId/raw-data/:sampleId/slice?sliceStart=<integer>&sliceEnd=<integer>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function get_raw_sample_slice(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId/raw-data/:sampleId/slice?sliceStart=<integer>&sliceEnd=<integer>", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
