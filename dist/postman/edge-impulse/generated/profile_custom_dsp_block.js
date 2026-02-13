/**
 * Returns performance characteristics for a custom DSP block (needs `hasTfliteImplementation`). Updates are streamed over the websocket API (or can be retrieved through the /stdout endpoint). Use getProfileTfliteJobResult to get the results when the job is completed.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId/profile
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function profile_custom_dsp_block(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId/profile", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
