/**
 * Export all the data in the project in WAV format.  Updates are streamed over the websocket API.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/export/wav
 */
import { buildEiUrl, eiFetchJson } from "./_request.js";
export async function export_data_as_wav(params, apiKey) {
    const url = buildEiUrl("https://studio.edgeimpulse.com/api/:projectId/jobs/export/wav", params ?? {});
    return eiFetchJson(url, apiKey, { method: "POST", body: JSON.stringify(params ?? {}) });
}
