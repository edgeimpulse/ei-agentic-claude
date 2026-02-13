/**
 * Retrieves DSP block parameters
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/optimize/dsp-parameters?organizationId=<integer>&organizationDspId=<integer>
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function retrieves_dsp_block_parameters(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/optimize/dsp-parameters?organizationId=<integer>&organizationDspId=<integer>", params ?? {});
    return eiFetchJson(url, apiKey, { method: "GET" });
}
