/**
 * Change the DSP file size limit for the project. This function is only available through a JWT token, and is not available to all users.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/dsp-file-size-limit
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function set_dsp_file_size_limit(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/dsp-file-size-limit", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
