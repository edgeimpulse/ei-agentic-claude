/**
 * Autotune DSP block parameters. Updates are streamed over the websocket API.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/autotune-dsp
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function autotune_dsp_parameters(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/jobs/autotune-dsp", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
